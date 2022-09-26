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
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
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

    addSud: async (parent, args, context) => {
      if (context.user) {
        const sud = await Sud.create({
          ...args,
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

    addsudReaction: async (parent, { sudId, sudreactionBody }, context) => {
      if (context.user) {
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
