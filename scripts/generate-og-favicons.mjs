import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const publicDir = join(root, 'public');

const faviconSvg = readFileSync(join(publicDir, 'favicon.svg'));
const ogSvg = readFileSync(join(publicDir, 'assets', 'img', 'og-cover.svg'));

async function run() {
  await Promise.all([
    sharp(faviconSvg).resize(16, 16).png().toFile(join(publicDir, 'favicon-16x16.png')),
    sharp(faviconSvg).resize(32, 32).png().toFile(join(publicDir, 'favicon-32x32.png')),
    sharp(faviconSvg).resize(180, 180).png().toFile(join(publicDir, 'apple-touch-icon.png')),
    sharp(faviconSvg).resize(192, 192).png().toFile(join(publicDir, 'icon-192.png')),
    sharp(faviconSvg).resize(512, 512).png().toFile(join(publicDir, 'icon-512.png')),
    sharp(ogSvg).resize(1200, 630).png().toFile(join(publicDir, 'assets', 'img', 'og-cover.png')),
  ]);
  console.log('Generated favicons + OG cover image.');
}

run();
