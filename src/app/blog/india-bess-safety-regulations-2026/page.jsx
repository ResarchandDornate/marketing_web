import BlogClient from './BlogClient';

export const metadata = {
  title: 'BESS Safety Regulations India 2026: CEA Rules, Fire Audit & 2027 Compliance',
  description:
    "Detailed guide to India's BESS safety regulations 2026 by CEA. Covers key rules, fire audit requirements, and compliance from April 2027.",
  keywords: [
    'BESS safety regulations India 2026',
    'CEA BESS rules',
    'India battery energy storage regulations',
    'BESS fire audit India',
    'Chapter XA CEA',
    'BESS compliance 2027',
    'two-fault tolerance BESS',
    'BESS fire safety India',
    'Central Electricity Authority BESS',
    'energy storage safety India',
    'BMS requirements India',
    'BESS installation standards',
  ],
  alternates: {
    canonical: 'https://unityess.ai/blog/india-bess-safety-regulations-2026',
  },
  openGraph: {
    title: 'BESS Safety Regulations India 2026: CEA Rules, Fire Audit & 2027 Compliance',
    description:
      "Detailed guide to India's BESS safety regulations 2026 by CEA. Covers key rules, fire audit requirements, and compliance from April 2027.",
    url: 'https://unityess.ai/blog/india-bess-safety-regulations-2026',
    siteName: 'UnityESS',
    type: 'article',
    publishedTime: '2026-04-10T00:00:00.000Z',
    authors: ['UnityESS'],
    images: [
      {
        url: 'https://unityess.ai/blog/india-bess-safety-regulations-2026-hero.webp',
        width: 900,
        height: 300,
        alt: 'India BESS Safety Regulations 2026 by CEA - Chapter XA Rules, Mandatory Fire Audit & April 2027 Compliance Framework for Battery Energy Storage Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BESS Safety Regulations India 2026: CEA Rules, Fire Audit & 2027 Compliance',
    description:
      "Detailed guide to India's BESS safety regulations 2026 by CEA. Covers key rules, fire audit requirements, and compliance from April 2027.",
    images: ['https://unityess.ai/blog/india-bess-safety-regulations-2026-hero.webp'],
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
  headline: "India's BESS Safety Regulations 2026: Key Rules, Fire Audit Mandate & What Changes from April 2027",
  description:
    "Detailed guide to India's BESS safety regulations 2026 by CEA. Covers key rules, fire audit requirements, and compliance from April 2027.",
  image: 'https://unityess.ai/blog/india-bess-safety-regulations-2026-hero.webp',
  datePublished: '2026-04-10T00:00:00.000Z',
  dateModified: '2026-04-10T00:00:00.000Z',
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
    '@id': 'https://unityess.ai/blog/india-bess-safety-regulations-2026',
  },
  keywords:
    'BESS safety regulations India 2026, CEA BESS rules, Chapter XA, BESS fire audit, two-fault tolerance, BMS requirements, BESS compliance 2027',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When do India\'s BESS Safety Regulations 2026 come into force?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The BESS Safety Regulations 2026 were notified on 27 March 2026 in the Gazette of India and will come into force from 1 April 2027.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which BESS installations are covered under Chapter XA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chapter XA applies to BESS installations connected at voltage levels exceeding 650V. Installations at 650V and below are covered under Regulation 122(N) and must comply with applicable standards.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the two-fault tolerance requirement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under Regulation 122(B), a BESS must be designed to remain safe even if two independent faults occur simultaneously or sequentially, including overcharge, short circuit, or operation outside specified temperature limits.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a third-party fire safety audit mandatory for BESS in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Under Regulation 122(M), every BESS installation must undergo an independent third-party fire safety audit within three months from 1 April 2027, and submit the audit report to the Electrical Inspector.',
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
