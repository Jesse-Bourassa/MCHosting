const cors = require('cors');
require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('./db');
const minecraftRoutes = require("./routes/minecraft");
const serverRoutes = require("./routes/servers"); 


const app = express();
const port = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET;



// Enable JSON request body parsing
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

app.use(express.json());

// -------------------------
// 1. REGISTRATION ENDPOINT
// -------------------------
app.post('/auth/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const [existing] = await pool.query(
      'SELECT id FROM users WHERE username = ? OR email = ?',
      [username, email]
    );
    if (existing.length > 0) {
      return res.status(400).json({ message: 'Username or email already taken.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
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
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful.', token });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// --------------------
// 4. START THE SERVER
// --------------------
app.use("/minecraft", minecraftRoutes); // ✅ Now properly registered
app.use("/api/servers", serverRoutes);  // ✅ Now properly registered

app.listen(port, () => {
  console.log(`✅ Backend server running on port ${port}`);

  // Debug: Log all registered routes
  console.log("✅ Registered Routes:");
  app._router.stack.forEach((r) => {
    if (r.route && r.route.path) {
      console.log(`➡️ ${r.route.path}`);
    }
  });
});

