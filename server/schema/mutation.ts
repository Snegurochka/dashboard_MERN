import { GraphQLObjectType } from "graphql";
import { addClient } from "./mutations/clients";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: ():any => ({
    addClient,
  }),
});

export default mutation;
