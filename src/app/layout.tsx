import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKr = Noto_Sans_KR({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GDSC Sogang',
  description: 'GDSC Sogang Homepage',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={notoSansKr.className}>{children}</body>
    </html>
  );
}
