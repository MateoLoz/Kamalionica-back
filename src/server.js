import express from 'express'
import cors from 'cors'
import { mongooseConection } from './conection/conexion.js'
import config from './const/config.js'
import Router from './router/router.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors({
    origin: '*',
    methods: 'GET, POST'
}))
 app.use('/api',Router)

app.get('/',(req,res)=> {
    console.log('hi')
    res.status(200).send('working!')
})


if (process.env.NODE_ENV !== 'test') {
  const startServer = async () => {
    try {
      await mongooseConection();
      app.listen(config.port, () => {
        console.log(`Server is running on port ${config.port} 🎉`);
      });
    } catch (err) {
      console.error('Failed to connect to the database:', err.message);
    }
  };

  startServer();
}

 
export default app;