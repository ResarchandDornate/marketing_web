import BlogClient from './BlogClient';

export const metadata = {
  title: 'BESS in India: Solving Renewable Curtailment Challenges',
  description:
    'BESS in India is essential to manage solar curtailment, balance demand-supply gaps, and improve grid stability as renewable capacity rapidly grows.',
  keywords: [
    'bess in india',
    'BESS India',
    'battery energy storage India',
    'BESS Rajasthan',
    'renewable energy curtailment India',
    'solar curtailment India',
    'grid stability India',
    'India renewable energy 2026',
    'energy storage solutions India',
    'solar plus storage India',
  ],
  alternates: {
    canonical: 'https://unityess.ai/blog/bess-in-india-renewable-energy-growth',
  },
  openGraph: {
    title: 'Why BESS Is No Longer Optional for India\'s Renewable Energy Growth',
    description:
      'BESS in India is essential to manage solar curtailment, balance demand-supply gaps, and improve grid stability as renewable capacity rapidly grows.',
    url: 'https://unityess.ai/blog/bess-in-india-renewable-energy-growth',
    siteName: 'UnityESS',
    type: 'article',
    publishedTime: '2026-04-20T00:00:00.000Z',
    authors: ['UnityESS'],
    images: [
      {
        url: 'https://unityess.ai/blog/bess-in-india-renewable-energy-growth-hero.webp',
        width: 900,
        height: 300,
        alt: 'BESS in India - Why Battery Energy Storage Systems Are Essential for Renewable Energy Growth and Grid Stability',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BESS in India: Solving Renewable Curtailment Challenges',
    description:
      'BESS in India is essential to manage solar curtailment, balance demand-supply gaps, and improve grid stability as renewable capacity rapidly grows.',
    images: ['https://unityess.ai/blog/bess-in-india-renewable-energy-growth-hero.webp'],
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
  headline: "Why BESS Is No Longer Optional for India's Renewable Energy Growth",
  description:
    'BESS in India is essential to manage solar curtailment, balance demand-supply gaps, and improve grid stability as renewable capacity rapidly grows.',
  image: 'https://unityess.ai/blog/bess-in-india-renewable-energy-growth-hero.webp',
  datePublished: '2026-04-20T00:00:00.000Z',
  dateModified: '2026-04-20T00:00:00.000Z',
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
    '@id': 'https://unityess.ai/blog/bess-in-india-renewable-energy-growth',
  },
  keywords:
    'bess in india, BESS Rajasthan, renewable energy curtailment, solar curtailment India, grid stability, energy storage India',
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
