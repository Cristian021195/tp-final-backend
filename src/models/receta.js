import { Schema, model } from 'mongoose';

const recetaSchema = new Schema({
  nombre: {
    type: String,
    minLength: 3,
    maxLength: 100,
    required: true,
  },
  receta: [{
    type: String,
    required:true,
    minLength: 3,
    maxLength: 100,
  }],
  autor: {
    type: String,
    minLength: 3,
    maxLength: 50,
    required: true,
  },
  tipo: {
    type: String,
    minLength: 6,
    maxLength: 20,
    required: true,
  },
});

const Receta = model('receta', recetaSchema)

export default Receta

