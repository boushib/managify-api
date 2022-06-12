import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { config } from 'dotenv'
import 'colors'
import cors from 'cors'
import schema from './schema'
import { connectDB } from './database'

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

connectDB()

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`)
})
