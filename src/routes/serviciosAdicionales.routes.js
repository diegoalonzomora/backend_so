const express = require('express');
const ServicioAdicional = require('../models/ServicioAdicional');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const servicios = await ServicioAdicional.find().lean();
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const servicio = await ServicioAdicional.findById(req.params.id).lean();
    if (!servicio) return res.status(404).json({ error: 'Servicio adicional no encontrado' });
    res.json(servicio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const nuevoServicio = await ServicioAdicional.create(req.body);
    res.status(201).json(nuevoServicio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const servicioActualizado = await ServicioAdicional.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).lean();
    if (!servicioActualizado) return res.status(404).json({ error: 'Servicio adicional no encontrado' });
    res.json(servicioActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await ServicioAdicional.findByIdAndDelete(req.params.id).lean();
    if (!eliminado) return res.status(404).json({ error: 'Servicio adicional no encontrado' });
    res.json({ message: 'Servicio adicional eliminado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
