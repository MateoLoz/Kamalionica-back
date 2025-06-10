import express from 'express'
import { PedidosController } from '../controller/PedidosController.js'

const PedidosRoute = express.Router()

PedidosRoute.get('/',PedidosController.getPedidos)
PedidosRoute.post('/',PedidosController.PostPedidos)


export default PedidosRoute