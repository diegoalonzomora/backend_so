const express = require('express');
const clientesRouter = require('./clientes.routes');
const hotelesRouter = require('./hoteles.routes');
const habitacionesRouter = require('./habitaciones.routes');
const serviciosRouter = require('./servicios.routes');
const serviciosAdicionalesRouter = require('./serviciosAdicionales.routes');
const reservasRouter = require('./reservas.routes');
const comentariosRouter = require('./comentarios.routes');
const respuestasRouter = require('./respuestas.routes');

const router = express.Router();

router.use('/clientes', clientesRouter);
router.use('/hoteles', hotelesRouter);
router.use('/habitaciones', habitacionesRouter);
router.use('/servicios', serviciosRouter);
router.use('/servicios-adicionales', serviciosAdicionalesRouter);
router.use('/reservas', reservasRouter);
router.use('/comentarios', comentariosRouter);
router.use('/respuestas', respuestasRouter);

module.exports = router;
