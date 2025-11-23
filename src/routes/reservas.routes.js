const express = require('express');
const Reserva = require('../models/Reserva');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const reservas = await Reserva.find().lean();
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const reserva = await Reserva.findById(req.params.id).lean();
    if (!reserva) return res.status(404).json({ error: 'Reserva no encontrada' });
    res.json(reserva);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const nuevaReserva = await Reserva.create(req.body);
    res.status(201).json(nuevaReserva);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const reservaActualizada = await Reserva.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).lean();
    if (!reservaActualizada) return res.status(404).json({ error: 'Reserva no encontrada' });
    res.json(reservaActualizada);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const eliminada = await Reserva.findByIdAndDelete(req.params.id).lean();
    if (!eliminada) return res.status(404).json({ error: 'Reserva no encontrada' });
    res.json({ message: 'Reserva eliminada' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
