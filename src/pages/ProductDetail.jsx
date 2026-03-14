import { useParams, Link } from 'react-router-dom';
import { Check, ChevronRight, ArrowRight } from 'lucide-react';
import { getProductById, products } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="bg-bg-deep min-h-screen pt-32 text-center">
        <div className="max-w-md mx-auto px-6">
          <h2 className="text-3xl font-bold text-text-primary mb-4">System Not Found</h2>
          <p className="text-base text-text-secondary mb-8">The product you're looking for may have been updated or moved.</p>
          <Link to="/products" className="btn-pill btn-unity">Back to All Systems</Link>
        </div>
      </div>
    );
  }

  const otherProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-bg-deep min-h-screen pt-24">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-white">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="flex items-center gap-2 text-xs text-text-secondary">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-text-tertiary" />
            <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3 text-text-tertiary" />
            <span className="text-text-primary font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Hero — side-by-side layout */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/5 blur-[120px] rounded-full -z-10 opacity-60"></div>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left — Product image */}
            <div className="flex justify-center animate-fadeIn">
              <div className="bg-white p-10 rounded-2xl border border-border shadow-sm w-full max-w-md">
                
              </div>
            </div>

            {/* Right — Product info */}
            <div className="animate-fadeInUp">
              {product.isNew && (
                <span className="section-badge mb-3">New Technology</span>
              )}
              <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">{product.series}</p>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-3">
                {product.name}
              </h1>
              <p className="text-sm text-text-secondary mb-6 leading-relaxed max-w-md">{product.tagline}</p>

              {/* Highlight pills */}
              <div className="flex flex-wrap gap-2.5 mb-6">
                {product.highlights.map((h) => (
                  <div key={h.label} className="bg-white px-4 py-2.5 rounded-xl border border-border flex flex-col items-center shadow-sm">
                    <span className="text-[9px] text-text-tertiary uppercase tracking-widest font-bold mb-0.5">{h.label}</span>
                    <span className="text-sm font-bold text-text-primary">{h.value}</span>
                  </div>
                ))}
              </div>

              {/* Short description */}
              <p className="text-xs text-text-secondary leading-relaxed mb-6 max-w-md italic">
                &ldquo;{product.shortDesc}&rdquo;
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="btn-pill btn-unity text-sm">Request Consultation <ArrowRight className="w-4 h-4" /></Link>
                <button className="btn-pill btn-unity-outline text-sm">Download Datasheet (PDF)</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs & Features */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Specs */}
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-4 tracking-tight">Technical Specifications</h2>
              <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm">
                {Object.entries(product.specs).map(([key, value], i) => {
                  const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase());
                  return (
                    <div key={key} className={`flex items-center justify-between py-4 px-6 ${i < Object.entries(product.specs).length - 1 ? 'border-b border-border' : ''}`}>
                      <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">{label}</span>
                      <span className="text-sm text-text-primary font-semibold text-right">{value}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-4 tracking-tight">Key Features</h2>
              <div className="space-y-3">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-border group hover:border-accent/30 transition-all shadow-sm hover:shadow-md">
                    <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0 mt-0.5 border border-brand-green/20">
                      <Check className="w-3 h-3 text-brand-green" />
                    </div>
                    <span className="text-sm text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-12 bg-white border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-xl font-bold text-text-primary mb-6 text-center tracking-tight">Applications</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {product.applications.map((app) => (
              <div key={app} className="flex items-center gap-3 px-5 py-3 bg-bg-deep rounded-xl border border-border hover:border-accent/30 transition-all shadow-sm">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm font-semibold text-text-secondary">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Products */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-bold text-text-primary mb-8 text-center tracking-tight">Explore More Systems</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {otherProducts.map((p) => (
              <Link key={p.id} to={`/products/${p.id}`} className="feat-card group block rounded-2xl overflow-hidden text-center">
                <div className="h-40 flex items-center justify-center mb-4 rounded-xl bg-bg-deep">
                  
                </div>
                <h3 className="text-base font-bold text-text-primary group-hover:text-accent transition-colors">{p.name}</h3>
                <p className="text-[10px] text-text-tertiary font-bold uppercase tracking-widest mt-1">{p.series}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white border-t border-border">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3 tracking-tight">Interested in the {product.name}?</h2>
          <p className="text-sm text-text-secondary mb-6 leading-relaxed">Get in touch for specialized pricing and technical consultation.</p>
          <Link to="/contact" className="btn-pill btn-unity">Contact Solutions Team <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  );
}
