const fs = require('fs');
const path = require('path');

const placeholders = [
  {
    filePath: 'public/images/hero-campus.svg',
    width: 1920,
    height: 1080,
    title: 'DPS Pali District — Campus Facade',
    sub: 'Main Building & Entrance Gate (1920x1080)',
    bg1: '#064E3B',
    bg2: '#022c22'
  },
  {
    filePath: 'public/images/principal.svg',
    width: 400,
    height: 400,
    title: 'Principal Portrait',
    sub: 'DPS Pali District (400x400)',
    bg1: '#0A5C36',
    bg2: '#064E3B'
  },
  {
    filePath: 'public/images/academics-banner.svg',
    width: 1400,
    height: 400,
    title: 'Academic Life & Assembly',
    sub: 'Engaged Learning Environment (1400x400)',
    bg1: '#064E3B',
    bg2: '#0D6B40'
  },
  {
    filePath: 'public/images/admissions-welcome.svg',
    width: 800,
    height: 500,
    title: 'Campus Tour & Admissions',
    sub: 'Admissions Desk & Counseling (800x500)',
    bg1: '#0A5C36',
    bg2: '#134e4a'
  },
  // School Life
  {
    filePath: 'public/images/school-life/classroom.svg',
    width: 800,
    height: 600,
    title: 'Classroom Experience',
    sub: 'Interactive Learning in AC Classrooms (800x600)',
    bg1: '#047857',
    bg2: '#064E3B'
  },
  {
    filePath: 'public/images/school-life/lab.svg',
    width: 800,
    height: 600,
    title: 'Science & Computer Lab',
    sub: 'Practical Experiments & Digital Skills (800x600)',
    bg1: '#0f766e',
    bg2: '#134e4a'
  },
  {
    filePath: 'public/images/school-life/sports.svg',
    width: 800,
    height: 600,
    title: 'Athletics & Physical Education',
    sub: 'Sports Ground & Fitness Training (800x600)',
    bg1: '#b45309',
    bg2: '#78350f'
  },
  // Facilities
  {
    filePath: 'public/images/facilities/classroom.svg',
    width: 800,
    height: 533,
    title: 'AC Classrooms',
    sub: 'Climate-Controlled Modern Classrooms (800x533)',
    bg1: '#065f46',
    bg2: '#064e3b'
  },
  {
    filePath: 'public/images/facilities/lab.svg',
    width: 800,
    height: 533,
    title: 'Science & Computer Lab',
    sub: 'Dedicated Physics, Chemistry, Biology & IT Labs (800x533)',
    bg1: '#0e7490',
    bg2: '#164e63'
  },
  {
    filePath: 'public/images/facilities/library.svg',
    width: 800,
    height: 533,
    title: 'Library & Media Centre',
    sub: 'Curated 5,000+ Books & Digital Catalog (800x533)',
    bg1: '#1e3a8a',
    bg2: '#172554'
  },
  {
    filePath: 'public/images/facilities/sports.svg',
    width: 800,
    height: 533,
    title: 'Sports Complex',
    sub: 'Multi-Sport Turf & Outdoor Grounds (800x533)',
    bg1: '#9a3412',
    bg2: '#7c2d12'
  },
  {
    filePath: 'public/images/facilities/transport.svg',
    width: 800,
    height: 533,
    title: 'GPS-Enabled Transport',
    sub: 'Safe Commute Covering Major Pali Routes (800x533)',
    bg1: '#047857',
    bg2: '#064e3b'
  },
  {
    filePath: 'public/images/facilities/arts.svg',
    width: 800,
    height: 533,
    title: 'Activity & Arts Hall',
    sub: 'Music, Dance, Theatre & Creative Expression (800x533)',
    bg1: '#6b21a8',
    bg2: '#581c87'
  },
  {
    filePath: 'public/images/facilities/cafeteria.svg',
    width: 800,
    height: 533,
    title: 'Hygienic Dining Area',
    sub: 'Nutritious & Supervised Meals (800x533)',
    bg1: '#b45309',
    bg2: '#78350f'
  },
  {
    filePath: 'public/images/facilities/security.svg',
    width: 800,
    height: 533,
    title: 'Campus Safety & Surveillance',
    sub: '24/7 CCTV & Controlled Access (800x533)',
    bg1: '#334155',
    bg2: '#0f172a'
  },
  // Gallery
  {
    filePath: 'public/images/gallery/annual-day.svg',
    width: 800,
    height: 600,
    title: 'Annual Day Celebrations',
    sub: 'Theatrical Performances & Stage Honors (800x600)',
    bg1: '#7c2d12',
    bg2: '#431407'
  },
  {
    filePath: 'public/images/gallery/sports-day.svg',
    width: 800,
    height: 600,
    title: 'Annual Athletic Meet',
    sub: 'Track & Field Sports Competitions (800x600)',
    bg1: '#92400e',
    bg2: '#451a03'
  },
  {
    filePath: 'public/images/gallery/science-exhibition.svg',
    width: 800,
    height: 600,
    title: 'Science & Innovation Fair',
    sub: 'Student Working Models & Experiments (800x600)',
    bg1: '#0f766e',
    bg2: '#134e4a'
  },
  {
    filePath: 'public/images/gallery/republic-day.svg',
    width: 800,
    height: 600,
    title: 'National Festivals',
    sub: 'Flag Hoisting & Patriotic Assemblies (800x600)',
    bg1: '#065f46',
    bg2: '#022c22'
  },
  {
    filePath: 'public/images/gallery/computer-lab.svg',
    width: 800,
    height: 600,
    title: 'Digital & Computer Lab',
    sub: 'Hands-on IT & Programming Sessions (800x600)',
    bg1: '#1e40af',
    bg2: '#1e1b4b'
  },
  {
    filePath: 'public/images/gallery/campus-view.svg',
    width: 800,
    height: 600,
    title: 'Lush Campus Grounds',
    sub: 'Sanpa, Pali District Campus View (800x600)',
    bg1: '#064e3b',
    bg2: '#022c22'
  },
];

