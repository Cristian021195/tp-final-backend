import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarReceta = [
  check("nombre")
  .notEmpty()
  .withMessage("El nombre es obligatorio")
  .isLength({ min: 3, max: 100 })
  .withMessage("El nombre debe tener entre 3 y 100 caracteres como maximo"),
check('autor')
    .notEmpty()
    .withMessage('El valor autor es un obligatorio y con #')
    .isLength({ min: 3, max: 50 })
    .withMessage("El valor autor debe tener entre 3 y 50 caracteres como maximo"),
check('receta')
    .isArray()
    .notEmpty()
    .withMessage("El listado debe tener almenos un elemento y ser del tipo"),
check('tipo')
    .notEmpty()
    .withMessage("El tipo es obligatorio")
    .isIn(['salado', 'dulce', 'combinado'])
    .withMessage('Debe ingresar un tipo valido'),
(req, res, next )=>{ resultadoValidacion(req, res, next) }
  ]

  export default validarReceta;
