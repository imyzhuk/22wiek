import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components';

export const metadata: Metadata = {
  title: 'Онлайн-гипермаркет 22wiek',
  description: '⭐️ Доставка и самовывоз по всей Беларуси',
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicons/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicons/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicons/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      url: '/favicons/site.webmanifest',
    },
  ],
  openGraph: {
    siteName: 'Онлайн-гипермаркет 22wiek',
    type: 'website',
    url: 'https://22wiek.vercel.app/',
    title: 'Онлайн-гипермаркет 22wiek',
    description: '⭐️ Доставка и самовывоз по всей Беларуси',
    images: [
      {
        url: '/favicons/open-graph-image.jpg',
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
