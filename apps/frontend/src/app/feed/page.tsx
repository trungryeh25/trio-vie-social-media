import { PostCard } from '@/components/feed/PostCard';
import { mockPosts } from '@/data/mockPosts';

export const revalidate = 60; // revalidate this page every 60 seconds

// async function getPosts() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
//     cache: 'no-store', // SSR
//   });
//   return res.json();
// }

export default async function FeedPage() {
  //   const posts = await getPosts();
  const posts = mockPosts; // Using mock data for now

  return (
    <main className="flex flex-col items-center py-6">
      <h1 className="text-2xl font-bold mb-6">Feed</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
    // <div className="max-w-2xl mx-auto py-8 space-y-6">
    //   {posts.map((post: any) => (
    //     <PostCard key={post.id} post={post} />
    //   ))}
    // </div>
  );
}

export const metadata = {
  title: 'Feed | TrioVie',
  description: 'Read and share posts with the community.',
  openGraph: {
    title: 'Feed | TrioVie',
    description: 'Together we thrive - Join the TrioVie community!',
    url: 'https://triovie.com/feed',
    siteName: 'TrioVie',
    images: [
      {
        url: 'https://triovie.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TrioVie',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
};
