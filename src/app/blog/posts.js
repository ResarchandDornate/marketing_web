// Central registry of all blog posts.
// To add a new blog: create the page folder under src/app/blog/<slug>/
// then add an entry here. The /blog index will pick it up automatically.

export const posts = [
  {
    slug: 'india-bess-safety-regulations-2026',
    title: "India's BESS Safety Regulations 2026: Key Rules, Fire Audit Mandate & What Changes from April 2027",
    description:
      "Detailed guide to India's BESS safety regulations 2026 by CEA. Covers key rules, fire audit requirements, and compliance from April 2027.",
    image: '/blog/india-bess-safety-regulations-2026-card.webp',
    imageAlt:
      "India BESS Safety Regulations 2026 - CEA Chapter XA rules, fire audit mandate and April 2027 compliance framework for battery energy storage systems",
    date: '2026-04-10',
    dateLabel: 'April 10, 2026',
    author: 'UnityESS Team',
    readTime: '8 min read',
    category: 'Regulations',
  },
  {
    slug: 'unityess-energy-storage-system-india',
    title: 'Introducing UnityESS Smart Energy Storage System in India',
    description:
      'UnityESS is a smart energy storage system in India by Ornate Solar and Inverted Energy. It stores excess solar energy, reduces electricity costs, and provides reliable power backup.',
    image: '/blog/unityess-smart-energy-storage-system-india-card.webp',
    imageAlt:
      'UnityESS Smart Energy Storage System in India - reliable BESS solution by Ornate Solar and Inverted Energy for solar power backup',
    date: '2025-04-03',
    dateLabel: 'April 3, 2025',
    author: 'UnityESS Team',
    readTime: '6 min read',
    category: 'Product',
  },
];
