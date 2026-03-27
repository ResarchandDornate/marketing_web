import fs from 'fs';
import path from 'path';
import { products } from '../../data/products';

export async function GET() {
  const baseUrl = 'https://unityess.com';
  const appDirectory = path.join(process.cwd(), 'src', 'app');

  // Function to recursively find all page.jsx/page.js files
  const getRoutes = (dir, currentRoute = '') => {
    let routes = [];
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
      if (item.isDirectory()) {
        const itemPath = path.join(dir, item.name);
        const folderName = item.name;

        // Skip private folders, route groups (for simplicity in URL generation), 
        // and special folders like api or sitemap.xml
        if (folderName.startsWith('_') || folderName === 'api' || folderName === 'sitemap.xml') {
          continue;
        }

        // Clean folder name for URL (remove route groups like (marketing))
        const cleanFolderName = folderName.startsWith('(') && folderName.endsWith(')') 
          ? '' 
          : folderName;
        
        const newRoute = currentRoute + (cleanFolderName ? `/${cleanFolderName}` : '');

        // Check if this folder has a page file
        const hasPage = fs.readdirSync(itemPath).some(file => file.startsWith('page.'));
        
        // Don't add dynamic routes like [id] to static list
        if (hasPage && !folderName.startsWith('[')) {
          routes.push({
            url: `${baseUrl}${newRoute}`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: newRoute === '' ? '1.0' : '0.8',
          });
        }

        // Recurse
        routes = [...routes, ...getRoutes(itemPath, newRoute)];
      }
    }
    return routes;
  };

  // 1. Discover Static Routes (Home is handled slightly differently if needed, but / catches it)
  let allStaticRoutes = getRoutes(appDirectory);
  
  // Add root "/" if not already included (it usually is via the initial scan but let's be sure)
  if (!allStaticRoutes.some(r => r.url === baseUrl || r.url === `${baseUrl}/`)) {
    allStaticRoutes.unshift({
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: '1.0',
    });
  }

  // 2. Dynamic product routes from data
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: '0.7',
  }));

  const allRoutes = [...allStaticRoutes, ...productRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(
      (item) => `
    <url>
      <loc>${item.url}</loc>
      <lastmod>${item.lastModified}</lastmod>
      <changefreq>${item.changeFrequency}</changefreq>
      <priority>${item.priority}</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
