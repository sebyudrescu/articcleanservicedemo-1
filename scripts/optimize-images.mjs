import { mkdir, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = path.join(projectRoot, 'immagini-servizi');
const outputDir = path.join(projectRoot, 'public', 'images', 'optimized');
const assetsDir = path.join(projectRoot, 'public', 'assets');

async function ensureDir(dir) {
  try {
    await access(dir, constants.F_OK);
  } catch {
    await mkdir(dir, { recursive: true });
  }
}

const images = [
  {
    file: 'pulizie-uffici.jpg',
    outputs: [
      { width: 1600, name: 'pulizie-uffici-1600.webp' },
      { width: 960, name: 'pulizie-uffici-960.webp' },
      { width: 640, name: 'pulizie-uffici-640.webp' }
    ],
    quality: 75
  },
  {
    file: 'pulizie-industriali.jpg',
    outputs: [
      { width: 960, name: 'pulizie-industriali-960.webp' },
      { width: 640, name: 'pulizie-industriali-640.webp' }
    ]
  },
  {
    file: 'pulizie-post-cantiere.jpg',
    outputs: [
      { width: 960, name: 'pulizie-post-cantiere-960.webp' },
      { width: 640, name: 'pulizie-post-cantiere-640.webp' }
    ]
  },
  {
    file: 'pulizie-vetri.jpg',
    outputs: [
      { width: 960, name: 'pulizie-vetri-960.webp' },
      { width: 640, name: 'pulizie-vetri-640.webp' }
    ]
  },
  {
    file: 'pulizie-condominiali.jpg',
    outputs: [
      { width: 960, name: 'pulizie-condominiali-960.webp' },
      { width: 640, name: 'pulizie-condominiali-640.webp' }
    ]
  },
  {
    file: 'gestione-carrelati.jpg',
    outputs: [
      { width: 960, name: 'gestione-carrelati-960.webp' },
      { width: 640, name: 'gestione-carrelati-640.webp' }
    ]
  }
];

const otherImages = [
  {
    input: path.join(assetsDir, 'logo.png'),
    outputs: [
      { width: 320, name: path.join(assetsDir, 'logo.webp') }
    ],
    quality: 80
  }
];

async function optimize() {
  await ensureDir(outputDir);

  for (const image of images) {
    const inputPath = path.join(sourceDir, image.file);
    for (const { width, name } of image.outputs) {
      const outputPath = path.join(outputDir, name);
      await sharp(inputPath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: image.quality ?? 72 })
        .toFile(outputPath);
      console.log(`Generated ${outputPath}`);
    }
  }

  for (const image of otherImages) {
    for (const { width, name } of image.outputs) {
      await sharp(image.input)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: image.quality ?? 80 })
        .toFile(name);
      console.log(`Generated ${name}`);
    }
  }
}

optimize().catch((error) => {
  console.error('Image optimization failed:', error);
  process.exitCode = 1;
});
