// 'use client';

// import { use } from 'react';
// import { User } from 'C:/Users/pc/Desktop/Trung/trio-vie/packages/shared/types/user';
// import { formatDate } from 'C:/Users/pc/Desktop/Trung/trio-vie/packages/shared/utils/formatDate';
import { mockPosts } from '../data/mockPosts';
// import { useEffect, useState } from 'react';

// export default function Page() {
//   // const user: User = { id: "1", name: "TrioVie", email: "hello@triovie.com" };
//   // return (
//   //   <div>
//   //     Hello, {user.name}! <br />
//   //     Today: {formatDate(new Date())}
//   //   </div>
//   // );
//   const [posts, setPosts] = useState<any[]>([]);
//   useEffect(() => {
//     // Simulate fetching data
//     setPosts(mockPosts);
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold">Mock Post Demo</h1>
//       <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(posts, null, 2)}</pre>
//     </div>
//   );
// }

// ✅ SEO metadata cho trang Feed
export const metadata = {
  title: 'Feed | TrioVie',
  description: 'Xem những bài viết mới nhất từ cộng đồng TrioVie',
  openGraph: {
    title: 'Feed | TrioVie',
    description: 'Cùng kết nối và chia sẻ tại TrioVie',
    url: 'https://triovie.com/feed',
    siteName: 'TrioVie',
    images: [
      {
        url: 'https://triovie.com/og-feed.png', // 👉 thay bằng ảnh thật (1200x630 recommended)
        width: 1200,
        height: 630,
        alt: 'TrioVie Feed',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feed | TrioVie',
    description: 'Cùng kết nối và chia sẻ tại TrioVie',
    images: ['https://triovie.com/og-feed.png'], // ảnh preview cho Twitter
  },
};

// ✅ SSR / ISR
export const revalidate = 60; // ISR: 60s regen 1 lần

export default async function FeedPage() {
  // 🔹 Giả lập SSR fetch (sau này đổi thành fetch từ BE)
  const posts = mockPosts;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📢 Bảng Tin (Feed)</h1>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-xl p-4 shadow-sm bg-white">
            {/* <h2 className="font-semibold text-lg">{post.author.name}</h2> */}
            <p className="text-gray-700">{post.content}</p>
            <span className="text-sm text-gray-500">
              {new Date(post.createdAt).toLocaleDateString('vi-VN')}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
