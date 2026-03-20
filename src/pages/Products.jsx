import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Battery, ChevronRight } from 'lucide-react';
import { products, categories } from '../data/products';
import Reveal, { RevealItem } from '../components/Reveal';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const filtered = activeCategory === 'all' ? products : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-bg-deep min-h-screen pt-8 overflow-x-hidden">

      {/* Compact Header */}
      <section className="relative bg-[rgb(58,88,129)] pt-13 pb-14 overflow-hidden">
        <div className="absolute top-[-60px] left-1/3 w-[450px] h-[450px]  rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-40px] right-1/4 w-[350px] h-[350px] bg-accent/6 blur-[150px] rounded-full pointer-events-none"></div>
        <Reveal animation="fade-up" className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5   text-xs font-bold tracking-widest uppercase text-white mb-6">All Products</div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
            Energy Storage <span className="text-[#60a5fa]">Solutions</span>
          </h1>
          <p className="text-sm text-white max-w-2xl mx-auto leading-relaxed">
            From portable power stations to utility-scale containerized systems — engineered for absolute reliability.
          </p>
        </Reveal>
      </section>

      {/* Category Filter */}
      <section className="sticky top-14 z-30 bg-white/95 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-accent text-white shadow-md shadow-accent/20'
                  : 'bg-transparent text-text-secondary hover:bg-bg-deep hover:text-text-primary'
              }`}
            >
              {cat.name}
            </button>
          ))}
          <div className="ml-auto hidden sm:flex items-center text-[10px] text-text-tertiary font-medium">
            {filtered.length} product{filtered.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-8 sm:py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal stagger staggerDelay={60} threshold={0.05} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" key={activeCategory}>
            {filtered.map((product) => (
              <RevealItem key={product.id} animation="fade-up">
                <Link
                  to={`/products/${product.id}`}
                  className="group relative block rounded-2xl overflow-hidden h-[280px] sm:h-[340px] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-400"
                >
                  {/* Full cover image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
                  {/* Category badge */}
                  <span className="absolute top-3 right-3 text-[7px] font-bold tracking-wider uppercase text-white/80 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {product.series.replace(' Series', '')}
                  </span>
                  {/* Content at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <h3 className="text-lg font-bold text-white mb-0.5 group-hover:text-cyan-200 transition-colors tracking-tight">
                      {product.name}
                    </h3>
                    <p className="text-sm text-white/70 font-medium">{product.highlights[0]?.value} {product.highlights[0]?.label}</p>
                  </div>
                  {/* Hover arrow */}
                  <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </Link>
              </RevealItem>
            ))}
          </Reveal>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center mx-auto mb-3">
                <Battery className="w-5 h-5 text-text-tertiary" />
              </div>
              <p className="text-text-secondary text-sm font-medium">No products found.</p>
              <button onClick={() => setActiveCategory('all')} className="mt-2 text-accent text-xs font-semibold hover:underline">
                View all products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <Reveal as="section" animation="zoom-in" className="relative py-10 bg-[rgb(58,88,129)] overflow-hidden">
        <div className="absolute top-[-60px] left-1/3 w-[400px] h-[400px] bg-accent/6 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl font-extrabold text-white tracking-tight mb-2 leading-[1.1]">
            Need help choosing the right <span className="text-brand-blue-light">system?</span>
          </h2>
          <p className="text-sm text-white font-medium mb-5 max-w-md mx-auto">
            Our engineering team can recommend the optimal solution based on your load profile.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-2.5">
            <Link to="/contact" className="btn-pill btn-unity text-xs">
              Talk to Engineering <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/process" className="btn-pill text-xs bg-transparent text-white border border-white/15 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
              How It Works <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
