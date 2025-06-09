import Productos from "../schema/ProductosSchema.js";

export class ProductsService {
    static async getProducts () {

    }
    static async createProducts (titulo, imagen, info , talles , descripcion , precio ) {
        try {
          const producto = new Productos({
            titulo:titulo,
            imagen:imagen,
            info:info,
            talles:talles,
            descripcion:descripcion,
            precio,precio
          })
          await producto.save()
         return 'Producto agregado con exito' 
        }catch(err) {
            return err.message
        }
    }
}