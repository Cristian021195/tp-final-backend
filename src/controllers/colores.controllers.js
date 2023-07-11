import { validationResult } from 'express-validator';
import Color from '../models/color';

// CREATE
export const crearColor = async (req, res) => {
  console.log(req.body)
  try{
    const tarea = await Color.create(req.body);
    if(tarea){
      console.log('se creó');
      res.status(200).json(tarea);
    }else{
      console.log('no se creó');
      res.status(404).json({mensaje:'no se encontró nada'});
    }    
  }catch(error){
    res.status(400).json({
      mensaje: 'Error al crear el color '+error.message,
    });
  }  
};

// READ
export const obtenerColores = async (req, res) => {
  try{
    const tareas = await Color.find();
    if(tareas){
      console.log('encontró');
      res.status(200).json(tareas);
    }else{
      console.log('no encontró');
      res.status(404).json({mensaje:'no se encontró nada'});
    }    
  }catch(error){
    res.status(400).json({
      mensaje: 'Error al buscar los colores '+error.message,
    });
  }  
};

export const obtenerColor = async (req, res) => {
  try{
    const tarea = await Color.findById(req.params.id);
    if(tarea){
      console.log('encontró');
      res.status(200).json(tarea);
    }else{
      console.log('no encontró');
      res.status(404).json({mensaje:'no se encontró nada'});
    }    
  }catch(error){
    res.status(400).json({
      mensaje: 'Error al buscar el color '+error.message,
    });
  }  
};

// UPDATE
export const modificarColor = async (req, res) => {
  try{
    //const tarea = await Color.findById(req.params.id);
    const tarea = await Color.findByIdAndUpdate(req.params.id, req.body);
    if(tarea){
      console.log('se modificó');
      res.status(200).json(tarea);
    }else{
      console.log('no se modificó');
      res.status(404).json({mensaje:'no se encontró nada'});
    }    
  }catch(error){
    res.status(400).json({
      mensaje: 'Error al modificar el color '+error.message,
    });
  }  
};


// DELETE
export const eliminarColor = async (req, res) => {
  try{
    //const tarea = await Color.findById(req.params.id);
    const tarea = await Color.findByIdAndDelete(req.params.id);
    if(tarea){
      console.log('se eliminó');
      res.status(200).json(tarea);
    }else{
      console.log('no se eliminó');
      res.status(404).json({mensaje:'no se encontró nada'});
    }    
  }catch(error){
    res.status(400).json({
      mensaje: 'Error al eliminar el color '+error.message,
    });
  }  
};
