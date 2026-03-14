import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="product-card group block bg-apple-bg rounded-2xl overflow-hidden text-center"
    >
      <div className="relative pt-8 px-6 pb-4">
        
      </div>
      <div className="px-6 py-5">
        {product.isNew && (
          <span className="text-apple-orange text-xs font-medium">New</span>
        )}
        <h3 className="text-xl font-semibold text-apple-text leading-tight mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-apple-secondary leading-snug mb-3">
          {product.tagline}
        </p>
        <span className="text-sm text-apple-link group-hover:underline">
          Learn more &rsaquo;
        </span>
      </div>
    </Link>
  );
}
