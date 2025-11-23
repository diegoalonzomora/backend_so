const { Schema, model, Types } = require('mongoose');

const RespuestaSchema = new Schema(
  {
    idComentario: { type: Types.ObjectId, required: true, ref: 'Comentario' },
    idCliente: { type: Types.ObjectId, required: true, ref: 'Cliente' },
    texto: { type: String, required: true },
    fecha: { type: Date, required: true },
  },
  { collection: 'respuestas' }
);

module.exports = model('Respuesta', RespuestaSchema, 'respuestas');
