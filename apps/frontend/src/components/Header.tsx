'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';

export default function Header() {
  const { user, isLoggedIn, logout } = useAuth();

  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      <Link href="/" className="text-xl font-bold">
        TrioVie
      </Link>

      <nav className="flex items-center gap-4">
        {isLoggedIn ? (
          <>
            <Link href="/profile" className="hover:underline">
              <Image
                src={user?.avatar || '/default_avatar.svg'}
                alt="Avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
            </Link>
            <button onClick={logout} className="text-red-500 hover:underline">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="hover:underline">
              Login
            </Link>
            <Link href="/register" className="hover:underline">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
