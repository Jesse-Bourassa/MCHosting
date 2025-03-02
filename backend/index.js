// backend/index.js
require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('./db');

const app = express();
const port = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET;

// Enable JSON request body parsing
app.use(express.json());

// -------------------------
// 1. REGISTRATION ENDPOINT
// -------------------------
app.post('/auth/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const [existing] = await pool.query(
      'SELECT id FROM users WHERE username = ? OR email = ?',
      [username, email]
    );
    if (existing.length > 0) {
      return res.status(400).json({ message: 'Username or email already taken.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    await pool.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// --------------------
// 2. LOGIN ENDPOINT
// --------------------
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const user = rows[0];

    // Compare passwords
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Login successful.', token });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// -----------------------
// 3. PROTECTED ENDPOINT
// -----------------------
app.get('/profile', (req, res) => {
  // Expect token in the Authorization header: "Bearer <token>"
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Missing token.' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // If token is valid, you can fetch more user data here
    res.json({ message: 'This is a protected route.', userId: decoded.userId });
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token.' });
  }
});

// --------------------
// 4. START THE SERVER
// --------------------
app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
