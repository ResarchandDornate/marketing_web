import BlogClient from './BlogClient';

export const metadata = {
  title: 'Energy Storage for EV Charging in India | UnityESS',
  description:
    'UnityESS enables energy storage for EV charging in India with scalable BESS solutions. Improve fast charging performance, reduce costs, and build reliable EV charging infrastructure.',
  keywords: [
    'energy storage for ev charging in india',
    'EV charging BESS India',
    'battery storage for EV charging',
    'fast charging infrastructure India',
    'EV charging station India',
    'BESS for EV chargers',
    'highway EV charging India',
    'fleet charging depots India',
    'solar EV charging India',
    'UnityESS EV charging',
  ],
  alternates: {
    canonical: 'https://unityess.ai/blog/energy-storage-for-ev-charging-in-india',
  },
  openGraph: {
    title: 'Powering the Future of EV Charging Stations in India with UnityESS',
    description:
      'UnityESS enables energy storage for EV charging in India with scalable BESS solutions. Improve fast charging performance, reduce costs, and build reliable EV charging infrastructure.',
    url: 'https://unityess.ai/blog/energy-storage-for-ev-charging-in-india',
    siteName: 'UnityESS',
    type: 'article',
    publishedTime: '2026-05-18T00:00:00.000Z',
    authors: ['UnityESS'],
    images: [
      {
        url: 'https://unityess.ai/blog/energy-storage-for-ev-charging-in-india-hero.webp',
        width: 900,
        height: 300,
        alt: 'Energy Storage for EV Charging in India - UnityESS BESS Powering Fast EV Charging Stations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Energy Storage for EV Charging in India | UnityESS',
    description:
      'UnityESS enables energy storage for EV charging in India with scalable BESS solutions. Improve fast charging performance, reduce costs, and build reliable EV charging infrastructure.',
    images: ['https://unityess.ai/blog/energy-storage-for-ev-charging-in-india-hero.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Powering the Future of EV Charging Stations in India with UnityESS',
  description:
    'UnityESS enables energy storage for EV charging in India with scalable BESS solutions. Improve fast charging performance, reduce costs, and build reliable EV charging infrastructure.',
  image: 'https://unityess.ai/blog/energy-storage-for-ev-charging-in-india-hero.webp',
  datePublished: '2026-05-18T00:00:00.000Z',
  dateModified: '2026-05-18T00:00:00.000Z',
  author: {
    '@type': 'Organization',
    name: 'UnityESS',
    url: 'https://unityess.ai',
  },
  publisher: {
    '@type': 'Organization',
    name: 'UnityESS',
    url: 'https://unityess.ai',
    logo: {
      '@type': 'ImageObject',
      url: 'https://unityess.ai/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://unityess.ai/blog/energy-storage-for-ev-charging-in-india',
  },
  keywords:
    'energy storage for ev charging in india, EV charging BESS, fast charging India, battery storage EV charging, UnityESS EV',
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogClient />
    </>
  );
}
