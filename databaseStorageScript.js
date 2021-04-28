
import connectionBD from './connectDB.js'
import productModel from './models/product.js'
import {topProducts, topDeals} from './data.js'

connectionBD()

const importAppStoreData = async () => {
    try {
        await productModel.deleteMany()
        await productModel.insertMany(topProducts)
        await productModel.insertMany(topDeals)
        console.log('Data import success')
        process.exit()
    } catch (error) {
        console.error('Error importing data')
        process.exit(1)
    }
}

importAppStoreData()