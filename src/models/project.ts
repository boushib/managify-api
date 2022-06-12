import { Schema, model } from "mongoose"

const projectSchema = new Schema({
  clientId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Client",
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
    default: "Not Started",
  },
})

export default model("Project", projectSchema)
