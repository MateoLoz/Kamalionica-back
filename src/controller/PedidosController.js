import { PedidosService } from "../service/PedidosService.js";

export class PedidosController  {
static async getPedidos (req,res) {
try {
    const ordenes = await PedidosService.getPedidos()
    res.status(200).send(ordenes)
} catch (err) {
    res.status(401).send(err.message)
}
}

static async PostPedidos (req,res) {
    const {carrito} = req.body
    if(!carrito) {
        res.send(401).send('Error al generar pedido, faltan campos')
    }
try {
    const orden = await PedidosService.PostPedidos(carrito)
    res.status(200).send('Pedido creado con exito!')
} catch (err) {
    res.status(401).send(err.message)
}
}

}