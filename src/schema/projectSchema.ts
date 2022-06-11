import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import { PROJECTS } from '../data'

const Project = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLID },
    clientId: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
})

export const projects = {
  type: new GraphQLList(Project),
  resolve() {
    return PROJECTS
  },
}

export const project = {
  type: Project,
  args: {
    id: { type: GraphQLID },
  },
  resolve(parent: any, args: any) {
    return PROJECTS.find(p => p.id === args.id)
  },
}
