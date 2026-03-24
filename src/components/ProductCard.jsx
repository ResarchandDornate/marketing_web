import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="product-card group block bg-apple-bg rounded-2xl overflow-hidden text-center"
    >
      <div className="relative pt-8 px-6 pb-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-auto mx-auto object-contain group-hover:scale-105 transition-transform duration-700"
        />
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
