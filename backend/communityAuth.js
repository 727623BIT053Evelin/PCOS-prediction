const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const router = express.Router();

const users = []; // Temporary in-memory store, replace with DB in production
const JWT_SECRET = 'your-secret-key';

// Signup route
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ error: 'Name, email and password required' });

  if (users.some(u => u.email === email)) {
    return res.status(409).json({ error: 'User already exists' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: Date.now(), name, email, password: hashedPassword };
  users.push(newUser);
  res.json({ message: 'Signup successful' });
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: 'Email and password required' });

  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ error: 'Invalid email or password' });
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.status(401).json({ error: 'Invalid email or password' });

  const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, JWT_SECRET, { expiresIn: '6h' });
  res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
});

module.exports = router;
