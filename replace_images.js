const fs = require('fs');
let html = fs.readFileSync('pangandaran_paddle_board.html', 'utf8');

const replacements = [
  { search: /https:\/\/images\.unsplash\.com\/photo-1500485035595-cbe6f645feb1[^"']*/g, replace: './activity_family_paddle_1780802642083.png' },
  { search: /https:\/\/images\.unsplash\.com\/photo-1507525428034-b723cf961d3e[^"']*/g, replace: './activity_sunrise_paddle_1780802614704.png' },
  { search: /https:\/\/images\.unsplash\.com\/photo-1516690561799-46d8f74f9abf[^"']*/g, replace: './activity_green_canyon_1780802628294.png' },
  { search: /https:\/\/images\.unsplash\.com\/photo-1544551763-46a013bb70d5[^"']*/g, replace: './pangandaran_paddle_board.jfif' },
  { search: /https:\/\/images\.unsplash\.com\/photo-1473116763269-255ea7604ab6[^"']*/g, replace: './activity_rock_formation_1780802654815.png' },
  { search: /https:\/\/images\.unsplash\.com\/photo-1519046904884-53103b34b206[^"']*/g, replace: './pangandaran_paddle_board2.jfif' },
  { search: /https:\/\/images\.unsplash\.com\/photo-1502680390469-be75c86b636f[^"']*/g, replace: './pangandaran_paddle_board3.jfif' },
];

for (const r of replacements) {
  html = html.replace(r.search, r.replace);
}

fs.writeFileSync('pangandaran_paddle_board.html', html, 'utf8');
console.log('Replaced images successfully.');
