const { Schema, model, Types } = require('mongoose');

const PaisSchema = new Schema(
  {
    nombrePais: { type: String, required: true },
    codigoPais: { type: String, required: true },
  },
  { _id: false }
);

const ClienteSchema = new Schema(
  {
    numeroTelefono: { type: String, required: true },
    nombres: { type: String, required: true },
    apellidoPaterno: { type: String, required: true },
    apellidoMaterno: { type: String, default: null },
    correo: { type: String, required: true },
    pais: { type: PaisSchema, required: true },
    ciudad: { type: String, required: true },
    documentoIdentidad: { type: String, required: true },
    fechaRegistro: { type: Date, required: true },
    rol: { type: String, enum: ['usuario', 'administrador'], required: true },
    contrasena: { type: String, required: true },
  },
  { collection: 'clientes' }
);

module.exports = model('Cliente', ClienteSchema, 'clientes');
