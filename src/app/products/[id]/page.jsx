import ProductDetailClient from './ProductDetailClient';

const metadataMap = {
  'unity-infinity': {
    title: 'Unity Infinity | Portable BESS for Home & Business in India',
    description: 'Unity Infinity is a portable battery energy storage system for homes and small businesses in India. Reliable, solar-ready backup power.',
    keywords: ['Unity Infinity', 'Portable BESS', 'Home Energy Storage'],
  },
  'model-a': {
    title: 'Unity Model A | C & I energy storage solution in India',
    description: 'Unity Model A is a energy storage system for commercial and industrial applications in India. Reliable, scalable power for high-demand energy needs.',
    keywords: ['Unity Model A', 'C&I energy storage', 'Commercial BESS'],
  },
  'model-b': {
    title: 'Unity Model B | DC-couple energy storage system in india',
    description: 'UnityESS Model B is a DC-coupled energy storage system designed for large facilities, able to manage peak load, and scalable storage up to 1 MWh.',
    keywords: ['Unity Model B', 'DC-coupled BESS', 'Industrial Storage'],
  },
  'model-c': {
    title: 'Unity Model C | Containerized energy storage system India',
    description: 'Unity Model C is a containerized energy storage system for utility and grid-scale projects in India. Scalable & high-capacity system for reliable power.',
    keywords: ['Unity Model C', 'Containerized BESS', 'Utility Scale Storage'],
  },
};

export async function generateMetadata({ params }) {
  const { id } = params;
  const meta = metadataMap[id];
  
  if (meta) {
    return {
      title: meta.title,
      description: meta.description,
      keywords: meta.keywords,
    };
  }

  return {
    title: 'UnityESS | Advanced Energy Storage Solutions',
  };
}

export default function ProductDetailPage() {
  return <ProductDetailClient />;
}
