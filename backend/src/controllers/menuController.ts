import { Request, Response } from 'express';
import { MenuItem } from '../models/MenuItem';
import { Category } from '../models/Category';

export const getMenuItems = async (req: Request, res: Response) => {
  try {
    const items = await MenuItem.find({ isAvailable: true })
      .populate('category')
      .sort({ 'category.name': 1, name: 1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching menu items' });
  }
};

export const getMenuItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const item = await MenuItem.findById(id).populate('category');
    
    if (!item) {
      return res.status(404).json({ error: 'Menu item not found' });
    }
    
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching menu item' });
  }
};

export const createMenuItem = async (req: Request, res: Response) => {
  try {
    const { name, description, price, categoryId, imageUrl, translations } = req.body;
    
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    const menuItem = await MenuItem.create({
      name,
      description,
      price,
      category: categoryId,
      imageUrl,
      translations
    });
    
    res.status(201).json(await menuItem.populate('category'));
  } catch (error) {
    res.status(500).json({ error: 'Error creating menu item' });
  }
};

export const updateMenuItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, price, categoryId, imageUrl, translations } = req.body;
    
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    const menuItem = await MenuItem.findByIdAndUpdate(
      id,
      {
        name,
        description,
        price,
        category: categoryId,
        imageUrl,
        translations,
        updatedAt: new Date()
      },
      { new: true }
    ).populate('category');
    
    if (!menuItem) {
      return res.status(404).json({ error: 'Menu item not found' });
    }
    
    res.json(menuItem);
  } catch (error) {
    res.status(500).json({ error: 'Error updating menu item' });
  }
};

export const deleteMenuItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const menuItem = await MenuItem.findByIdAndDelete(id);
    
    if (!menuItem) {
      return res.status(404).json({ error: 'Menu item not found' });
    }
    
    res.json({ message: 'Menu item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting menu item' });
  }
};