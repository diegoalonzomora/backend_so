const { Schema, model, Types } = require('mongoose');

const HabitacionSchema = new Schema(
  {
    codigoHabitacion: { type: String, required: true },
    pisoHabitacion: { type: Number, required: true },
    capacidad: { type: Number, required: true },
    tipoHabitacion: { type: String, enum: ['Doble', 'Individual', 'Familiar', 'Suite'], required: true },
    estado: { type: String, enum: ['Disponible', 'Ocupada', 'Mantenimiento', 'Inactivo'], required: true },
    precioNoche: { type: Number, required: true },
    descripcion: { type: String, required: true },
    idHotel: { type: Types.ObjectId, required: true, ref: 'Hotel' },
  },
  { collection: 'habitaciones' }
);

module.exports = model('Habitacion', HabitacionSchema, 'habitaciones');
