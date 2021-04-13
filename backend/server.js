import express from 'express'

import dotenv from 'dotenv'
import colors from 'colors'
import createOrderRoutes from './routes/createOrderRoutes.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()

// var jsonParser = bodyParser.json()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API IS Running....')
})

app.use('/api/orders', createOrderRoutes)

const Port = process.env.PORT || 5000

app.listen(
  Port,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode On Port ${Port}`.yellow.bold
  )
)
