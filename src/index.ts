import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import { config } from 'dotenv'
import cors from 'cors'

config()
const app = express()
// middlewares
app.use(express.json())
app.use(cors())

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// Root provides a resolver function for each API endpoint
const rootValue = {
  hello: () => {
    return 'Hello!'
  },
}

app.use(
  '/graphql',
  graphqlHTTP({
    rootValue,
    schema,
    graphiql: true,
  })
)

app.listen(process.env.PORT || 8080, () => {
  console.log(`App running on port ${process.env.PORT}.`)
})
