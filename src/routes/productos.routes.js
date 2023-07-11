import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  obtenerProducto,
  obtenerProductos,
} from "../controllers/productos.controllers";
//import { check } from "express-validator";
import validarProducto from "../helpers/validacionProducto";

const router = Router();

// app.get('/productos', (req, res) => {
//   res.send('Se hizo la peticion get')
//   })

router
  .route("/productos")
  .get(obtenerProductos)
  .post(validarProducto, crearProducto);
router
  .route("/productos/:id")
  .get(obtenerProducto)
  .delete(borrarProducto)
  .put(validarProducto, editarProducto);
export default router;
