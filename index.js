import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import connectionBD from './connectDB.js'
import productRoutes from './routes/products.js'

connectionBD()
const app = express()

app.use(express.json())
app.use(cors())
app.use('/products', productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`jumia clone server running on port ${PORT}`)
})