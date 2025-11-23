const express = require('express');
const Respuesta = require('../models/Respuesta');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const respuestas = await Respuesta.find().lean();
    res.json(respuestas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const respuesta = await Respuesta.findById(req.params.id).lean();
    if (!respuesta) return res.status(404).json({ error: 'Respuesta no encontrada' });
    res.json(respuesta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const nuevaRespuesta = await Respuesta.create(req.body);
    res.status(201).json(nuevaRespuesta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const respuestaActualizada = await Respuesta.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).lean();
    if (!respuestaActualizada) return res.status(404).json({ error: 'Respuesta no encontrada' });
    res.json(respuestaActualizada);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const eliminada = await Respuesta.findByIdAndDelete(req.params.id).lean();
    if (!eliminada) return res.status(404).json({ error: 'Respuesta no encontrada' });
    res.json({ message: 'Respuesta eliminada' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
