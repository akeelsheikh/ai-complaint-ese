const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const connectDB = require('./config/db')

const complaintRoutes =
require('./routes/complaintRoutes')

const authRoutes =
require('./routes/authRoutes')

const aiRoutes =
require('./routes/aiRoutes')

dotenv.config()

connectDB()

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api/complaints', complaintRoutes)

app.use('/api/auth', authRoutes)

app.use('/api/ai', aiRoutes)

app.get('/', (req,res) => {

  res.send('API Running')

})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {

  console.log(`Server Running ${PORT}`)

})