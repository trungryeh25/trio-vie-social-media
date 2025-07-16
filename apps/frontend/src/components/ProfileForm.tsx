'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import axios from 'axios';

const schema = z.object({
  name: z.string().min(2, 'Name is too short'),
  bio: z.string().max(150).optional(),
  avatar: z.string().url().optional(),
});

export default function ProfileForm({
  profile,
  onProfileUpdated,
}: {
  profile: any;
  onProfileUpdated: (p: any) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: profile.name,
      bio: profile.bio ?? '',
      avatar: profile.avatar || './default_avatar.svg',
    },
  });

  const onSubmit = async (data: any) => {
    try {
      const res = await axios.put('http://localhost:3000/users/me', data, {
        withCredentials: true,
      });
      onProfileUpdated(res.data);
      alert('Profile updated!');
    } catch (error) {
      console.error(error);
      alert('Error updating profile');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block mb-1">Name</label>
        <input
          {...register('name')}
          className={clsx('w-full border px-3 py-2 rounded', {
            'border-red-500': errors.name,
          })}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message as string}</p>}
      </div>
      <div>
        <label className="block mb-1">Bio</label>
        <textarea {...register('bio')} className="w-full border px-3 py-2 rounded" />
      </div>
      <div>
        <label>Avatar URL</label>
        <input {...register('avatar')} className="border p-2 w-full" />
        {errors.avatar && <p className="text-red-500 text-sm">{errors.avatar.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {isSubmitting ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
}
