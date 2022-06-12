import {
  GraphQLEnumType,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql"
import { ClientType } from "./clientSchema"
import Project from "../models/project"
import Client from "../models/client"

export const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    clientId: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve: parent => {
        return Client.findById(parent.clientId)
      },
    },
  }),
})

export const projects = {
  type: new GraphQLList(ProjectType),
  resolve() {
    return Project.find()
  },
}

export const project = {
  type: ProjectType,
  args: {
    id: { type: GraphQLID },
  },
  resolve(_parent: any, args: any) {
    return Project.findById(args.id)
  },
}

export const addProject = {
  type: ProjectType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    status: {
      type: new GraphQLEnumType({
        name: "ProjectStatus",
        values: {
          NOT_STARTED: { value: "Not Started" },
          IN_PROGRESS: { value: "In Progress" },
          COMPLETED: { value: "Completed" },
        },
      }),
      defaulValue: "Not Started",
    },
    clientId: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (_parent: any, args: any) => {
    const { name, description, status, clientId } = args
    const project = new Project({ name, description, status, clientId })
    return project.save()
  },
}
