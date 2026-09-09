const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dirImages = path.join(__dirname, '../public/images');
const dirProjects = path.join(__dirname, '../public/projects');

if (!fs.existsSync(dirImages)) fs.mkdirSync(dirImages, { recursive: true });
if (!fs.existsSync(dirProjects)) fs.mkdirSync(dirProjects, { recursive: true });

async function generateProfile() {
  const svg = `
  <svg width="800" height="1000" viewBox="0 0 800 1000" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="1000" fill="#E8E6E0"/>
    <!-- Subtle Grid Lines -->
    <line x1="100" y1="0" x2="100" y2="1000" stroke="#D5D3CC" stroke-width="1"/>
    <line x1="700" y1="0" x2="700" y2="1000" stroke="#D5D3CC" stroke-width="1"/>
    <line x1="0" y1="150" x2="800" y2="150" stroke="#D5D3CC" stroke-width="1"/>
    <line x1="0" y1="850" x2="800" y2="850" stroke="#D5D3CC" stroke-width="1"/>
    
    <!-- Red Accent Box -->
    <rect x="100" y="150" width="12" height="12" fill="#E6392F"/>
    
    <!-- Editorial Text Block -->
    <text x="130" y="162" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" letter-spacing="3" fill="#111111">PROFILE PORTRAIT</text>
    
    <!-- Minimal Silhouette / Geometric Form -->
    <circle cx="400" cy="420" r="140" fill="#111111"/>
    <path d="M 220 780 C 220 580, 580 580, 580 780 Z" fill="#111111"/>
    
    <!-- Swiss Editorial Overlay Text -->
    <text x="100" y="810" font-family="Helvetica, Arial, sans-serif" font-size="32" font-weight="900" letter-spacing="-1" fill="#111111">DAFFA ABDUL FATAH</text>
    <text x="100" y="835" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="600" letter-spacing="2" fill="#666666">FULLSTACK DEVELOPER</text>
  </svg>
  `;

  await sharp(Buffer.from(svg))
    .webp({ quality: 90 })
    .toFile(path.join(dirImages, 'profile.webp'));
  console.log('Generated profile.webp');
}

async function generateProject(filename, title, subtitle, tag) {
  const svg = `
  <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="800" fill="#EAE8E1"/>
    
    <!-- Grid borders -->
    <rect x="60" y="60" width="1080" height="680" fill="none" stroke="#D4D4D4" stroke-width="2"/>
    <line x1="60" y1="160" x2="1140" y2="160" stroke="#D4D4D4" stroke-width="2"/>
    <line x1="400" y1="160" x2="400" y2="740" stroke="#D4D4D4" stroke-width="2"/>
    
    <!-- Header -->
    <rect x="80" y="95" width="14" height="14" fill="#E6392F"/>
    <text x="110" y="108" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" letter-spacing="3" fill="#111111">${tag}</text>
    <text x="1140" y="108" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" letter-spacing="2" fill="#666666" text-anchor="end">SWISS EDITORIAL SYSTEM</text>
    
    <!-- Left Column content -->
    <text x="100" y="240" font-family="Helvetica, Arial, sans-serif" font-size="36" font-weight="900" letter-spacing="-1" fill="#111111">${title}</text>
    <text x="100" y="275" font-family="Helvetica, Arial, sans-serif" font-size="16" font-weight="600" letter-spacing="1" fill="#666666">${subtitle}</text>
    
    <rect x="100" y="320" width="240" height="40" fill="#111111"/>
    <text x="120" y="345" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" letter-spacing="2" fill="#F4F3EF">CONCEPTUAL INTERFACE</text>
    
    <!-- Wireframe Dashboard Mockup -->
    <rect x="440" y="200" width="660" height="500" fill="#F4F3EF" stroke="#111111" stroke-width="2"/>
    <line x1="440" y1="250" x2="1100" y2="250" stroke="#111111" stroke-width="2"/>
    <circle cx="470" cy="225" r="6" fill="#E6392F"/>
    <circle cx="490" cy="225" r="6" fill="#111111"/>
    <circle cx="510" cy="225" r="6" fill="#D4D4D4"/>
    
    <rect x="480" y="290" width="260" height="120" fill="#111111"/>
    <text x="500" y="340" font-family="Helvetica, Arial, sans-serif" font-size="28" font-weight="900" fill="#F4F3EF">89.4%</text>
    <text x="500" y="370" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" letter-spacing="1" fill="#666666">PERFORMANCE INDEX</text>

    <rect x="760" y="290" width="300" height="120" fill="#EAE8E1" stroke="#111111" stroke-width="1.5"/>
    <rect x="480" y="440" width="580" height="220" fill="#EAE8E1" stroke="#111111" stroke-width="1.5"/>
    <line x1="480" y1="550" x2="1060" y2="550" stroke="#D4D4D4" stroke-width="1"/>
  </svg>
  `;

  await sharp(Buffer.from(svg))
    .webp({ quality: 90 })
    .toFile(path.join(dirProjects, filename));
  console.log(`Generated ${filename}`);
}

async function run() {
  await generateProfile();
  await generateProject('edgar-space.webp', 'Edgar Space', 'E-commerce Architecture', '01 / SELECTED WORK');
  await generateProject('nuna-florist.webp', 'Nuna Florist', 'Productivity Analytics', '02 / SELECTED WORK');
  await generateProject('kares-studio.webp', 'Kares Studio', 'Fashion E-commerce Showcase', '03 / SELECTED WORK');
}

run().catch(console.error);
