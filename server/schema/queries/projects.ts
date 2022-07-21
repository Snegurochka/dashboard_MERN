import { GraphQLList } from "graphql";
import Project from "../../models/Project";
import { ProjectType } from "../types/project";

const projects = {
  type: new GraphQLList(ProjectType),
  resolve: () => {
    return Project.find();
  },
};

export default projects;
