const { Schema, model, Types } = require('mongoose');

const ServicioSchema = new Schema(
  {
    nombreServicio: { type: String, required: true },
    descripcion: { type: String, required: true },
    idHotel: { type: Types.ObjectId, required: true, ref: 'Hotel' },
  },
  { collection: 'servicios' }
);

module.exports = model('Servicio', ServicioSchema, 'servicios');
