const { signToken } = require('../../server/utils/auth');
const { User } = require('../models');

const resolvers = {
  Query: {
    // me: async (parent, { userId }) => {
    //   return User.findOne({ _id: userId });
    // }
    me: async (parent, { email }) => {
      return User.findOne({ email: email });
    }
  },

  Mutation: {
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },

    saveBook: async (parent, { userId, bookId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: { savedBooks: bookId },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }

      throw AuthenticationError;
    },

    removeBook: async (parent, { userId, bookId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: userId },
          { $pull: { savedBooks: bookId } },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
