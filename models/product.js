import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: String,
    desc: String,
    image: String,
    current_price: Number,
    percentReduct: Number,
    status: {
        state: String,
        abroad: Boolean,
    },
    eligibility_statement: String,
})

const productModel = mongoose.model('product', productSchema)

export default productModel