const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processImages() {
    const dir = '.';
    const files = fs.readdirSync(dir);
    const imageFiles = files.filter(f => f.endsWith('.png') || f.endsWith('.jfif'));
    
    let html = fs.readFileSync('pangandaran_paddle_board.html', 'utf8');

    for (const file of imageFiles) {
        const ext = path.extname(file);
        const basename = path.basename(file, ext);
        const newFilename = `${basename}.webp`;
        
        await sharp(file)
            .webp({ quality: 80 })
            .toFile(newFilename);
            
        console.log(`Converted ${file} to ${newFilename}`);
        
        // Update HTML references
        const regex = new RegExp(`\\./${file.replace(/\./g, '\\.')}`, 'g');
        html = html.replace(regex, `./${newFilename}`);
    }

    // Add lazy loading
    // Simple approach: replace <img with <img loading="lazy" 
    // Except for hero image. We know the hero image is activity_sunrise_paddle_1780802614704.webp now.
    html = html.replace(/<img /g, '<img loading="lazy" ');
    
    // Remove lazy loading from the Hero image
    html = html.replace(/<img loading="lazy" src="\.\/activity_sunrise_paddle_1780802614704\.webp" alt="Petualangan Pagi Hari/g, '<img src="./activity_sunrise_paddle_1780802614704.webp" alt="Petualangan Pagi Hari');

    fs.writeFileSync('pangandaran_paddle_board.html', html, 'utf8');
    console.log('Finished processing images and updating HTML.');
}

processImages().catch(console.error);
