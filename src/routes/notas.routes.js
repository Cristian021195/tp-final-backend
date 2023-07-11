import { Router } from "express";
import { creaNota, obtenerNota, obtenerNotaTipo, obtenerNotas } from "../controllers/notas.controllers";

const router = Router();

router.route('/').get(obtenerNotas);
router.route('/nueva').post(creaNota);
router.route('/nota/:id').get(obtenerNota);
router.route('/nota/:tipo').get(obtenerNotaTipo);

export default router