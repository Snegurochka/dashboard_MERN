import { GraphQLObjectType } from "graphql";
import { addClient, deleteClient } from "./mutations/clients";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: ():any => ({
    addClient,
    deleteClient
  }),
});

export default mutation;
