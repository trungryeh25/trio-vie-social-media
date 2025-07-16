import { cookies } from 'next/headers';
import axios from 'axios';
import Link from 'next/link';
import type { UserDto } from '@shared/dtos';

export default async function ProfilePage() {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join('; ');

  let user: UserDto | null = null;

  try {
    const res = await axios.get('http://localhost:3000/users/me', {
      headers: {
        Cookie: cookieHeader,
      },
      withCredentials: true,
    });
    user = res.data;
  } catch (err) {
    console.error('Error fetching profile', err);
  }

  if (!user) {
    return (
      <div className="max-w-xl mx-auto mt-10 text-center">
        <p className="text-red-500">You need login.</p>
        <Link href="/login" className="text-blue-500 underline mt-2 inline-block">
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl shadow-md bg-white">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Bio:</strong> {user.bio || 'N/A'}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
      <div className="mt-4">
        <Link href="/edit-profile" className="text-blue-500 underline">
          Edit Profile
        </Link>
      </div>
    </div>
  );
}
