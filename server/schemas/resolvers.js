const { AuthenticationError } = require('apollo-server-express');
const { User, Sud } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('suds');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('suds');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('suds');
    },
    suds: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Sud.find(params).sort({ createdAt: -1 });
    },
    sud: async (parent, { _id }) => {
      return Sud.findOne({ _id });
    }
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
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addSud: async (parent, args, context) => {
      if (context.user) {
        const sud = await Sud.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { suds: sud._id } },
          { new: true }
        );

        return sud;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addReaction: async (parent, { sudId, reactionBody }, context) => {
      if (context.user) {
        const updatedSud = await Sud.findOneAndUpdate(
          { _id: sudId },
          { $push: { reactions: { reactionBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedSud;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;