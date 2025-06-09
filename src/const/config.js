 const config = {}

if (process.env.NODE_ENV === 'production') {
  config.port = process.env.PORT,
  config.conexionstring = process.env.CONEXION
} 


export default config