import { Schema, model } from 'mongoose';

const colorSchema = new Schema({
  nombre: {
    type: String,
    minLength: 3,
    maxLength: 100,
    required: true,
  },
  rgba: {
    type: new Schema({
      red: {type: Number},
      green: {type: Number},
      blue: {type: Number},
      opacity: {type: Number}
    }, { _id : false }),
    required: true,
  },
  hex: {
    type: String,
    minLength: 4,
    maxLength: 7,
    required: true,
  },
});

const Color = model('color', colorSchema)

export default Color

