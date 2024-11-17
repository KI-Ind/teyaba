import { Router } from 'express';
import { getMenuItems, getMenuItem, createMenuItem, updateMenuItem, deleteMenuItem } from '../controllers/menuController';
import { authenticate } from '../middleware/auth';

const router = Router();

router.get('/', getMenuItems);
router.get('/:id', getMenuItem);
router.post('/', authenticate, createMenuItem);
router.put('/:id', authenticate, updateMenuItem);
router.delete('/:id', authenticate, deleteMenuItem);

export default router;