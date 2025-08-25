'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Post } from '@/data/mockPosts';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="w-full max-w-xl mx-auto mb-4 shadow-md">
      <CardContent className="p-4">
        {/* Header */}
        <div className="flex items-center mb-3">
          <Image
            src={post.user.avatarUrl}
            alt={post.user.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="ml-2">
            <p className="font-semibold">{post.user.name}</p>
            <p className="text-xs text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>
          </div>
        </div>

        {/* Content */}
        <p className="mb-3">{post.content}</p>

        {/* Media */}
        {post.mediaUrl && (
          <div className="relative w-full h-64 mb-3">
            <Image src={post.mediaUrl} alt="Post media" fill className="object-cover rounded-lg" />
          </div>
        )}
      </CardContent>
      <div className="flex justify-between px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400">
        <span>❤️ {post.likes}</span>
        <span>💬 {post.comments}</span>
      </div>
    </Card>
    // <div className="bg-white shadow rounded-2xl p-4">
    //   <div className="flex items-center space-x-2">
    //     <img src={post.user.avatarUrl} alt={post.user.name} className="w-10 h-10 rounded-full" />
    //     <span className="font-semibold">{post.user.name}</span>
    //   </div>

    //   <p className="mt-2 text-sm">{post.content}</p>

    //   {post.mediaUrl && <img src={post.mediaUrl} alt="Post media" className="mt-2 rounded-xl" />}

    //   <div className="flex space-x-4 mt-3 text-gray-500 text-sm">
    //     <button>❤️ {post.likes}</button>
    //     <button>💬 {post.comments}</button>
    //   </div>
    // </div>
  );
}
