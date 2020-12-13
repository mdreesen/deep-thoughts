const { User, Thought } = require('../models');


// "parent" will not be used, but we need something in that first spot to access the "username" argument
// we use a ternary operator to check if "username" exists, if it does, we set params to an object with a username key set to that value
// if it does not, then we return an empty object
// destructure the _id argument value and place it into our ".findOne()" method to look up a single thought by its "_id"

  const resolvers = {
    Query: {
      users: async () => {
        return User.find()
          .select('-__v -password')
          .populate('thoughts')
          .populate('friends');
      },
      user: async (parent, { username }) => {
        return User.findOne({ username })
          .select('-__v -password')
          .populate('friends')
          .populate('thoughts');
      },
      thoughts: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Thought.find(params).sort({ createdAt: -1 });
      },
      thought: async (parent, { _id }) => {
        return Thought.findOne({ _id });
      }
    }
  };
  
  module.exports = resolvers;