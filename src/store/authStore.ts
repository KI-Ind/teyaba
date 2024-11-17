import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { authApi } from '../lib/api';

interface AuthState {
  user: any | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  register: (userData: { email: string; password: string; name: string }) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      login: async (credentials) => {
        try {
          const { data } = await authApi.login(credentials);
          set({
            user: data.session.user,
            token: data.session.access_token,
            isAuthenticated: true,
          });
        } catch (error) {
          console.error('Login error:', error);
          throw error;
        }
      },
      register: async (userData) => {
        try {
          await authApi.register(userData);
        } catch (error) {
          console.error('Registration error:', error);
          throw error;
        }
      },
      logout: async () => {
        try {
          await authApi.logout();
          set({ user: null, token: null, isAuthenticated: false });
        } catch (error) {
          console.error('Logout error:', error);
          throw error;
        }
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);