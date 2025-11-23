const { Schema, model, Types } = require('mongoose');

const FacturaSchema = new Schema(
  {
    montoTotal: { type: Number, required: true },
    fechaPago: { type: Date, required: true },
    metodoPago: { type: String, enum: ['Tarjeta', 'Efectivo'], required: true },
    descuento: { type: Number },
  },
  { _id: false }
);

const ReservaSchema = new Schema(
  {
    idHabitacion: { type: Types.ObjectId, required: true, ref: 'Habitacion' },
    idCliente: { type: Types.ObjectId, required: true, ref: 'Cliente' },
    fechaEntrada: { type: Date, required: true },
    fechaSalida: { type: Date, required: true },
    estadoReserva: { type: String, enum: ['Confirmada', 'Cancelada', 'Pendiente'], required: true },
    factura: { type: FacturaSchema, required: true },
    serviciosAdicionales: { type: [String], required: true, default: [] },
  },
  { collection: 'reservas' }
);

module.exports = model('Reserva', ReservaSchema, 'reservas');
