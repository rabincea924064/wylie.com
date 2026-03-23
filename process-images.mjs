import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = 'c:/Users/acer/CIWG-Sites/wylie.com/public/images';
const files = fs.readdirSync(imagesDir);

async function processImages() {
  for (const file of files) {
    if (file.includes('-mobile')) continue;

    const filePath = path.join(imagesDir, file);
    const ext = path.extname(file).toLowerCase();
    const fileName = path.parse(file).name;

    if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
      if (file === 'CIWEB.png') continue;

      console.log(`Processing image: ${file}`);
      const image = sharp(filePath);
      const metadata = await image.metadata();

      const webpName = `${fileName}.webp`;
      const outPath = path.join(imagesDir, webpName);
      
      if (ext !== '.webp') {
        let pipeline = image.webp({ quality: 80 });
        if (metadata.width > 1920) {
          pipeline = pipeline.resize(1920);
        }
        await pipeline.toFile(outPath);
        console.log(`Converted ${file} to .webp`);
      }

      // Create mobile variant for hero backgrounds
      if (file === 'hero-bg.png' || file === 'slider-img01.webp' || file === 'hero-bg.webp') {
        const mobilePath = path.join(imagesDir, `${fileName}-mobile.webp`);
        await sharp(filePath)
          .resize(640)
          .webp({ quality: 80 })
          .toFile(mobilePath);
        console.log(`Created mobile variant for ${file}`);
      }
    }
  }
}

processImages().catch(console.error);
