import { validationResult } from 'express-validator';
import Tarea from '../models/tareas';

// CREATE
export const crearTarea = async (req, res) => {
  try{
    const tarea = await Tarea.create(req.body);
    if(tarea){
      console.log('se creó');
      res.status(200).json(tarea);
    }else{
      console.log('no se creó');
      res.status(404).json({mensaje:'no se encontró nada'});
    }    
  }catch(error){
    res.status(400).json({
      mensaje: 'Error al buscar las tareas '+error.message,
    });
  }  
};

// READ
export const obtenerTareas = async (req, res) => {
  try{
    const tareas = await Tarea.find();
    if(tareas){
      console.log('encontró');
      res.status(200).json(tareas);
    }else{
      console.log('no encontró');
      res.status(404).json({mensaje:'no se encontró nada'});
    }    
  }catch(error){
    res.status(400).json({
      mensaje: 'Error al buscar las tareas '+error.message,
    });
  }  
};

export const obtenerTarea = async (req, res) => {
  try{
    const tarea = await Tarea.findById(req.params.id);
    if(tarea){
      console.log('encontró');
      res.status(200).json(tarea);
    }else{
      console.log('no encontró');
      res.status(404).json({mensaje:'no se encontró nada'});
    }    
  }catch(error){
    res.status(400).json({
      mensaje: 'Error al buscar las tareas '+error.message,
    });
  }  
};

// UPDATE
export const modificarTarea = async (req, res) => {
  try{
    //const tarea = await Tarea.findById(req.params.id);
    const tarea = await Tarea.findByIdAndUpdate(req.params.id, req.body);
    if(tarea){
      console.log('se modificó');
      res.status(200).json(tarea);
    }else{
      console.log('no se modificó');
      res.status(404).json({mensaje:'no se encontró nada'});
    }    
  }catch(error){
    res.status(400).json({
      mensaje: 'Error al modificar las tarea '+error.message,
    });
  }  
};


// DELETE
export const eliminarTarea = async (req, res) => {
  try{
    //const tarea = await Tarea.findById(req.params.id);
    const tarea = await Tarea.findByIdAndDelete(req.params.id);
    if(tarea){
      console.log('se eliminó');
      res.status(200).json(tarea);
    }else{
      console.log('no se eliminó');
      res.status(404).json({mensaje:'no se encontró nada'});
    }    
  }catch(error){
    res.status(400).json({
      mensaje: 'Error al eliminar la tarea '+error.message,
    });
  }  
};
