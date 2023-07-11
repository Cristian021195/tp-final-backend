import { validationResult } from 'express-validator';
import Nota from '../models/notas';
//import { validarToken } from '../helpers/validarToken';
import Usuario from "../models/usuario";

export const obtenerNotas = async (req, res) => {
  try{
    //pedir a la BD la lista de productos
    const notas = await Nota.find();
    const usuario = await Usuario.populate(notas, {path: "usuario"})
    res.status(200).json(usuario);
  }catch(error){
    console.log(error);
    res.status(404).json({
      mensaje: 'Error al buscar las notas',
    });
  }
  
};
export const obtenerNota = async (req, res) => {
  try{
    console.log(req.params.id);
    const nota = await Nota.findById(req.params.id)
    res.status(200).json(nota);
  }catch(error){
    console.log(error);
    res.status(404).json({
      mensaje: 'Error no se encontro la nota',
    });
  }
};

export const obtenerNotaTipo = async (req, res) => {
  try{
    console.log(req.params.tipo);
    const notas = await Nota.findById(req.params.id)
    res.status(200).json(notas);
  }catch(error){
    console.log(error);
    res.status(404).json({
      mensaje: 'Error no se encontro la nota',
    });
  }
};

export const creaNota = async (req, res) => {
  try {
    // validar los datos del body antes de pedir algo a la BD
    console.log(req.body)

    // console.log(req.body);
    const notaNueva = new Nota(req.body);
    await notaNueva.save();
    res.status(201).json({
      mensaje: 'La nota se creo correctamente',
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      mensaje: 'Error al crear la nota: '+error.message.toString(),
    });
  }
};

export const borrarNota = async (req, res)=>{
  try{
   await Nota.findByIdAndDelete(req.params.id);
   res.status(200).json({
    mensaje: 'La nota fue eliminado correctamente',
  });
  }catch(error){
    console.log(error);
    res.status(404).json({
      mensaje: 'Error no se pudo eliminar la nota',
    });
  }
}

export const editarNota = async (req, res)=>{
  try{    
    await Nota.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: 'La nota fue editado correctamente',
    });
  }catch(error){
    console.log(error);
    res.status(400).json({
      mensaje: 'Error al intentar editar la nota',
    });
  }
}

