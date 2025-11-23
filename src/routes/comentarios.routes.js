const express = require('express');
const Comentario = require('../models/Comentario');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const comentarios = await Comentario.find().lean();
    res.json(comentarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const comentario = await Comentario.findById(req.params.id).lean();
    if (!comentario) return res.status(404).json({ error: 'Comentario no encontrado' });
    res.json(comentario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const nuevoComentario = await Comentario.create(req.body);
    res.status(201).json(nuevoComentario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const comentarioActualizado = await Comentario.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).lean();
    if (!comentarioActualizado) return res.status(404).json({ error: 'Comentario no encontrado' });
    res.json(comentarioActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await Comentario.findByIdAndDelete(req.params.id).lean();
    if (!eliminado) return res.status(404).json({ error: 'Comentario no encontrado' });
    res.json({ message: 'Comentario eliminado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
