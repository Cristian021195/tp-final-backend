import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from "path"
import 'dotenv/config'
import './src/database/dbConnection'
import productosRouter from './src/routes/productos.routes'
//import usuariosRouter from './src/routes/usuarios.routes'
import notasRouter from './src/routes/notas.routes'
import tareasRouter from './src/routes/tareas.routes'

//usar un puerto
const app = express();

app.set('port', process.env.PORT || 4000);
app.listen( app.get('port'), ()=>{
    console.log('Estoy en el puerto '+app.get('port'))
})

//middlewares: funciones que se ejecutan antes de las rutas
app.use(cors()); //permitir conexiones remotas
app.use(express.json()) // Permite a mi aplicacion recibir objetos de tipo json en los request
app.use(morgan('dev')) // Me muestra en la consola informacion extra de las solicitudes get, post, put, etc.
// console.log(path.join(__dirname, '/public')); // La variable __dirname siempre devuelve la ruta absoluta de donde vive el proyecto
app.use(express.static(path.join(__dirname, '/public'))) // Esto nos permite poder ejecutar los archivos estaticos de mi proyecto en la ruta raiz de mi backend ej: http://localhost:4000

//rutas
// http://localhost:4000/apicafe/productos
app.use('/api', productosRouter)
//app.use('/api/auth', usuariosRouter)
app.use('/api/notas', notasRouter)
app.use('/api/tareas', tareasRouter)