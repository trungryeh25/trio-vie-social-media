'use client';

import { useAuthStore } from './useAuthStore';
import { useRouter } from 'next/navigation';

export function useAuth() {
  const { user, setUser } = useAuthStore();
  const router = useRouter();

  const isLoggedIn = !!user;

  const logout = async () => {
    try {
      // Optionally: call API to revoke token, clear cookie, etc.
      await fetch('http://localhost:3000/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
    } catch (err) {
      console.error('Logout error:', err);
    }

    // Clear state
    setUser(null);
    // Redirect
    router.push('/login');
  };

  return {
    user,
    setUser,
    isLoggedIn,
    logout,
  };
}
