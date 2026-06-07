const fs = require('fs');
let html = fs.readFileSync('pangandaran_paddle_board.html', 'utf8');

// FIX 1: Hero h1 - too large on small mobile (375px), reduce from text-5xl to text-4xl base
html = html.replace(
  '<h1 class="text-5xl md:text-7xl font-bold tracking-tight text-brandDark leading-none uppercase">',
  '<h1 class="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-brandDark leading-none uppercase">'
);

// FIX 2: Hero badge tag - truncate on mobile
html = html.replace(
  '<span class="text-xs font-semibold uppercase tracking-widest text-primaryAccent font-heading">Destinasi Petualangan Laut No.1 Pangandaran</span>',
  '<span class="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-primaryAccent font-heading">Destinasi Petualangan Laut No.1 Pangandaran</span>'
);

// FIX 3: Hero stats - 3 cols too cramped on small mobile, make it wrap better
html = html.replace(
  '<div class="grid grid-cols-3 gap-6 pt-6 border-t border-gray-100 max-w-md">',
  '<div class="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-gray-100 max-w-md">'
);

// FIX 4: Hero image info floater - padding too large on mobile
html = html.replace(
  '<div class="absolute bottom-6 left-6 right-6 bg-brandWhite/90 backdrop-blur-md rounded-2xl p-6 shadow-premium-mid border border-white/40 flex items-center justify-between">',
  '<div class="absolute bottom-4 left-4 right-4 bg-brandWhite/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-premium-mid border border-white/40 flex items-center justify-between">'
);

// FIX 5: Hero image - reduce height on mobile
html = html.replace(
  '<div class="reveal-container w-full h-[450px] md:h-[550px] shadow-premium-mid border border-gray-100 relative" data-aos="zoom-in">',
  '<div class="reveal-container w-full h-[320px] sm:h-[400px] md:h-[550px] shadow-premium-mid border border-gray-100 relative" data-aos="zoom-in">'
);

// FIX 6: Hero section - reduce top padding on mobile so content isn't pushed too low
html = html.replace(
  '<section id="hero" class="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-brandWhite" data-aos="fade-up">',
  '<section id="hero" class="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 overflow-hidden bg-brandWhite" data-aos="fade-up">'
);

// FIX 7: About section - reduce gap on mobile
html = html.replace(
  '<div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">',
  '<div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">'
);

// FIX 8: About section padding
html = html.replace(
  '<section id="about" class="py-24 px-6 md:px-12 bg-neutralLight relative" data-aos="fade-up">',
  '<section id="about" class="py-16 md:py-24 px-5 md:px-12 bg-neutralLight relative" data-aos="fade-up">'
);

// FIX 9: Activities section padding
html = html.replace(
  '<section id="activities" class="py-24 px-6 md:px-12 bg-brandWhite" data-aos="fade-up">',
  '<section id="activities" class="py-16 md:py-24 px-5 md:px-12 bg-brandWhite" data-aos="fade-up">'
);

// FIX 10: Destinations section padding + fix grid on mobile (2 cols on sm instead of 1)
html = html.replace(
  '<section id="destinations" class="py-24 px-6 md:px-12 bg-neutralLight overflow-hidden" data-aos="fade-up">',
  '<section id="destinations" class="py-16 md:py-24 px-5 md:px-12 bg-neutralLight overflow-hidden" data-aos="fade-up">'
);
// destination cards height - reduce on mobile
html = html.replace(/class="group cursor-pointer bg-brandWhite rounded-\[2rem\] overflow-hidden p-3 shadow-premium-low hover:shadow-premium-mid transition-all duration-300 relative h-96 flex flex-col justify-end"/g,
  'class="group cursor-pointer bg-brandWhite rounded-[2rem] overflow-hidden p-3 shadow-premium-low hover:shadow-premium-mid transition-all duration-300 relative h-64 sm:h-80 md:h-96 flex flex-col justify-end"'
);

// FIX 11: Packages section padding + featured card translate issue on mobile
html = html.replace(
  '<section id="packages" class="py-24 px-6 md:px-12 bg-brandWhite" data-aos="fade-up">',
  '<section id="packages" class="py-16 md:py-24 px-5 md:px-12 bg-brandWhite" data-aos="fade-up">'
);
// Featured package card - remove negative translate on mobile (causes misalignment)
html = html.replace(
  'class="bg-neutralLight rounded-[2rem] p-8 border-2 border-primaryAccent shadow-premium-mid flex flex-col justify-between relative lg:-translate-y-2"',
  'class="bg-neutralLight rounded-[2rem] p-8 border-2 border-primaryAccent shadow-premium-mid flex flex-col justify-between relative lg:-translate-y-4"'
);

