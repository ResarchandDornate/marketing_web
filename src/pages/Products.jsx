import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Battery, ChevronRight } from 'lucide-react';
import { products, categories } from '../data/products';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const filtered = activeCategory === 'all' ? products : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-bg-deep min-h-screen pt-14 overflow-x-hidden">

      {/* Compact Header */}
      <section className="relative pt-10 pb-6 overflow-hidden bg-white border-b border-border">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-50 bg-accent/4 blur-[100px] rounded-full -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="section-badge mb-4 mx-auto">All Products</div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-700 tracking-tight leading-[1.1] mb-2">
            Energy Storage <span className="text-brand-blue-dark">Solutions</span>
          </h1>
          <p className="text-sm text-text-secondary max-w-lg mx-auto leading-relaxed">
            From portable power stations to utility-scale containerized systems — engineered for absolute reliability.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-14 z-30 bg-white/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-3 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-accent text-white shadow-md shadow-accent/20'
                  : 'bg-transparent text-text-secondary hover:bg-bg-deep hover:text-text-primary'
              }`}
            >
              {cat.name}
            </button>
          ))}
          <div className="ml-auto hidden sm:flex items-center text-xs text-text-tertiary font-medium">
            {filtered.length} product{filtered.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, index) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(0,107,166,0.12)] transition-all duration-500 hover:-translate-y-2 flex flex-col"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Top accent bar */}
                <div className="h-1 bg-linear-to-r from-brand-blue-dark via-accent to-brand-blue-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Image */}
                <div className="relative bg-linear-to-br from-[#f4f7fa] via-[#edf1f5] to-[#e8ecf0] px-6 pt-8 pb-6 flex items-center justify-center min-h-56">
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.02] transition-colors duration-700"></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-44 max-w-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-xl"
                  />
                  {product.isNew && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-flex items-center gap-1 text-[10px] font-extrabold tracking-widest uppercase bg-accent text-white px-3 py-1.5 rounded-lg shadow-lg shadow-accent/25">
                        New
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="text-[9px] font-bold tracking-[0.12em] uppercase text-accent/70 bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-accent/10 shadow-sm">
                      {product.series.replace(' Series', '')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 pt-4 flex flex-col flex-1 border-t border-border/50">
                  <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-accent mb-1.5">{product.series}</p>
                  <h3 className="text-lg font-extrabold text-text-primary mb-1 group-hover:text-brand-blue-dark transition-colors duration-300 tracking-tight leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed mb-3">{product.tagline}</p>

                  {/* Spec highlight */}
                  <div className="text-sm font-bold text-brand-blue-dark mb-4">
                    {product.highlights[0]?.value}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto flex items-center justify-between text-sm font-bold text-accent group-hover:text-white bg-accent/[0.04] group-hover:bg-accent py-3 px-5 rounded-xl transition-all duration-400 border border-accent/10 group-hover:border-accent group-hover:shadow-lg group-hover:shadow-accent/15">
                    <span>Explore System</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <div className="w-16 h-16 rounded-2xl bg-bg-deep border border-border flex items-center justify-center mx-auto mb-4">
                <Battery className="w-7 h-7 text-text-tertiary" />
              </div>
              <p className="text-text-secondary text-base font-medium">No products found in this category.</p>
              <button onClick={() => setActiveCategory('all')} className="mt-3 text-accent text-sm font-semibold hover:underline">
                View all products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-white border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-700 tracking-tight mb-3 leading-[1.1]">
            Need help choosing the right <span className="text-brand-blue-dark">system?</span>
          </h2>
          <p className="text-sm text-text-secondary font-medium mb-6 max-w-xl mx-auto">
            Our engineering team can recommend the optimal solution based on your load profile and requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/contact" className="btn-pill btn-unity text-sm">
              Talk to Engineering <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/process" className="btn-pill btn-unity-outline text-sm">
              How It Works <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
