import express from 'express'
import { ProductController } from '../controller/ProductsController.js'

const ProductsRoute = express.Router()

ProductsRoute.get('/',ProductController.getProducts)
ProductsRoute.post('/',ProductController.createProducts)


export default ProductsRoute