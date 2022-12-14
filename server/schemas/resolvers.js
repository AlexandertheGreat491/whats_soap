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
      { title, description, ingredients, steps, username, url }
    ) => {
      const sud = await Sud.create({
        title: title,
        description: description,
        ingredients: ingredients,
        steps: steps,
        createdAt: Date.now(),
        username: username,
        url: url
      });
      return sud;
    },

    editSud: async (
      _parent,
      { sudId, title, description, ingredients, steps, username, url }
    ) => {
      const updatedSud = await Sud.findByIdAndUpdate(
        { _id: sudId },
        {
          title: title,
          description: description,
          ingredients: ingredients,
          steps: steps,
          createdAt: Date.now(),
          username: username,
          url: url
        },
        { new: true }
      );
      return updatedSud;
    },

    deleteSud: async (_parent, { sudId }) => {
      const deletedSud = await Sud.findByIdAndDelete({ _id: sudId });
      return deletedSud;
    },
  },
};

module.exports = resolvers;
