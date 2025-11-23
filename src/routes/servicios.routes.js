const express = require('express');
const Servicio = require('../models/Servicio');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const servicios = await Servicio.find().lean();
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const servicio = await Servicio.findById(req.params.id).lean();
    if (!servicio) return res.status(404).json({ error: 'Servicio no encontrado' });
    res.json(servicio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const nuevoServicio = await Servicio.create(req.body);
    res.status(201).json(nuevoServicio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const servicioActualizado = await Servicio.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).lean();
    if (!servicioActualizado) return res.status(404).json({ error: 'Servicio no encontrado' });
    res.json(servicioActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await Servicio.findByIdAndDelete(req.params.id).lean();
    if (!eliminado) return res.status(404).json({ error: 'Servicio no encontrado' });
    res.json({ message: 'Servicio eliminado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
