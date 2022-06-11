import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import { CLIENTS } from '../data'

const Client = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
})

export const clients = {
  type: new GraphQLList(Client),
  resolve() {
    return CLIENTS
  },
}

export const client = {
  type: Client,
  args: {
    id: { type: GraphQLID },
  },
  resolve(parent: any, args: any) {
    return CLIENTS.find(c => c.id === args.id)
  },
}
