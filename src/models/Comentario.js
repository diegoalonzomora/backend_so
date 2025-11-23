const { Schema, model, Types } = require('mongoose');

const ReaccionesSchema = new Schema(
  {
    likes: { type: Number, required: true },
    dislikes: { type: Number, required: true },
  },
  { _id: false }
);

const ComentarioSchema = new Schema(
  {
    idCliente: { type: Types.ObjectId, required: true, ref: 'Cliente' },
    idHotel: { type: Types.ObjectId, ref: 'Hotel' },
    idHabitacion: { type: Types.ObjectId, ref: 'Habitacion' },
    texto: { type: String, required: true },
    fecha: { type: Date, required: true },
    reacciones: { type: ReaccionesSchema, required: true },
  },
  { collection: 'comentarios' }
);

ComentarioSchema.path('idHabitacion').validate(function validator() {
  return this.idHotel || this.idHabitacion;
}, 'Either idHotel or idHabitacion is required');

module.exports = model('Comentario', ComentarioSchema, 'comentarios');
