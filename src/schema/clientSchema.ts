import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql"
import Client from "../models/client"

export const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
})

export const clients = {
  type: new GraphQLList(ClientType),
  resolve() {
    return Client.find()
  },
}

export const client = {
  type: ClientType,
  args: {
    id: { type: GraphQLID },
  },
  resolve(_parent: any, args: any) {
    return Client.findById(args.id)
  },
}

export const addClient = {
  type: ClientType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    phone: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (_parent: any, args: any) => {
    const { name, email, phone } = args
    const client = new Client({ name, email, phone })
    return client.save()
  },
}

export const deleteClient = {
  type: ClientType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (_parent: any, args: any) => {
    return Client.findByIdAndDelete(args.id)
  },
}
