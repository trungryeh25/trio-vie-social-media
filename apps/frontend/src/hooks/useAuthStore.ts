import { create } from 'zustand';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string | null;
  bio?: string | null;
  role: string;
}

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
