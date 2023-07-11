import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

/*
/* 3-100 / 10-500 / 4-7
nombre: {
  },
  rgba: {
    red
    green
    blue
    opacity
  },
  hex: {
  },
*/

const validarColor = [
    check("nombre")
      .notEmpty()
      .withMessage("El nombre es obligatorio")
      .isLength({ min: 3, max: 100 })
      .withMessage("El nombre debe tener entre 3 y 100 caracteres como maximo"),
    check('hex')
        .notEmpty()
        .withMessage('El valor hexadecimal es un obligatorio y con #')
        .isLength({ min: 4, max: 7 })
        .withMessage("El valor hexadecimal debe tener entre 4 y 7 caracteres como maximo y con #"),
    check('rgba.red')
        .notEmpty()
        .withMessage("El valor es obligatorio")
        .custom(((value)=>{
          if( value >= 0 && value<=255){
            return true;
          }else{
            throw new Error('El valor debe tener entre 0 y 255')
          }
        })),
    check('rgba.green')
        .notEmpty()
        .withMessage("El valor es obligatorio")
        .custom(((value)=>{
          if( value >= 0 && value<=255){
            return true;
          }else{
            throw new Error('El valor debe tener entre 0 y 255')
          }
        })),
    check('rgba.blue')
        .notEmpty()
        .withMessage("El valor es obligatorio")
        .custom(((value)=>{
          if( value >= 0 && value<=255){
            return true;
          }else{
            throw new Error('El valor debe tener entre 0 y 255')
          }
        })),
    check('rgba.opacity')
        .notEmpty()
        .withMessage("El valor es obligatorio")
        .custom(((value)=>{
          if( value >= 0 && value<=1){
            return true;
          }else{
            throw new Error('Opacidad entre 0 y 1')
          }
        })),
    (req, res, next )=>{ resultadoValidacion(req, res, next) }
  ]

  export default validarColor;
