import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

/*
titulo: {
    type: String,
    minLength: 3,
    maxLength: 100,
    required: true,
  },
  contenido: {
    type: String,
    minLength: 10,
    maxLength: 500,
    required: true,
  },
  tipo: {
    type: String,
    minLength: 6,
    maxLength: 20,
    required: true,
  },
* */

const validarTarea = [
    check("titulo")
      .notEmpty()
      .withMessage("El título es obligatorio")
      .isLength({ min: 3, max: 100 })
      .withMessage("El título debe tener entre 3 y 100 caracteres como maximo"),
    check('contenido')
        .notEmpty()
        .withMessage('El contenido es un obligatorio')
        .isLength({ min: 10, max: 100 })
        .withMessage("El contenido debe tener entre 10 y 100 caracteres como maximo"),
    check('tipo')
        .notEmpty()
        .withMessage("El tipo es obligatorio")
        .isLength({ min: 6, max: 20 })
        .withMessage("El tipo debe tener entre 6 y 20 caracteres como maximo"),
    (req, res, next )=>{ resultadoValidacion(req, res, next) }
  ]

  export default validarTarea;