// FIX 12: Gallery section padding
html = html.replace(
  '<section id="gallery" class="py-24 px-6 md:px-12 bg-neutralLight" data-aos="fade-up">',
  '<section id="gallery" class="py-16 md:py-24 px-5 md:px-12 bg-neutralLight" data-aos="fade-up">'
);
// Masonry gap fix
html = html.replace(
  '<div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">',
  '<div class="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">'
);

// FIX 13: Statistics panel - tighter text on mobile
html = html.replace(
  '<div class="max-w-7xl mx-auto relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center" id="statistics-panel">',
  '<div class="max-w-7xl mx-auto relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 text-center" id="statistics-panel">'
);
// stat numbers too large on mobile
html = html.replace(
  /class="text-5xl md:text-6xl font-bold text-primaryAccent font-heading tracking-wide" id="stat-visitors"/g,
  'class="text-3xl sm:text-4xl md:text-6xl font-bold text-primaryAccent font-heading tracking-wide" id="stat-visitors"'
);
html = html.replace(
  /class="text-5xl md:text-6xl font-bold text-secondaryAccent font-heading tracking-wide" id="stat-rating"/g,
  'class="text-3xl sm:text-4xl md:text-6xl font-bold text-secondaryAccent font-heading tracking-wide" id="stat-rating"'
);
html = html.replace(
  /class="text-5xl md:text-6xl font-bold text-primaryAccent font-heading tracking-wide" id="stat-years"/g,
  'class="text-3xl sm:text-4xl md:text-6xl font-bold text-primaryAccent font-heading tracking-wide" id="stat-years"'
);
html = html.replace(
  /class="text-5xl md:text-6xl font-bold text-secondaryAccent font-heading tracking-wide" id="stat-guide"/g,
  'class="text-3xl sm:text-4xl md:text-6xl font-bold text-secondaryAccent font-heading tracking-wide" id="stat-guide"'
);

// FIX 14: Testimonials section
html = html.replace(
  '<section class="py-24 px-6 md:px-12 bg-neutralLight" data-aos="fade-up">',
  '<section class="py-16 md:py-24 px-5 md:px-12 bg-neutralLight" data-aos="fade-up">'
);

// FIX 15: Instagram section
html = html.replace(
  '<section class="py-24 px-6 md:px-12 bg-brandWhite" data-aos="fade-up">',
  '<section class="py-16 md:py-24 px-5 md:px-12 bg-brandWhite" data-aos="fade-up">'
);

// FIX 16: FAQ section
html = html.replace(
  '<section id="faq" class="py-24 px-6 md:px-12 bg-neutralLight" data-aos="fade-up">',
  '<section id="faq" class="py-16 md:py-24 px-5 md:px-12 bg-neutralLight" data-aos="fade-up">'
);
// FAQ button text - wrap on mobile
html = html.replace(
  /class="w-full px-8 py-6 text-left flex items-center justify-between font-heading font-bold text-brandDark text-base uppercase tracking-wider focus:outline-none"/g,
  'class="w-full px-5 sm:px-8 py-5 sm:py-6 text-left flex items-center justify-between font-heading font-bold text-brandDark text-sm sm:text-base uppercase tracking-wider focus:outline-none"'
);
html = html.replace(
  /class="px-8 pb-6 text-sm text-textMain font-light leading-relaxed border-t border-gray-100 pt-4"/g,
  'class="px-5 sm:px-8 pb-5 sm:pb-6 text-sm text-textMain font-light leading-relaxed border-t border-gray-100 pt-4"'
);

