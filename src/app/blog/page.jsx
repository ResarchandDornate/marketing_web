import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { posts } from './posts';

export const metadata = {
  title: 'UnityESS Blog | Energy Storage Insights, BESS News & Industry Updates',
  description:
    'Latest insights on battery energy storage systems (BESS), India energy regulations, solar storage, and UnityESS product updates from Ornate Solar.',
  keywords: [
    'UnityESS blog',
    'BESS news India',
    'energy storage insights',
    'battery storage articles',
    'BESS regulations India',
    'solar energy storage blog',
  ],
  alternates: {
    canonical: 'https://unityess.ai/blog',
  },
  openGraph: {
    title: 'UnityESS Blog | Energy Storage Insights & BESS News',
    description:
      'Latest insights on battery energy storage systems (BESS), India energy regulations, and UnityESS product updates.',
    url: 'https://unityess.ai/blog',
    siteName: 'UnityESS',
    type: 'website',
    images: [
      {
        url: 'https://unityess.ai/logo.png',
        width: 1200,
        height: 630,
        alt: 'UnityESS Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UnityESS Blog | Energy Storage Insights & BESS News',
    description:
      'Latest insights on battery energy storage systems (BESS), India energy regulations, and UnityESS product updates.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'UnityESS Blog',
  description:
    'Insights on battery energy storage systems (BESS), India energy regulations, and UnityESS product updates.',
  url: 'https://unityess.ai/blog',
  publisher: {
    '@type': 'Organization',
    name: 'UnityESS',
    url: 'https://unityess.ai',
    logo: {
      '@type': 'ImageObject',
      url: 'https://unityess.ai/logo.png',
    },
  },
  blogPost: posts.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.description,
    image: `https://unityess.ai${p.image}`,
    datePublished: `${p.date}T00:00:00.000Z`,
    url: `https://unityess.ai/blog/${p.slug}`,
    author: { '@type': 'Organization', name: 'UnityESS' },
  })),
};

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      <div className="bg-white min-h-screen pt-12">
        <div className="max-w-[1000px] mx-auto px-6 py-10">
          {/* Page Header */}
          <header className="text-center mb-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent mb-2">
              UnityESS Insights
            </p>
            <h1 className="text-[26px] md:text-[34px] font-bold text-[#191919] leading-tight mb-3">
              Energy Storage News, Insights & Updates
            </h1>
            <p className="text-[14px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Expert perspectives on battery energy storage systems, India&apos;s energy regulations,
              solar integration, and how UnityESS is shaping the future of clean energy.
            </p>
          </header>

          {/* All Posts Grid */}
          {posts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {posts.map((post, idx) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-xl overflow-hidden border border-gray-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-50">
                    <img
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      width={800}
                      height={500}
                      loading={idx === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent mb-2">
                      {post.category}
                    </span>
                    <h3 className="text-[16px] font-bold text-[#191919] leading-snug mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[13px] text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-1">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-[11px] font-medium text-gray-500 mt-auto pt-3 border-t border-gray-50">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.dateLabel}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-12">More articles coming soon.</p>
          )}
        </div>
      </div>
    </>
  );
}
