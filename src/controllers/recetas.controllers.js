import { validationResult } from 'express-validator';
import Receta from '../models/receta';

// CREATE
export const crearReceta = async (req, res) => {
  console.log(req.body)
  try{
    const tarea = await Receta.create(req.body);
    if(tarea){
      console.log('se creó');
      res.status(200).json(tarea);
    }else{
      console.log('no se creó');
      res.status(404).json({mensaje:'no se encontró nada'});
    }    
  }catch(error){
    res.status(400).json({
      mensaje: 'Error al crear el receta '+error.message,
    });
  }  
};

// READ
export const obtenerRecetas = async (req, res) => {
  try{
    const tareas = await Receta.find();
    if(tareas){
      console.log('encontró');
      res.status(200).json(tareas);
    }else{
      console.log('no encontró');
      res.status(404).json({mensaje:'no se encontró nada'});
    }    
  }catch(error){
    res.status(400).json({
      mensaje: 'Error al buscar los recetas '+error.message,
    });
  }  
};

export const obtenerReceta = async (req, res) => {
  try{
    const tarea = await Receta.findById(req.params.id);
    if(tarea){
      console.log('encontró');
      res.status(200).json(tarea);
    }else{
      console.log('no encontró');
      res.status(404).json({mensaje:'no se encontró nada'});
    }    
  }catch(error){
    res.status(400).json({
      mensaje: 'Error al buscar el receta '+error.message,
    });
  }  
};

// UPDATE
export const modificarReceta = async (req, res) => {
  try{
    //const tarea = await Receta.findById(req.params.id);
    const tarea = await Receta.findByIdAndUpdate(req.params.id, req.body);
    if(tarea){
      console.log('se modificó');
      res.status(200).json(tarea);
    }else{
      console.log('no se modificó');
      res.status(404).json({mensaje:'no se encontró nada'});
    }    
  }catch(error){
    res.status(400).json({
      mensaje: 'Error al modificar el receta '+error.message,
    });
  }  
};


// DELETE
export const eliminarReceta = async (req, res) => {
  try{
    //const tarea = await Receta.findById(req.params.id);
    const tarea = await Receta.findByIdAndDelete(req.params.id);
    if(tarea){
      console.log('se eliminó');
      res.status(200).json(tarea);
    }else{
      console.log('no se eliminó');
      res.status(404).json({mensaje:'no se encontró nada'});
    }    
  }catch(error){
    res.status(400).json({
      mensaje: 'Error al eliminar el receta '+error.message,
    });
  }  
};
