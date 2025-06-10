import mongoose from 'mongoose'

const productoEnOrdenSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  info: { type: String, required: true },
  precio: { type: Number, required: true },
  talle: { type: String, required: true },
  imagen: { type: String, required: true }
}, { _id: false })

const PedidosSchema = new mongoose.Schema({
pedidos:{
    type:[productoEnOrdenSchema],
    required:true
},
total:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
provincia:{
    type:String,
    required:true
},
direccion:{
    type:String,
    required:true,
}
})


const PedidoModel = mongoose.model("pedidos", PedidosSchema)

export default PedidoModel