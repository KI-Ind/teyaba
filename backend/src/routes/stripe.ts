import { Router } from 'express';
import { createCheckoutSession, handleWebhook } from '../controllers/stripeController';
import { authenticate } from '../middleware/auth';
import express from 'express';

const router = Router();

router.post('/create-checkout-session', authenticate, createCheckoutSession);
router.post('/webhook', express.raw({ type: 'application/json' }), handleWebhook);

export default router;