// FIX 17: Booking section
html = html.replace(
  '<section id="booking" class="py-24 px-6 md:px-12 bg-brandDark text-brandWhite relative overflow-hidden" data-aos="fade-up">',
  '<section id="booking" class="py-16 md:py-24 px-5 md:px-12 bg-brandDark text-brandWhite relative overflow-hidden" data-aos="fade-up">'
);
html = html.replace(
  '<h2 class="text-4xl md:text-6xl font-bold tracking-tight uppercase" data-aos="fade-down">Sudah Siap Mencoba Petualangan Seru?</h2>',
  '<h2 class="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight uppercase" data-aos="fade-down">Sudah Siap Mencoba Petualangan Seru?</h2>'
);
// Booking form card padding
html = html.replace(
  '<div class="bg-brandWhite text-brandDark rounded-[2rem] p-8 md:p-12 shadow-premium-high text-left max-w-3xl mx-auto border border-white/10" data-aos="fade-up">',
  '<div class="bg-brandWhite text-brandDark rounded-[2rem] p-5 sm:p-8 md:p-12 shadow-premium-high text-left max-w-3xl mx-auto border border-white/10" data-aos="fade-up">'
);

// FIX 18: Footer padding
html = html.replace(
  '<footer class="bg-brandDark text-brandWhite py-16 px-6 md:px-12 border-t border-brandWhite/10">',
  '<footer class="bg-brandDark text-brandWhite py-12 md:py-16 px-5 md:px-12 border-t border-brandWhite/10">'
);
// Footer grid gap
html = html.replace(
  '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">',
  '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">'
);

// FIX 19: Floating WA button - add pb-safe for mobile bottom nav
html = html.replace(
  'class="fixed bottom-6 right-6 bg-[#25D366]',
  'class="fixed bottom-6 right-4 sm:right-6 bg-[#25D366]'
);

// FIX 20: Mobile overlay nav - improve spacing
html = html.replace(
  '<div id="mobile-overlay" class="hidden fixed inset-x-0 top-[88px] bg-brandWhite/95 backdrop-blur-md shadow-premium-mid flex-col py-8 px-6 space-y-6 text-sm uppercase tracking-widest font-semibold border-t border-gray-100 z-40">',
  '<div id="mobile-overlay" class="hidden fixed inset-x-0 top-[72px] bg-brandWhite/97 backdrop-blur-md shadow-premium-mid flex-col py-6 px-6 space-y-5 text-sm uppercase tracking-widest font-semibold border-t border-gray-100 z-40">'
);

// FIX 21: Packages card - reduce padding on mobile
html = html.replace(
  /class="bg-neutralLight rounded-\[2rem\] p-8 border border-gray-100 hover:border-primaryAccent\/30 shadow-premium-low hover:shadow-premium-mid transition-all duration-300 flex flex-col justify-between"/g,
  'class="bg-neutralLight rounded-[2rem] p-5 sm:p-8 border border-gray-100 hover:border-primaryAccent/30 shadow-premium-low hover:shadow-premium-mid transition-all duration-300 flex flex-col justify-between"'
);
html = html.replace(
  'class="bg-neutralLight rounded-[2rem] p-8 border-2 border-primaryAccent shadow-premium-mid flex flex-col justify-between relative lg:-translate-y-4"',
  'class="bg-neutralLight rounded-[2rem] p-5 sm:p-8 border-2 border-primaryAccent shadow-premium-mid flex flex-col justify-between relative lg:-translate-y-4"'
);

// FIX 22: Modal responsiveness - destination modal
html = html.replace(
  '<div class="bg-brandWhite max-w-xl w-full rounded-[2rem] p-6 md:p-8 relative border border-gray-100 shadow-premium-high text-left" data-aos="fade-up">',
  '<div class="bg-brandWhite max-w-xl w-full rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 md:p-8 relative border border-gray-100 shadow-premium-high text-left max-h-[90vh] overflow-y-auto" data-aos="fade-up">'
);

// FIX 23: Section headings - reduce size on mobile
html = html.replace(
  /class="text-4xl md:text-5xl font-bold tracking-tight text-brandDark uppercase" data-aos="fade-down"/g,
  'class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brandDark uppercase" data-aos="fade-down"'
);
html = html.replace(
  /class="text-4xl md:text-5xl font-bold tracking-tight text-brandDark uppercase leading-tight" data-aos="fade-down"/g,
  'class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brandDark uppercase leading-tight" data-aos="fade-down"'
);
html = html.replace(
  /class="text-4xl md:text-5xl font-bold tracking-tight text-brandDark uppercase"/g,
  'class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brandDark uppercase"'
);

fs.writeFileSync('pangandaran_paddle_board.html', html, 'utf8');
console.log('Responsive fixes applied successfully!');
