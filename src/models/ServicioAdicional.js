const { Schema, model, Types } = require('mongoose');

const ServicioAdicionalSchema = new Schema(
  {
    idHotel: { type: Types.ObjectId, required: true, ref: 'Hotel' },
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precioAdicional: { type: Number, required: true },
  },
  { collection: 'serviciosAdicionales' }
);

module.exports = model('ServicioAdicional', ServicioAdicionalSchema, 'serviciosAdicionales');
