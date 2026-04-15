const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/blog');

async function convert() {
  const images = [
    { src: 'unity-blog-banner1.jpg.jpeg', dest: 'unity-blog-banner1.webp' },
    { src: 'unity-blog-banner3.jpg (1).jpeg', dest: 'unity-blog-banner3.webp' }
  ];

  for (const img of images) {
    const srcPath = path.join(dir, img.src);
    const destPath = path.join(dir, img.dest);
    
    if (fs.existsSync(srcPath)) {
      await sharp(srcPath).webp({ quality: 80 }).toFile(destPath);
      console.log(`Converted ${img.src} to ${img.dest}`);
      fs.unlinkSync(srcPath);
      console.log(`Deleted ${img.src}`);
    } else {
      console.log(`File not found: ${img.src}`);
    }
  }
}

convert().catch(console.error);
