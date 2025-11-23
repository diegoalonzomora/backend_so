const express = require('express');
const Cliente = require('../models/Cliente');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const clientes = await Cliente.find().lean();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id).lean();
    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const nuevoCliente = await Cliente.create(req.body);
    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const clienteActualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).lean();
    if (!clienteActualizado) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.json(clienteActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await Cliente.findByIdAndDelete(req.params.id).lean();
    if (!eliminado) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.json({ message: 'Cliente eliminado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
