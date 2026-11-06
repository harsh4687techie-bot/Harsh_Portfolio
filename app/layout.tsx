import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Harshvardhan Shinde | Backend Developer',
  description:
    'Harshvardhan Shinde is a backend-focused developer from Navi Mumbai, India, building practical software solutions with modern web technologies and exploring AI-driven innovation.',
  keywords: [
    'Harshvardhan Shinde',
    'Backend Developer',
    'AI/ML Engineer',
    'Python Developer',
    'Django',
    'Flask',
    'FastAPI',
    'PostgreSQL',
    'REST APIs',
    'Computer Engineering',
    'Navi Mumbai',
    'Software Engineer',
  ],
  authors: [{ name: 'Harshvardhan Shinde' }],
  creator: 'Harshvardhan Shinde',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Harshvardhan Shinde Portfolio',
    title: 'Harshvardhan Shinde | Backend Developer',
    description:
      'Harshvardhan Shinde is a backend-focused developer from Navi Mumbai, India, building practical software solutions with modern web technologies and exploring AI-driven innovation.',
    images: [
      {
        url: '/images/profile.jpg',
        width: 800,
        height: 1067,
        alt: 'Harshvardhan Shinde — Backend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harshvardhan Shinde | Backend Developer',
    description:
      'Harshvardhan Shinde is a backend-focused developer from Navi Mumbai, India, building practical software solutions with modern web technologies and exploring AI-driven innovation.',
    images: ['/images/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#0F172A',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
