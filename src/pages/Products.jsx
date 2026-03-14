import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products, categories } from '../data/products';
import SectionHeading from '../components/SectionHeading';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const filtered = activeCategory === 'all' ? products : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-bg-deep min-h-screen pt-15">
      {/* Header */}
      <section className="relative pt-6 pb-2 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/5 blur-[100px] rounded-full -z-10"></div>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <SectionHeading
            title="All Products."
            subtitle="Explore our full range of energy storage solutions — from portable power stations to utility-scale systems."
          />
          <div className="segmented-control shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={activeCategory === cat.id ? 'active' : ''}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-16 pt-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="feat-card group block rounded-2xl overflow-hidden hover:!border-accent/25"
              >
                <div className="img-container h-48 mb-4 rounded-xl bg-bg-deep">
                  
                </div>
                <div className="text-left">
                  {product.isNew && (
                    <span className="inline-flex items-center gap-1 text-accent text-[10px] font-bold tracking-widest uppercase mb-2 bg-accent/8 px-2 py-0.5 rounded-full border border-accent/20">New</span>
                  )}
                  <h3 className="text-lg font-bold mb-1.5 text-text-primary group-hover:text-accent transition-colors">{product.name}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">{product.tagline}</p>
                  <div className="flex items-center text-accent font-bold text-xs uppercase tracking-wider group-hover:gap-2 transition-all bg-accent/5 group-hover:bg-accent/10 py-2 px-3 rounded-lg">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-text-secondary text-base">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
