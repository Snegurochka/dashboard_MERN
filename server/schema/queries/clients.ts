import { GraphQLList } from "graphql";
import Client from "../../models/Client";
import { ClientType } from "../types/client";

const clients = {
  type: new GraphQLList(ClientType),
  resolve: (parent:any, args:any) => {
    return Client.find();
  },
};

export default clients;