const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import routes
const authRoutes = require('../../backend/src/routes/auth');
const menuRoutes = require('../../backend/src/routes/menu');
const orderRoutes = require('../../backend/src/routes/orders');
const categoryRoutes = require('../../backend/src/routes/categories');

// Routes
app.use('/.netlify/functions/api/auth', authRoutes);
app.use('/.netlify/functions/api/menu', menuRoutes);
app.use('/.netlify/functions/api/orders', orderRoutes);
app.use('/.netlify/functions/api/categories', categoryRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports.handler = serverless(app);