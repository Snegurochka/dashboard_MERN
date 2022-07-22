import { GraphQLID, GraphQLNonNull } from "graphql";
import Project from "../../models/Project";
import { ProjectType } from "../types/project";

type ProjectAPIType = {
  id: number;
};

const project = {
  type: ProjectType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (_: string, { id }: ProjectAPIType) => {
    return Project.findById(id);
  },
};

export default project;
