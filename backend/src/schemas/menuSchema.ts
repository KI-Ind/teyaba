import { z } from 'zod';

const translationSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional()
});

export const MenuItemSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  price: z.number().positive(),
  categoryId: z.string().min(1),
  imageUrl: z.string().url().optional(),
  translations: z.record(translationSchema).optional()
});

export const CategorySchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  imageUrl: z.string().url().optional(),
  translations: z.record(translationSchema).optional()
});