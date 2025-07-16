'use client';

import Link from 'next/link';
import { useAuthStore } from '@/hooks/useAuthStore';

export default function Header() {
  const { user, setUser } = useAuthStore();

  const handleLogout = async () => {
    await fetch('http://localhost:3000/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <Link href="/" className="font-bold text-xl">TrioVie</Link>
      <nav className="flex items-center space-x-4">
        {user ? (
          <>
            <Link href="/profile" className="text-gray-700 hover:underline">
              {user.name}
            </Link>
            <button
              onClick={handleLogout}
              className="text-red-500 hover:underline"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="text-gray-700 hover:underline">Login</Link>
            <Link href="/register" className="text-gray-700 hover:underline">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
