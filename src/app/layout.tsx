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
    default: 'Abakwe Carrington | Full Stack Engineer & Web Developer',
    template: '%s | Abakwe Carrington',
  },

  description:
    'Abakwe Carrington (Cybersage) — Full Stack Engineer with 5+ years building scalable, production-grade web applications. Expert in Next.js, React, Django, Go, PostgreSQL & AWS. Available for hire — remote, worldwide.',

  keywords: [
    // Brand / name
    'Abakwe Carrington',
    'Carrington Abakwe',
    'Cybersage',
    'cybersage.dev',
    'Cybersage developer',
    'Donrington',
    // Role
    'Full Stack Engineer',
    'Full Stack Developer',
    'Software Engineer',
    'Web Developer',
    'Frontend Developer',
    'Backend Engineer',
    'React Developer',
    'Next.js Developer',
    'Next.js Expert',
    'Django Developer',
    'Go Developer',
    'Golang Developer',
    'TypeScript Developer',
    'Node.js Developer',
    'Python Developer',
    // Hire intent
    'hire full stack developer',
    'hire Next.js developer',
    'hire React developer',
    'hire software engineer',
    'hire web developer',
    'freelance full stack developer',
    'freelance software engineer',
    'freelance web developer',
    'remote software engineer for hire',
    'contract developer',
    'available for hire',
    // Tech stack
    'Next.js',
    'React',
    'Django',
    'Go',
    'PostgreSQL',
    'Redis',
    'AWS',
    'Docker',
    'TypeScript',
    'Node.js',
    'REST API development',
    'GraphQL',
    'Microservices',
    'CI/CD',
    'cloud engineer',
    // Portfolio / reach
    'Full Stack Developer portfolio',
    'Software Engineer portfolio',
    'Web Developer portfolio',
    'Nigerian software engineer',
    'African developer',
    'remote developer worldwide',
    'enterprise web development',
    'scalable web applications',
    'production-grade web systems',
    'high-performance web apps',
  ],

  authors: [{ name: 'Abakwe Carrington', url: BASE_URL }],
  creator: 'Abakwe Carrington',
  publisher: 'Abakwe Carrington',

  icons: {
    icon: [{ url: '/logo/logo_white.png', type: 'image/png' }],
    apple: '/logo/logo_white.png',
    shortcut: '/logo/logo_white.png',
  },

  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'Cybersage — Abakwe Carrington',
    title: 'Abakwe Carrington | Full Stack Engineer & Web Developer',
    description:
      '5+ years building high-performance web systems. Next.js · React · Django · Go · PostgreSQL · AWS. Available for hire — remote, worldwide.',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    site: '@CarlSwitch_CHUG',
    creator: '@CarlSwitch_CHUG',
    title: 'Abakwe Carrington | Full Stack Engineer & Web Developer',
    description:
      '5+ years building production-grade web systems. Next.js · Django · Go · PostgreSQL · AWS. Available for hire worldwide.',
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
    languages: {
      'en-US': BASE_URL,
      'en-GB': BASE_URL,
    },
  },

  category: 'technology',

  appleWebApp: {
    capable: true,
    title: 'Cybersage',
    statusBarStyle: 'black-translucent',
  },

  other: {
    'theme-color': '#0A0A0A',
    'msapplication-TileColor': '#0A0A0A',
    'application-name': 'Cybersage',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${BASE_URL}/#person`,
  name: 'Abakwe Carrington',
  alternateName: ['Cybersage', 'Carrington Abakwe', 'Donrington'],
  url: BASE_URL,
  image: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/cybersage_og.png`,
    width: 1200,
    height: 630,
  },
  jobTitle: 'Full Stack Engineer',
  description:
    'Full Stack Engineer with 5+ years experience building scalable, production-grade web applications using Next.js, React, Django, Go, PostgreSQL, and AWS.',
  email: 'abakwecarrington@gmail.com',
  nationality: { '@type': 'Country', name: 'Nigeria' },
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Full Stack Engineer',
    description:
      'Designs, develops, and deploys scalable full-stack web applications for clients worldwide.',
    occupationLocation: { '@type': 'Country', name: 'Worldwide' },
    skills:
      'Next.js, React, TypeScript, Django, Go, Node.js, PostgreSQL, Redis, AWS, Docker, CI/CD, REST APIs, GraphQL',
  },
  knowsAbout: [
    'Next.js', 'React', 'TypeScript', 'JavaScript',
    'Django', 'Python', 'Go', 'Node.js',
    'PostgreSQL', 'Redis', 'MongoDB',
    'AWS', 'Docker', 'Kubernetes',
    'REST APIs', 'GraphQL', 'Microservices',
    'CI/CD', 'DevOps', 'Cloud Architecture',
    'Web Performance Optimisation', 'System Design',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Full Stack Web Development',
        description:
          'End-to-end web application development — from architecture to deployment.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'API Design & Integration',
        description:
          'RESTful and GraphQL API design, development, and third-party integrations.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Cloud Architecture & DevOps',
        description:
          'AWS cloud infrastructure, CI/CD pipelines, Docker containerisation, and deployment automation.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Frontend Engineering',
        description:
          'High-performance React and Next.js frontends with advanced animations and polished UX.',
      },
    },
  ],
  sameAs: [
    'https://github.com/Donrington',
    'https://www.linkedin.com/in/carrington-abakwe-b0b0a0217',
    'https://x.com/CarlSwitch_CHUG',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'abakwecarrington@gmail.com',
    contactType: 'professional inquiry',
    availableLanguage: 'English',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'Cybersage — Abakwe Carrington',
  description:
    'Portfolio and professional profile of Abakwe Carrington — Full Stack Engineer.',
  author: { '@id': `${BASE_URL}/#person` },
  publisher: { '@id': `${BASE_URL}/#person` },
  inLanguage: 'en-US',
  copyrightYear: new Date().getFullYear(),
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${BASE_URL}/#profilepage`,
  url: BASE_URL,
  name: 'Abakwe Carrington — Full Stack Engineer Portfolio',
  description:
    'Professional portfolio of Abakwe Carrington (Cybersage), a Full Stack Engineer with 5+ years of experience building production-grade web systems.',
  dateCreated: '2024-01-01',
  dateModified: new Date().toISOString().split('T')[0],
  mainEntity: { '@id': `${BASE_URL}/#person` },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={instrumentSerif.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
