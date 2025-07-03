export const resolvers = {
  Query: {
    users: async (_, __, { dataSources }) => {
      return dataSources.userService.getUsers();
    },
    user: async (_, { id }, { dataSources }) => {
      return dataSources.userService.getUser(id);
    },
  },
  Mutation: {
    createUser: async (_, { name, email }, { dataSources }) => {
      return dataSources.userService.createUser({ name, email });
    },
  },
};
