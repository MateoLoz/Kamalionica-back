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
    res.status(200).send('working!')
})




  app.listen(config.port, async ()=> {
    try {
     await mongooseConection()
     console.log(`server is running! on port ${config.port} 🎉`)
   } catch(err) {
    console.log(err.message)
    }
  })

export default app;