function generateSvg({ width, height, title, sub, bg1, bg2 }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" fill="none">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bg1}" />
      <stop offset="100%" stop-color="${bg2}" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" stroke-width="1" stroke-opacity="0.08" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#grad)" />
  <rect width="${width}" height="${height}" fill="url(#grid)" />

  <!-- Frame Border -->
  <rect x="20" y="20" width="${width - 40}" height="${height - 40}" rx="16" fill="none" stroke="#ffffff" stroke-width="2" stroke-opacity="0.15" stroke-dasharray="8 8" />

  <!-- Camera / Landscape Icon -->
  <g transform="translate(${width / 2}, ${height / 2 - 35})">
    <circle cx="0" cy="0" r="38" fill="#ffffff" fill-opacity="0.12" />
    <circle cx="0" cy="0" r="30" stroke="#ffffff" stroke-width="2" stroke-opacity="0.4" fill="none" />
    <path d="M -16 6 L 16 6 L 12 -12 L -12 -12 Z" fill="none" stroke="#ffffff" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" />
    <circle cx="0" cy="-3" r="5" fill="#D97706" />
    <circle cx="10" cy="-8" r="1.5" fill="#ffffff" />
  </g>

  <!-- Title -->
  <text x="${width / 2}" y="${height / 2 + 35}" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="${Math.max(16, Math.min(26, Math.floor(width / 35)))}" fill="#ffffff" letter-spacing="0.5">
    ${title}
  </text>

  <!-- Subtitle -->
  <text x="${width / 2}" y="${height / 2 + 65}" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="500" font-size="${Math.max(12, Math.min(15, Math.floor(width / 55)))}" fill="#D1FAE5" opacity="0.85">
    ${sub}
  </text>

  <!-- Watermark badge -->
  <rect x="${width / 2 - 80}" y="${height - 55}" width="160" height="26" rx="13" fill="#000000" fill-opacity="0.3" stroke="#ffffff" stroke-width="1" stroke-opacity="0.2" />
  <text x="${width / 2}" y="${height - 38}" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="11" fill="#FCD34D" letter-spacing="1">
    DPS PALI DISTRICT
  </text>
</svg>`;
}

placeholders.forEach((item) => {
  const fullPath = path.join(__dirname, '..', item.filePath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, generateSvg(item), 'utf8');
  console.log(`Generated: ${item.filePath}`);
});

console.log('All placeholder SVGs generated successfully!');
