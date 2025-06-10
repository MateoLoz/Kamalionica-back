import PedidoModel from "../schema/PedidosSchema.js";

export class PedidosService {
    static async getPedidos () {
    try{
       const ordenes = await PedidoModel.find()
       return ordenes
        } catch(err){
         return err.message
        }
    }
    static async PostPedidos (carrito) {
        try {
        const orden = new PedidoModel({
        pedidos:carrito.items,
        total:carrito.total,
        email:carrito.email,
        provincia:carrito.provincia,
        direccion:carrito.direccion
        })
        await orden.save()
        return orden
    } catch(err) {
        return err.message
    }
}
}