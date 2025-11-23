const { Schema, model } = require('mongoose');

const PaisSchema = new Schema(
  {
    nombrePais: { type: String, required: true },
    codigoPais: { type: String, required: true },
  },
  { _id: false }
);

const HotelSchema = new Schema(
  {
    nombreHotel: { type: String, required: true },
    calle: { type: String, required: true },
    ciudad: { type: String, required: true },
    pais: { type: PaisSchema, required: true },
    codigoPostal: { type: String, required: true },
    telefonoContacto: { type: String, required: true },
    correo: { type: String, required: true },
    calificacion: { type: Number, required: true },
    numeroHabitaciones: { type: Number, required: true },
    descripcion: { type: String, required: true },
  },
  { collection: 'hoteles' }
);

module.exports = model('Hotel', HotelSchema, 'hoteles');
