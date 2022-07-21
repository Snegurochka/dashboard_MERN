import { GraphQLObjectType } from "graphql";
import clients from "./queries/clients";
import project from "./queries/project";
import projects from "./queries/projects";

const query = new GraphQLObjectType({
  name: "Query",
  fields: (): any => ({
    clients,
    project,
    projects
  }),
});

export default query;
