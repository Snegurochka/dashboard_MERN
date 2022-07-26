import { GraphQLID, GraphQLNonNull, GraphQLString } from "graphql";
import Client from "../../models/Client";
import { ClientType } from "../types/client";

type ClientAPIType = {
  name: string;
  email: string;
  phone: string;
};

type ClientDelAPIType = {
  id: number;
};

export const addClient = {
  type: ClientType,
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    phone: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve(_: string, args: ClientAPIType) {
    const client = new Client({
      name: args.name,
      email: args.email,
      phone: args.phone,
    });

    return client.save();
  },
};

export const deleteClient = {
  type: ClientType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve(_: string, { id }: ClientDelAPIType) {
    return Client.findByIdAndRemove(id);
  },
};
