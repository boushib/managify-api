import { GraphQLObjectType, GraphQLSchema } from "graphql"
import { clients, client, addClient, deleteClient } from "./clientSchema"
import { projects, project, addProject } from "./projectSchema"

const query = new GraphQLObjectType({
  name: "RootQuery",
  fields: { clients, client, project, projects },
})

const mutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: { addClient, deleteClient, addProject },
})

export default new GraphQLSchema({ query, mutation })
