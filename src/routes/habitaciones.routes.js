const express = require('express');
const Habitacion = require('../models/Habitacion');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const habitaciones = await Habitacion.find().lean();
    res.json(habitaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const habitacion = await Habitacion.findById(req.params.id).lean();
    if (!habitacion) return res.status(404).json({ error: 'Habitacion no encontrada' });
    res.json(habitacion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const nuevaHabitacion = await Habitacion.create(req.body);
    res.status(201).json(nuevaHabitacion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const habitacionActualizada = await Habitacion.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).lean();
    if (!habitacionActualizada) return res.status(404).json({ error: 'Habitacion no encontrada' });
    res.json(habitacionActualizada);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const eliminada = await Habitacion.findByIdAndDelete(req.params.id).lean();
    if (!eliminada) return res.status(404).json({ error: 'Habitacion no encontrada' });
    res.json({ message: 'Habitacion eliminada' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
