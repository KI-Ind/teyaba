import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { connectDB } from './database/connect';
import menuRoutes from './routes/menu';
import categoryRoutes from './routes/categories';
import authRoutes from './routes/auth';
import orderRoutes from './routes/orders';
import stripeRoutes from './routes/stripe';
import { errorHandler } from './middleware/errorHandler';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(morgan('dev'));
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Routes
app.use('/api/menu', menuRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/stripe', stripeRoutes);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});