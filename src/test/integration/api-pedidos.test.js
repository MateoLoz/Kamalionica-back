import * as chai from 'chai';  
import {default as chaiHttp, request} from "chai-http";
import app from '../../server.js';
chai.use(chaiHttp);
const expect = chai.expect;

describe('/root del proyecto', () => {
  it('debe retornar un 200 si el servidor se levanta correctamente', async ()=> {
     const res = await request.execute(app).get('/');
    expect(res).to.have.status(200);
  })
})


describe("GET pedidos", async () => {
it("se busca que al hacer una peticion get se obtengan todos los pedidos", async () => {
     const res = await request.execute(app).get('/api/pedidos');
    expect(res).to.have.status(200);
})
})

describe("POST pedidos", async () => {
it("se busca que al hacer una peticion post se inserte correctamente el pedido", async () => {
     const res = await request.execute(app).post('/api/pedidos').send({carrito:{
        items:[{
            titulo:"Producto Pipeline",
            info:"Producto Creado desde el Pipeline",
            precio:"2000",
            talle:"Xl",
            imagen:"https://cloud.camper.com/is/image/YnJldW5pbmdlcjAx/AU00006-009_01WF.jpg"

        }],
        total:"2000",
        provincia:"Pipeline",
        email:"pipeline@gmail.com",
        direccion:"Av Pipeline 2200"
     }});
    expect(res).to.have.status(200);
})
})