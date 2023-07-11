import { Schema, model } from 'mongoose';

const tareaSchema = new Schema({
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
});

const Tarea = model('tarea', tareaSchema)

export default Tarea

/* 3-100 / 10-500 / 6-20
titulo: {
  },
  contenido: {
  },
  tipo: {
  },
*/