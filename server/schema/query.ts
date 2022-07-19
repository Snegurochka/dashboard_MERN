import { GraphQLObjectType } from "graphql";
import project from "./queries/project";

const query = new GraphQLObjectType({
  name: "Query",
  fields: (): any => ({
    project: project,
  }),
});

export default query;
