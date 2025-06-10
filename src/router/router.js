import express from 'express'
import ProductsRoute from '../routes/productsRoute.js'
import PedidosRoute from '../routes/pedidosRoute.js'
const Router = express.Router()

Router.use('/products',ProductsRoute)
Router.use('/pedidos',PedidosRoute)

export default Router