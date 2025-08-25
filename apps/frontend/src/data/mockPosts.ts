export interface Post {
  id: string;
  user: {
    id: string;
    name: string;
    avatarUrl: string;
  };
    content: string;
    mediaUrl?: string;
    likes: number;
    comments: number;
    createdAt: string;
}

export const mockPosts: Post[] = [
  {
    id: '1',
    user: {
      id: 'u1',
      name: 'Alice Johnson',
      avatarUrl: 'https://i.pravatar.cc/150?img=1',
    },
    content: 'Just had an amazing day at the beach!',
    mediaUrl: 'https://source.unsplash.com/random/800x600?beach',
    likes: 34,
    comments: 5,
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    user: {
      id: 'u2',
      name: 'Bob Smith',
      avatarUrl: 'https://i.pravatar.cc/150?img=2',
    },
    content: 'Loving the new coffee place downtown.',
    likes: 12,
    comments: 2,
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    user: {
      id: 'u3',
      name: 'Catherine Lee',
      avatarUrl: 'https://i.pravatar.cc/150?img=3',
    },
    content: 'Check out this cool sunset I captured!',
    mediaUrl: 'https://source.unsplash.com/random/800x600?sunset',
    likes: 45,
    comments: 8,
    createdAt: new Date().toISOString(),
  },
];