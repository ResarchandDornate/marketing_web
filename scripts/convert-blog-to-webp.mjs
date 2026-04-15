import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { join, parse } from 'node:path';

const dir = 'public/blog';
const files = await readdir(dir);
const targets = files.filter((f) => /\.(png|jpe?g)$/i.test(f));

for (const file of targets) {
  const src = join(dir, file);
  const out = join(dir, `${parse(file).name}.webp`);
  try {
    await stat(out);
    console.log(`skip (exists): ${out}`);
    continue;
  } catch {}
  await sharp(src).webp({ quality: 82 }).toFile(out);
  console.log(`wrote: ${out}`);
}
