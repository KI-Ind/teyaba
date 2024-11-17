import { Request, Response } from 'express';
import { Order } from '../models/Order';

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find({ user: req.user.userId })
      .populate('items.menuItem')
      .sort('-createdAt');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching orders' });
  }
};

export const getOrder = async (req: Request, res: Response) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      user: req.user.userId
    }).populate('items.menuItem');

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching order' });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { items, deliveryAddress, contactPhone } = req.body;
    
    const order = await Order.create({
      user: req.user.userId,
      items: items.map((item: any) => ({
        menuItem: item.id,
        quantity: item.quantity,
        unitPrice: item.price
      })),
      totalAmount: items.reduce((sum: number, item: any) => 
        sum + (item.price * item.quantity), 0
      ),
      deliveryAddress,
      contactPhone
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Error creating order' });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;

    const order = await Order.findOneAndUpdate(
      { _id: req.params.id, user: req.user.userId },
      { status },
      { new: true }
    ).populate('items.menuItem');

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Error updating order' });
  }
};