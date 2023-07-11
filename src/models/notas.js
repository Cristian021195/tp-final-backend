import { Schema, model } from 'mongoose';
import Usuario from "./usuario";

const notaSchema = new Schema({
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
  usuario: {
    type: Schema.ObjectId,
    ref: 'usuario',
    required: true,
  },
  tipo: {
    type: String,
    minLength: 6,
    maxLength: 20,
    required: true,
  },
});

const Nota = model('nota', notaSchema)

export default Nota