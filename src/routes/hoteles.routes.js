const express = require('express');
const Hotel = require('../models/Hotel');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const hoteles = await Hotel.find().lean();
    res.json(hoteles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id).lean();
    if (!hotel) return res.status(404).json({ error: 'Hotel no encontrado' });
    res.json(hotel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const nuevoHotel = await Hotel.create(req.body);
    res.status(201).json(nuevoHotel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const hotelActualizado = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).lean();
    if (!hotelActualizado) return res.status(404).json({ error: 'Hotel no encontrado' });
    res.json(hotelActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await Hotel.findByIdAndDelete(req.params.id).lean();
    if (!eliminado) return res.status(404).json({ error: 'Hotel no encontrado' });
    res.json({ message: 'Hotel eliminado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
