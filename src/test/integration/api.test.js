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


describe('GET /api/products', () => {
  it('debe retornar un 200 ya que no hay productos', async () => {
    const res = await request.execute(app).get('/api/products');
    expect(res).to.have.status(200);
  });
});

describe('POST /api/products', () => {
  it('debe retornar un 401 al NO enviar todos los campos', async () => {

      const titulo = 'Jean Mom'
     const res = await request.execute(app).post('/api/products').send({titulo:titulo});
    expect(res).to.have.status(401)
    
  })
})