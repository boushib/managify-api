import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'

config()
const app = express()
// middlewares
app.use(express.json())
app.use(cors())

app.get('/api/v1/', (req, res) => {
  res.status(200).json({ message: 'Welcome!' })
})

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}.`)
})
