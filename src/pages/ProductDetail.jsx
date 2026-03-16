import { useParams, Link } from 'react-router-dom';
import { Check, ChevronRight, ArrowRight, Shield, Zap, Battery, Download } from 'lucide-react';
import { getProductById, products } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="bg-bg-deep min-h-screen pt-32 text-center">
        <div className="max-w-md mx-auto px-6">
          <div className="w-20 h-20 rounded-2xl bg-white border border-border flex items-center justify-center mx-auto mb-6">
            <Battery className="w-8 h-8 text-text-tertiary" />
          </div>
          <h2 className="text-3xl font-bold text-text-primary mb-4">System Not Found</h2>
          <p className="text-base text-text-secondary mb-8">The product you're looking for may have been updated or moved.</p>
          <Link to="/products" className="btn-pill btn-unity">Back to All Systems</Link>
        </div>
      </div>
    );
  }

  const otherProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-bg-deep min-h-screen pt-14">

      {/* Breadcrumb */}
      <div className="border-b border-border bg-white/80 backdrop-blur-xl sticky top-14 z-20">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="flex items-center gap-2 text-xs text-text-secondary">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-text-tertiary" />
            <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3 text-text-tertiary" />
            <span className="text-text-primary font-semibold">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-100 bg-accent/4 blur-[120px] rounded-full -z-10"></div>

        <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — Product image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Glow behind */}
                <div className="absolute inset-0 bg-accent/5 blur-[50px] rounded-full scale-75"></div>
                <div className="relative bg-white p-10 sm:p-14 rounded-3xl border border-border shadow-[0_8px_40px_rgba(0,0,0,0.04)]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-72 w-auto mx-auto object-contain hover:scale-105 transition-transform duration-700 ease-out drop-shadow-xl"
                  />
                  {product.isNew && (
                    <div className="absolute top-5 left-5">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase bg-brand-green text-white px-3 py-1.5 rounded-full shadow-md shadow-brand-green/20">
                        New
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right — Product info */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/15 bg-accent/5 text-accent font-bold text-[10px] uppercase tracking-widest mb-4">
                <Battery className="w-3 h-3" /> {product.series}
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight leading-[1.08] mb-3">
                {product.name}
              </h1>

              <p className="text-sm text-text-secondary mb-6 leading-relaxed max-w-md">{product.tagline}</p>

              {/* Highlight cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                {product.highlights.map((h) => (
                  <div key={h.label} className="bg-white px-3 py-3 rounded-xl border border-border text-center shadow-sm hover:shadow-md hover:border-accent/20 transition-all">
                    <span className="text-lg font-extrabold text-accent block leading-tight">{h.value}</span>
                    <span className="text-[9px] text-text-tertiary uppercase tracking-widest font-bold mt-0.5 block">{h.label}</span>
                  </div>
                ))}
              </div>

              {/* Short description */}
              <div className="bg-[#f8f9fa] rounded-xl p-4 border border-border mb-6">
                <p className="text-xs text-text-secondary leading-relaxed italic">
                  &ldquo;{product.shortDesc}&rdquo;
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="btn-pill btn-unity text-sm">
                  Request Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="btn-pill btn-unity-outline text-sm">
                  <Download className="w-4 h-4" /> Download Datasheet
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs & Features */}
      <section className="py-12 sm:py-16 bg-white border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Specs */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-accent" />
                </div>
                <h2 className="text-xl font-extrabold text-text-primary tracking-tight">Technical Specifications</h2>
              </div>
              <div className="bg-[#f8f9fa] rounded-2xl overflow-hidden border border-border">
                {Object.entries(product.specs).map(([key, value], i) => {
                  const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase());
                  return (
                    <div
                      key={key}
                      className={`flex items-center justify-between py-3.5 px-5 hover:bg-white transition-colors ${
                        i < Object.entries(product.specs).length - 1 ? 'border-b border-border' : ''
                      }`}
                    >
                      <span className="text-xs font-semibold text-text-tertiary uppercase tracking-wider">{label}</span>
                      <span className="text-sm text-text-primary font-bold text-right">{value}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Features */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-brand-green/8 border border-brand-green/15 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-brand-green" />
                </div>
                <h2 className="text-xl font-extrabold text-text-primary tracking-tight">Key Features</h2>
              </div>
              <div className="space-y-2.5">
                {product.features.map((feature, i) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 bg-[#f8f9fa] p-4 rounded-xl border border-border group hover:bg-white hover:border-brand-green/20 hover:shadow-sm transition-all"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0 mt-0.5 border border-brand-green/15 group-hover:bg-brand-green group-hover:border-brand-green transition-all">
                      <Check className="w-3 h-3 text-brand-green group-hover:text-white transition-colors" />
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
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-text-primary tracking-tight mb-2">Applications</h2>
            <p className="text-sm text-text-secondary">Where the {product.name} excels</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {product.applications.map((app) => (
              <div key={app} className="flex items-center gap-3 px-4 py-3.5 bg-white rounded-xl border border-border hover:border-accent/20 hover:shadow-md transition-all group">
                <div className="w-2.5 h-2.5 rounded-full bg-linear-to-r from-accent to-brand-green shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Products */}
      <section className="py-12 sm:py-16 bg-white border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-text-primary tracking-tight mb-2">Explore More Systems</h2>
            <p className="text-sm text-text-secondary">Find the right solution for your needs</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {otherProducts.map((p) => (
              <Link
                key={p.id}
                to={`/products/${p.id}`}
                className="group bg-[#f8f9fa] rounded-2xl overflow-hidden border border-border hover:bg-white hover:border-accent/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-5 h-44 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/3 transition-colors duration-500 rounded-t-2xl"></div>
                  <img src={p.image} alt={p.name} className="max-h-32 object-contain relative z-10 group-hover:scale-105 transition-transform duration-500 drop-shadow-md" />
                </div>
                <div className="px-4 pb-4 text-center">
                  <h3 className="text-sm font-bold text-text-primary group-hover:text-accent transition-colors">{p.name}</h3>
                  <p className="text-[10px] text-text-tertiary font-bold uppercase tracking-widest mt-1">{p.series}</p>
                  <div className="mt-3 flex items-center justify-center gap-1 text-[11px] font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16 bg-brand-blue-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)]" style={{ backgroundSize: '28px 28px' }}></div>
        <div className="absolute -top-25 -right-12.5 w-75 h-75 bg-brand-green/8 rounded-full blur-[100px]"></div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight leading-[1.1]">
            Interested in the <span className="text-brand-green">{product.name}</span>?
          </h2>
          <p className="text-sm text-white/50 mb-8 leading-relaxed max-w-md mx-auto">
            Get in touch for specialized pricing, technical consultation, and custom configuration options.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/contact" className="btn-corporate btn-corp-green text-sm">
              Contact Solutions Team <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/products" className="btn-corporate btn-corp-outline text-sm">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
