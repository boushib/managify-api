import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { clients, client } from './clientSchema'
import { projects, project } from './projectSchema'

const query = new GraphQLObjectType({
  name: 'RootQuery',
  fields: { clients, client, project, projects },
})

export default new GraphQLSchema({ query })
