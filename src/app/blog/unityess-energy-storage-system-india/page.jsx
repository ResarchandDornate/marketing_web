import BlogClient from './BlogClient';

export const metadata = {
  title: 'UnityESS Energy Storage System in India | Reliable BESS Solution',
  description:
    'UnityESS is a smart energy storage system in India by Ornate Solar and Inverted Energy. It stores excess solar energy, reduces electricity costs, and provides reliable power backup.',
  keywords: ['UnityESS', 'energy storage system in India', 'BESS', 'battery energy storage system', 'solar energy storage', 'Ornate Solar', 'Inverted Energy', 'reliable BESS solution', 'energy storage system', 'BESS manufacturer India', 'LFP battery storage', 'commercial energy storage', 'utility scale BESS', 'solar battery storage India'],
  alternates: {
    canonical: 'https://unityess.ai/blog/unityess-energy-storage-system-india',
  },
  openGraph: {
    title: 'UnityESS Energy Storage System in India | Reliable BESS Solution',
    description:
      'UnityESS is a smart energy storage system in India by Ornate Solar and Inverted Energy. It stores excess solar energy, reduces electricity costs, and provides reliable power backup.',
    url: 'https://unityess.ai/blog/unityess-energy-storage-system-india',
    siteName: 'UnityESS',
    type: 'article',
    publishedTime: '2025-04-03T00:00:00.000Z',
    authors: ['UnityESS'],
    images: [
      {
        url: 'https://unityess.ai/blog/unityess-energy-storage-system-india-banner.webp',
        width: 1200,
        height: 630,
        alt: 'UnityESS Smart Energy Storage System in India - Reliable BESS Solution',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UnityESS Energy Storage System in India | Reliable BESS Solution',
    description:
      'UnityESS is a smart energy storage system in India by Ornate Solar and Inverted Energy. It stores excess solar energy, reduces electricity costs, and provides reliable power backup.',
    images: ['https://unityess.ai/blog/unityess-energy-storage-system-india-banner.webp'],
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
  headline: 'Introducing UnityESS Smart Energy Storage System in India',
  description:
    'UnityESS is a smart energy storage system in India by Ornate Solar and Inverted Energy. It stores excess solar energy, reduces electricity costs, and provides reliable power backup.',
  image: 'https://unityess.ai/blog/unityess-energy-storage-system-india-banner.webp',
  datePublished: '2025-04-03T00:00:00.000Z',
  dateModified: '2025-04-03T00:00:00.000Z',
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
    '@id': 'https://unityess.ai/blog/unityess-energy-storage-system-india',
  },
  keywords: 'UnityESS, energy storage system in India, BESS, battery energy storage system, Ornate Solar, Inverted Energy, solar energy storage, LFP battery',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is UnityESS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'UnityESS is a battery energy storage system (BESS) in India developed by Ornate Solar in collaboration with Inverted Energy. It stores solar energy and supplies it during peak demand, outages, or non-generation hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the different models of UnityESS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'UnityESS offers four models: Model A for commercial & industrial use, Model B for hybrid battery energy storage, Model C for utility-scale energy storage up to 6.25 MWh, and Unity Infinity, a 5 kWh portable energy storage system.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is UnityESS made in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, UnityESS is developed in India through the combined expertise of Ornate Solar and Inverted Energy. It is designed specifically for Indian conditions, including high temperatures and grid variability.',
      },
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <BlogClient />
    </>
  );
}
