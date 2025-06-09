import mongoose from "mongoose";

const ProductosSchema = new mongoose.Schema({
titulo:{
    type:String,
    required:true,
    minlength: [5, 'El nombre debe tener al menos 3 caracteres'],
    maxlength: [50, 'El nombre no debe exceder 50 caracteres']
},
imagen:[
    {
        type:String,
        validate:{
            validator: function (v) {
                return /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(v);
            },
            message: props => `${props.value} no es una imagen valida`
        }
    }
],
info:{
    type:String,
    required:true,
    minlength: [4, 'la informacion debe tener al menos 4 caracteres'],
    maxlength:[30, 'la informacion no debe exceder 30 caracteres'],
},
descripcion: {
    type:String,
    required:true,
    maxlength:[200, 'La descripcion no debe exceder 200 caracteres'],

},
precio:{
    type:String,
    required:true,
},
talles:[
    {
        type:String,
        validate:{
            validator:function (v) {
                return /^(?:\d{2}|xs|s|m|l|xl|xxl)$/i.test(v)
            },
         message: prop => `${prop.value} talle en formato incorrecto`
        }
    }
]

})

const Productos = mongoose.model("productos",ProductosSchema)

export default Productos