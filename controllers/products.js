import productModel from '../models/product.js'

export const getProducts = async (req, res) => {
    try {
        const allProducts = await productModel.find()
        res.status(200).json(allProducts)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "server error"})
    }
}

export const singleProduct = async (req, res) => {
    const productId = req.params.id
    try {
        const singleProduct = await productModel.findById(productId)
        res.status(200).json(singleProduct)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "server error"})
    }
}