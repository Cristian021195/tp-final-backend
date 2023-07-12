import { Router } from "express";
import { crearReceta, obtenerRecetas, obtenerReceta, modificarReceta, eliminarReceta } from "../controllers/recetas.controllers";
import { check } from "express-validator";
import validarReceta from "../helpers/validacionReceta";

const router = Router();

router.route('/nueva').post(validarReceta,crearReceta);
router.route('/').get(obtenerRecetas);
router.route('/:id').get(obtenerReceta).put(validarReceta,modificarReceta).delete(eliminarReceta);


export default router