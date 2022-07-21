import { GraphQLList } from "graphql";
import Client from "../../models/Client";
import { ProjectType } from "../types/project";

const clients = {
  type: new GraphQLList(ProjectType),
  resolve: (parent:any, args:any) => {
    return Client.find();
  },
};

export default clients;