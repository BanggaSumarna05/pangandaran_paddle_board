const fs = require('fs');

// 1. Create input.css
const inputCssContent = `
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* Tipografi premium bernuansa WaveRide */
  h1, h2, h3, h4, .font-heading {
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 600;
      letter-spacing: 0.05em;
  }
  body, .font-body {
      font-family: 'Source Sans Pro', sans-serif;
      color: #858585;
  }
}

@layer utilities {
  /* Scrollbar kustom */
  ::-webkit-scrollbar {
      width: 8px;
  }
  ::-webkit-scrollbar-track {
      background: #FFFFFF;
  }
  ::-webkit-scrollbar-thumb {
      background: #16D5CC;
      border-radius: 99px;
  }
  ::-webkit-scrollbar-thumb:hover {
      background: #FFB434;
  }
}

/* Cursor kustom interaktif */
#interactive-cursor {
    pointer-events: none;
    transition: transform 0.1s ease, background-color 0.3s ease, border-color 0.3s ease;
    z-index: 9999;
}

/* Transisi gambar hover */
.reveal-container {
    overflow: hidden;
    border-radius: 1.5rem;
}
.reveal-image {
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease;
}
.reveal-container:hover .reveal-image {
    transform: scale(1.06);
    filter: brightness(0.95);
}
`;
fs.writeFileSync('input.css', inputCssContent);

// 2. Create tailwind.config.js
const tailwindConfig = `
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
        colors: {
            primaryAccent: '#16D5CC',
            secondaryAccent: '#FFB434',
            textMain: '#858585',
            brandWhite: '#FFFFFF',
            brandDark: '#000000',
            neutralLight: '#FAFAFA',
        },
        fontFamily: {
            heading: ['"Josefin Sans"', 'sans-serif'],
            body: ['"Source Sans Pro"', 'sans-serif'],
        },
        boxShadow: {
            'premium-low': 'rgba(0, 0, 0, 0.03) 0px 0px 10px 2px',
            'premium-mid': 'rgba(0, 0, 0, 0.05) 0px 5px 15px 0px',
            'premium-high': 'rgba(22, 213, 204, 0.1) 0px 10px 30px 0px',
        }
    }
  },
  plugins: [],
}
`;
fs.writeFileSync('tailwind.config.js', tailwindConfig);

// 3. Update HTML to remove Tailwind CDN and custom styles, and add style.css
let html = fs.readFileSync('pangandaran_paddle_board.html', 'utf8');

// Replace the entire block from <!-- Tailwind CSS --> to </style>
const startToken = '<!-- Tailwind CSS -->';
const endToken = '</style>';
const startIndex = html.indexOf(startToken);
const endIndex = html.indexOf(endToken) + endToken.length;

if (startIndex !== -1 && endIndex !== -1) {
    const textToReplace = html.substring(startIndex, endIndex);
    const replacement = `<!-- Compiled Tailwind CSS -->
    <link rel="stylesheet" href="style.css">`;
    html = html.replace(textToReplace, replacement);
    fs.writeFileSync('pangandaran_paddle_board.html', html);
    console.log('HTML updated for compiled Tailwind.');
} else {
    console.log('Could not find Tailwind CSS block to replace.');
}
