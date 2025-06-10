import { ProductsService } from "../service/ProductsService.js"

export class ProductController  {
   static async getProducts(req, res) {
  try {
    const products = await ProductsService.getProducts()
    res.status(200).send(products)
  } catch (err) {
    res.status(404).send(err.message)
  }
}

   static async createProducts (req, res) {
  const { titulo, imagen, info, precio, talles, descripcion } = req.body

  if (!titulo || !imagen || !info || !precio || !talles || !descripcion) {
    return res.status(401).send('Todos los campos son requeridos')
  }

  try {
    const product = await ProductsService.createProducts(titulo, imagen, info, talles, descripcion, precio)
    res.status(200).send(product)
  } catch (err) {
    res.status(403).send(err.message)
  }
}

}