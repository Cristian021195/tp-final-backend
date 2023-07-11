import { Router } from "express";
import { crearTarea, obtenerTareas, obtenerTarea, modificarTarea, eliminarTarea } from "../controllers/tareas.controllers";
import { check } from "express-validator";
import validarTarea from "../helpers/validacionTarea";

const router = Router();

router.route('/nueva').post(validarTarea,crearTarea);
router.route('/').get(obtenerTareas);
router.route('/:id').get(obtenerTarea).put(validarTarea,modificarTarea).delete(eliminarTarea);


export default router