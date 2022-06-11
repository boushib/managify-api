import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { config } from 'dotenv'
import cors from 'cors'
import schema from './schema'

config()
const app = express()

// middlewares
app.use(express.json())
app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`)
})
