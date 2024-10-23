import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Source and destination folders
const sourceFolder = path.join(__dirname, 'public', 'images');
const destinationFolder = path.join(__dirname, 'public', 'images', 'optimized');

// Ensure the destination folder exists
if (!fs.existsSync(destinationFolder)) {
  fs.mkdirSync(destinationFolder, { recursive: true });
}

// Resize image function
const resizeImage = async (fileName, width, height) => {
  const inputPath = path.join(sourceFolder, fileName);
  const outputPath = path.join(destinationFolder, fileName);

  try {
    await sharp(inputPath)
      .resize(width, height) // Resize image to specified width and height
      .toFile(outputPath); // Save resized image to the destination folder

    console.log(`Image resized and saved as ${outputPath}`);
  } catch (error) {
    console.error(`Error resizing image: ${fileName}`, error);
  }
};

// Process all images in the source folder
const resizeAllImages = (width = 800, height = 600) => {
  fs.readdir(sourceFolder, (err, files) => {
    if (err) {
      console.error('Error reading the source folder', err);
      return;
    }

    files.forEach((file) => {
      const ext = path.extname(file).toLowerCase();
      if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
        resizeImage(file, width, height);
      }
    });
  });
};

// Start resizing images
resizeAllImages(800, 600); // Resize to 800x600 or modify as needed
