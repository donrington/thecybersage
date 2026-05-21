import type { Metadata } from 'next';
import { Instrument_Serif } from 'next/font/google';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});

const BASE_URL = 'https://cybersage.dev';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Abakwe Carrington — Full Stack Engineer',
    template: '%s | Abakwe Carrington',
  },
  description:
    '5+ years building high-performance web systems. Next.js · Django · Go · PostgreSQL. Remote · Available Worldwide.',
  keywords: ['Full Stack Engineer', 'Abakwe Carrington', 'Cybersage', 'Next.js', 'Go', 'Django'],
  authors: [{ name: 'Abakwe Carrington', url: BASE_URL }],
  creator: 'Abakwe Carrington',
  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: 'Abakwe Carrington — Full Stack Engineer',
    description: '5+ years building high-performance web systems. Remote · Worldwide.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abakwe Carrington — Full Stack Engineer',
    creator: '@CarlSwitch_CHUG',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={instrumentSerif.variable} suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
