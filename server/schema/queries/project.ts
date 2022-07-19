import { GraphQLID, GraphQLNonNull } from "graphql";
import { ProjectType } from "../types/project";

type ProjectAPIType = {
    id: number,
}

const products = [] as ProjectAPIType[];

const project = {
    type: ProjectType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: (_:string, { id }:ProjectAPIType) => {
      return products.filter((product) => { product.id === id});
    },
  };
  
  export default project;