const { AuthenticationError } = require("apollo-server-express");
const { User, Sud } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // tested
    me: async (_parent, _args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },

    // tested
    users: async () => {
      return User.find().select("-__v -password");
    },

    // tested
    user: async (_parent, { username }) => {
      return User.findOne({ username }).select("-__v -password");
    },

    sudsFindAll: async (_parent) => {
      return Sud.find().sort({ createdAt: -1 });
    },

    // tested
    suds: async (_parent, { username }) => {
      const params = username ? { username } : {};
      return Sud.find(params).sort({ createdAt: -1 });
    },

    // tested
    sud: async (_parent, { _id }) => {
      return Sud.findOne({ _id });
    },
  },

  Mutation: {
    // tested
    addUser: async (_parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    // tested password is encrypted so no worked
    login: async (_parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    // next to test
    addSud: async (
      _parent,
      { title, description, ingredients, steps },
      context
    ) => {
      if (context.user) {
        const sud = await Sud.create({
          title: title,
          description: description,
          ingredients: ingredients,
          steps: steps,
          createdAt: Date.now(),
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { sud: sud._id } },
          { new: true }
        );

        return sud;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    // this works on remove context and change to the user string
    // it depends on the context
    addsudReaction: async (_parent, { sudId, sudreactionBody }, context) => {
      if (context.user.username) {
        const updatedSud = await Sud.findOneAndUpdate(
          { _id: sudId },
          {
            $push: {
              sudreactions: {
                sudreactionBody,
                username: context.user.username,
              },
            },
          },
          { new: true, runValidators: true }
        );

        return updatedSud;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
