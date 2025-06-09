import mongoose from 'mongoose'
import config from '../const/config.js';

export const mongooseConection = async () => {
    try {
       const options = {
      serverSelectionTimeoutMS: 5000,
      maxPoolSize: 10,
    };

    await mongoose.connect(config.conexionstring , options)
    console.log('conectado a mongo con exito! ✔')
    }
    catch(err) {
        console.log('error durante la conexion! ⚔', err.message)
    }
}