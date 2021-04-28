import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectionBD = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log('connection to database success')
    } catch (error) {
        console.error('connection to database failed')
        process.exit(1)
    }
}

export default connectionBD