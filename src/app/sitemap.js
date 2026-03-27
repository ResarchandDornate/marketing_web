import { products } from '../data/products';

export default function sitemap() {
  const baseUrl = 'https://unityess.com';

  // Base routes
  const routes = [
    '',
    '/about',
    '/products',
    '/process',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic product routes
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...routes, ...productRoutes];
}
