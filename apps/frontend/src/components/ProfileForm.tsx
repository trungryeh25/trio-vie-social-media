'use client';

import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState } from 'react';
import type { UserDto } from '@shared/dtos';

const schema = z.object({
  name: z.string().min(2, 'Name is too short'),
  bio: z.string().max(150, 'Bio must be at most 150 characters').optional(),
  avatar: z.string().url().optional().or(z.literal('')),
});

type ProfileFormData = z.infer<typeof schema>;

interface Props {
  profile: UserDto;
  onProfileUpdated: (user: UserDto) => void;
}

export default function ProfileForm({ profile, onProfileUpdated }: Props) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: profile.name,
      bio: profile.bio ?? '',
      avatar: profile.avatar ?? '',
    },
  });

  const avatarValue = watch('avatar');

  const onSubmit = async (data: ProfileFormData) => {
    setLoading(true);
    try {
      const res = await axios.patch<UserDto>(
        'http://localhost:3000/users/me',
        { ...data, avatar: data.avatar === '' ? null : data.avatar },
        {
          withCredentials: true,
        },
      );
      onProfileUpdated(res.data);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  // Fallback preview avatar
  const avatarPreview =
    avatarValue && avatarValue.trim() !== '' ? avatarValue : '/default_avatar.svg';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block font-medium">Name</label>
        <input {...register('name')} className="w-full border rounded px-3 py-2" />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block font-medium">Bio</label>
        <textarea {...register('bio')} className="w-full border rounded px-3 py-2" rows={4} />
        {errors.bio && <p className="text-red-500 text-sm">{errors.bio.message}</p>}
        <p className="text-gray-500 text-xs">Max 200 characters.</p>
      </div>

      <div>
        <label className="block font-medium">Avatar URL</label>
        <input {...register('avatar')} className="w-full border rounded px-3 py-2" />
        {errors.avatar && <p className="text-red-500 text-sm">{errors.avatar.message}</p>}
        <p className="text-gray-500 text-xs">Leave empty to use default avatar.</p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        {loading ? 'Saving...' : 'Update Profile'}
      </button>
    </form>
  );
}
