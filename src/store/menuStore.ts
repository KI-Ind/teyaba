import { create } from 'zustand';
import { menuApi } from '../lib/api';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

interface MenuState {
  items: MenuItem[];
  loading: boolean;
  error: string | null;
  fetchItems: () => Promise<void>;
}

export const useMenuStore = create<MenuState>((set) => ({
  items: [],
  loading: false,
  error: null,
  fetchItems: async () => {
    try {
      set({ loading: true, error: null });
      const { data } = await menuApi.getAll();
      set({ items: data, loading: false });
    } catch (error) {
      set({ error: 'Failed to fetch menu items', loading: false });
    }
  },
}));