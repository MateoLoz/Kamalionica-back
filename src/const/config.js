 const config = {}

if (process.env.NODE_ENV === 'production') {
  config.port = process.env.PORT,
  config.conexionstring = process.env.CONEXION
} else {
  config.port = 3001,
  config.conexionstring = 'mongodb+srv://mateobinance1:Kamalionica1423_@cluster0.acphn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
}


export default config