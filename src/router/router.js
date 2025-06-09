import express from 'express'
import ProductsRoute from '../routes/productsRoute.js'
const Router = express.Router()

Router.use('/products',ProductsRoute)


export default Router