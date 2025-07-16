'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileForm from '@/components/ProfileForm';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading';
import { useAuth } from '@/hooks/useAuth';
import type { UserDto } from '@shared/dtos';

export default function EditProfilePage() {
  const [profile, setProfile] = useState<UserDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { setUser } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('http://localhost:3000/users/me', {
          withCredentials: true,
        });
        setProfile(res.data);
      } catch (error) {
        console.error(error);
        router.replace('/login'); // ✅ dùng replace thay vì push, để không thể bấm Back quay lại
      } finally {
        setIsLoading(false);
      }
    };
    fetchProfile();
  }, [router, setUser]);

  if (isLoading) return <Loading />;

  if (!profile) return null; // Tránh render rác

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
      <ProfileForm profile={profile} onProfileUpdated={setProfile} />
    </div>
  );
}
