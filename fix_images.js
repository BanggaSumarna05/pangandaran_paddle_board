const fs = require('fs');
let html = fs.readFileSync('pangandaran_paddle_board.html', 'utf8');

const replacements = [
  { search: /https:\/\/images\.unsplash\.com\/photo-1504280390367-361c6d9f38f4[^"']*/g, replace: './activity_camping_1780802781876.png' },
  { search: /https:\/\/images\.unsplash\.com\/photo-1534528741775-53994a69daeb[^"']*/g, replace: './avatar_andini_1780802845779.png' },
  { search: /https:\/\/images\.unsplash\.com\/photo-1507003211169-0a1dd7228f2d[^"']*/g, replace: './avatar_budi_1780802856780.png' },
  { search: /https:\/\/images\.unsplash\.com\/photo-1517841905240-472988babdf9[^"']*/g, replace: './avatar_andini_1780802845779.png' },
];

for (const r of replacements) {
  html = html.replace(r.search, r.replace);
}

fs.writeFileSync('pangandaran_paddle_board.html', html, 'utf8');
console.log('Fixed remaining images successfully.');
