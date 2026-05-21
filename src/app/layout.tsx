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

const BASE_URL = 'https://cybersage.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Abakwe Carrington — Full Stack Engineer',
    template: '%s | Abakwe Carrington',
  },

  description:
    'Abakwe Carrington is a Full Stack Engineer with 5+ years building scalable, production-grade web systems. Specialising in Next.js, Django, Go, PostgreSQL, and AWS. Available for remote work worldwide.',

  keywords: [
    'Full Stack Engineer',
    'Abakwe Carrington',
    'Cybersage',
    'Next.js Developer',
    'Django Developer',
    'Go Developer',
    'PostgreSQL',
    'AWS',
    'Remote Software Engineer',
    'Full Stack Developer Nigeria',
    'Web Developer Portfolio',
    'React Developer',
    'Backend Engineer',
    'API Development',
    'Software Engineer for hire',
  ],

  authors: [{ name: 'Abakwe Carrington', url: BASE_URL }],
  creator: 'Abakwe Carrington',
  publisher: 'Abakwe Carrington',

  icons: {
    icon: [
      { url: '/logo/logo_white.png', type: 'image/png' },
    ],
    apple: '/logo/logo_white.png',
    shortcut: '/logo/logo_white.png',
  },

  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'Abakwe Carrington',
    title: 'Abakwe Carrington — Full Stack Engineer',
    description:
      '5+ years building high-performance web systems. Next.js · Django · Go · PostgreSQL · AWS. Remote · Available Worldwide.',
    locale: 'en_US',
    images: [
      {
        url: '/cybersage_og.png',
        width: 1200,
        height: 630,
        alt: 'Abakwe Carrington — Full Stack Engineer',
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@CarlSwitch_CHUG',
    creator: '@CarlSwitch_CHUG',
    title: 'Abakwe Carrington — Full Stack Engineer',
    description:
      '5+ years building high-performance web systems. Next.js · Django · Go · PostgreSQL. Remote · Worldwide.',
    images: ['/cybersage_og.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
  },

  category: 'technology',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Abakwe Carrington',
  url: BASE_URL,
  image: `${BASE_URL}/cybersage_og.png`,
  jobTitle: 'Full Stack Engineer',
  description:
    'Full Stack Engineer with 5+ years experience building scalable web systems using Next.js, Django, Go, PostgreSQL, and AWS.',
  knowsAbout: [
    'Next.js', 'React', 'Django', 'Go', 'PostgreSQL',
    'Redis', 'AWS', 'Docker', 'TypeScript', 'Node.js',
  ],
  sameAs: [
    'https://github.com/Donrington',
    'https://www.linkedin.com/in/carrington-abakwe-b0b0a0217',
    'https://x.com/CarlSwitch_CHUG',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'abakwecarrington@gmail.com',
    contactType: 'professional',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={instrumentSerif.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
