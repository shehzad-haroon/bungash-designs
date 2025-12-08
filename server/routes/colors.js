const express = require('express');
const router = express.Router();
const Color = require('../models/Color');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret';

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'No token' });
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

// Public: list colors
router.get('/', async (req, res) => {
  const items = await Color.find().sort({ createdAt: -1 });
  res.json(items);
});

// Admin: create color
router.post('/', authMiddleware, async (req, res) => {
  const { name, hex, description } = req.body;
  try {
    const color = new Color({ name, hex, description });
    await color.save();
    res.status(201).json(color);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Admin: update color
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const color = await Color.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(color);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Admin: delete
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await Color.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
