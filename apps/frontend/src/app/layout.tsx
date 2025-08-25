import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const metadata = {
  title: 'TrioVie - Together We Thrive',
  description: 'Join the TrioVie community and share your journey to a healthier life.',
  openGraph: {
    title: 'TrioVie - Together We Thrive',
    description: 'Join the TrioVie community and share your journey to a healthier life.',
    url: 'https://triovie.com',
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
