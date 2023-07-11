import { Router } from "express";
import { crearColor, obtenerColores, obtenerColor, modificarColor, eliminarColor } from "../controllers/colores.controllers";
import { check } from "express-validator";
import validarColor from "../helpers/validacionColor";

const router = Router();

router.route('/nuevo').post(validarColor,crearColor);
router.route('/').get(obtenerColores);
router.route('/:id').get(obtenerColor).put(validarColor,modificarColor).delete(eliminarColor);


export default router