const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('pangandaran_paddle_board.html', 'utf8');
const $ = cheerio.load(html);

// 1. SEO & Meta Tags
$('head').append(`
    <!-- Open Graph / Social Media Meta Tags -->
    <meta property="og:title" content="Pangandaran Paddle Board - Healing Vibes & Aesthetic">
    <meta property="og:description" content="Spill hidden gem Pangandaran dari atas paddle board. Vibes lautnya bikin lo lupa sama deadline! Booking sekarang keburu penuh.">
    <meta property="og:image" content="./activity_sunrise_paddle_1780802614704.webp">
    <meta property="og:type" content="website">
    
    <!-- Favicon -->
    <link rel="icon" type="image/webp" href="./activity_sunrise_paddle_1780802614704.webp">
    
    <!-- AOS CSS -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
`);

// 2. Inject AOS JS and Init
$('body').append(`
    <!-- AOS JS -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    </script>
`);

// 3. Floating WhatsApp Button
$('body').append(`
    <!-- Floating WhatsApp Button -->
    <a href="https://wa.me/6282121334445?text=Halo%20min,%20spill%20dong%20paket%20paddle%20board-nya!" 
       target="_blank"
       class="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-all duration-300 z-50 flex items-center justify-center animate-pulse group">
       <i data-lucide="message-circle" class="w-7 h-7"></i>
       <span class="absolute right-full mr-4 bg-white text-[#25D366] px-3 py-1.5 rounded-xl text-sm font-bold shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
           Chat Admin!
       </span>
    </a>
`);

// 4. Add data-aos attributes
$('section').attr('data-aos', 'fade-up');
$('.reveal-container').attr('data-aos', 'zoom-in');
$('.bg-brandWhite').attr('data-aos', 'fade-up');
$('h2').attr('data-aos', 'fade-down');

// 5. Gen Z Copywriting Rewrite
const replaceText = (selector, oldTextRegex, newText) => {
    $(selector).each((i, el) => {
        const text = $(el).text();
        if (oldTextRegex.test(text)) {
            $(el).text(text.replace(oldTextRegex, newText));
        }
    });
};

const replaceHtml = (selector, oldTextRegex, newText) => {
    $(selector).each((i, el) => {
        const htmlContent = $(el).html();
        if (oldTextRegex.test(htmlContent)) {
            $(el).html(htmlContent.replace(oldTextRegex, newText));
        }
    });
};

// Hero
replaceText('h1', /Solusi Terbaik Liburan Anda/, 'Solusi Healing Paling Skena Buat Lo');
replaceText('p', /Eksplorasi Keindahan Pangandaran/, 'Spill hidden gem Pangandaran dari atas paddle board. Vibes lautnya bikin lo lupa sama deadline!');
replaceText('a', /Jelajahi Paket/, 'Kepoin Paketnya');

// About
replaceText('h2', /Tentang Pangandaran Paddle Board/, 'Tentang Kita (Bukan Cuma Mitos)');
replaceText('p', /Kami adalah penyedia layanan rekreasi air utama/, 'Kita adalah provider wisata air paling aesthetic di Pangandaran. Berawal dari hobi, sekarang kita pengen ngajak lo semua buat ngerasain flexing sehat di atas laut yang jernih parah.');
replaceText('h3', /Kenapa Memilih Kami\?/, 'Kenapa Harus Sama Kita? No Debat!');
replaceText('span', /Pemandu Berpengalaman/, 'Guide Pro & Asik');
replaceText('span', /Peralatan Premium/, 'Alat Aesthetic & Aman');
replaceText('span', /Harga Terjangkau/, 'Harga Worth It Parah');
replaceText('span', /Dokumentasi Gratis/, 'Free Dokumentasi Buat FYP');

// Packages
replaceText('h2', /Paket Menarik Kami/, 'Paket Flexing Buat Lo');
replaceText('h3', /Paket Standar/, 'Paket FOMO (Basic)');
replaceText('h3', /Paket Eksklusif/, 'Paket Sultan (Premium)');
replaceText('span', /Durasi/, 'Waktu Healing');
replaceText('span', /Pemandu Lokal/, 'Guide Lokal Gaul');
replaceText('button', /Pesan Paket Ini/, 'Sikat Paket Ini!');

// Testimonials
replaceText('h2', /Apa Kata Mereka\?/, 'Apa Kata Mereka? (Valid No Kecot)');
replaceText('p', /Pengalaman yang luar biasa!/, 'Jujurly experience-nya mindblowing banget! Guidenya sabar ngajarin gue yang noob. Fix bakal balik lagi sih.');
replaceText('p', /Sangat direkomendasikan/, 'Highly recommended buat yang butuh pelarian dari hiruk pikuk kota. View-nya unreal parah!');
replaceText('p', /Fasilitas lengkap/, 'Fasilitasnya mantul, dapet foto-foto estetik yang auto masuk feed IG. Mantap jiwa!');

// Write back
fs.writeFileSync('pangandaran_paddle_board.html', $.html(), 'utf8');
console.log('HTML Optimized completely!');
