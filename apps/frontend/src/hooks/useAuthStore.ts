import { create } from 'zustand';
import type { UserDto } from '@shared/dtos';

interface AuthState {
  user: UserDto | null;
  setUser: (user: UserDto | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
