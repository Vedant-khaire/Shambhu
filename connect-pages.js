/**
 * connect-pages.js
 * Injects consistent navbar, mobile menu, WhatsApp float, footer,
 * and script tags into every Shambhu page.
 */
const fs = require('fs');
const path = require('path');

/* ── SHARED SNIPPETS ─────────────────────────────────────────── */

// Mark which page is "active" based on filename
function makeNav(activeFile) {
  const links = [
    { href: 'index.html',       label: 'Home' },
    { href: 'products.html',    label: 'Products' },
    { href: 'stamp.html',       label: 'Custom Stamp' },
    { href: 'distributor.html', label: 'Distributor' },
    { href: 'contact.html',     label: 'Contact' },
  ];
  const liItems = links.map(l =>
    `    <li><a href="${l.href}"${activeFile === l.href ? ' class="active"' : ''}>${l.label}</a></li>`
  ).join('\n');

  return `<nav id="navbar" class="scrolled">
  <a class="nav-logo" href="index.html">
    <svg class="nav-logo-svg" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="38" height="38" rx="8" fill="url(#lg)"/>
      <rect x="8" y="9" width="22" height="3" rx="1.5" fill="#0B1F3A"/>
      <rect x="8" y="14" width="22" height="14" rx="2" fill="#0B1F3A" opacity="0.85"/>
      <rect x="11" y="17" width="10" height="2" rx="1" fill="#C9A84C"/>
      <rect x="11" y="21" width="7" height="2" rx="1" fill="#C9A84C" opacity="0.6"/>
      <defs><linearGradient id="lg" x1="0" y1="0" x2="38" y2="38" gradientUnits="userSpaceOnUse">
        <stop stop-color="#C9A84C"/><stop offset="1" stop-color="#E4B040"/>
      </linearGradient></defs>
    </svg>
    <span class="nav-logo-text">Sham<span>bhu</span></span>
  </a>
  <ul class="nav-links">
${liItems}
    <li><a href="distributor.html" class="nav-cta">Distributor Login</a></li>
  </ul>
  <button class="hamburger" onclick="toggleMobile()" aria-label="Open menu">
    <span></span><span></span><span></span>
  </button>
</nav>`;
}

function makeMobileMenu(activeFile) {
  const links = [
    { href: 'index.html',       label: 'Home' },
    { href: 'products.html',    label: 'Products' },
    { href: 'stamp.html',       label: 'Custom Stamp' },
    { href: 'distributor.html', label: 'Distributor' },
    { href: 'about.html',       label: 'About' },
    { href: 'contact.html',     label: 'Contact' },
    { href: 'offers.html',      label: 'Offers' },
  ];
  const aItems = links.map(l =>
    `  <a href="${l.href}" onclick="toggleMobile()">${l.label}</a>`
  ).join('\n');

  return `<div class="mobile-menu" id="mobileMenu">
  <button class="mobile-close" onclick="toggleMobile()">✕</button>
${aItems}
</div>`;
}

const WA_FLOAT = `<a class="wa-float" href="https://wa.me/919960950007?text=Hi%20Shambhu%2C%20I%20want%20to%20enquire%20about%20your%20products!" target="_blank" title="Chat on WhatsApp" aria-label="WhatsApp">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
</a>`;

const FOOTER = `<footer>
  <div class="footer-grid">
    <div>
      <div class="footer-brand-name">Sham<span>bhu</span></div>
      <div class="footer-tagline">We Secure Your Importance</div>
      <div class="footer-desc">Khaire Industries — Premium office stationery manufacturer based in Narayangaon, Pune. Supplying quality files, folders &amp; custom stamps to offices, courts, schools and businesses across India.</div>
      <div class="footer-contact">
        <a href="tel:+919960950007">📞 +91 9960950007</a>
        <a href="https://wa.me/919960950007" target="_blank">💬 WhatsApp Us</a>
        <a href="mailto:khaireindustries@gmail.com">✉️ khaireindustries@gmail.com</a>
        <a href="https://www.instagram.com/khaireindustries.shambhu" target="_blank">📸 @khaireindustries.shambhu</a>
        <a href="#" style="cursor:default;pointer-events:none">📍 Pune Nashik Hwy, Narayangaon, Pune 410504</a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Products</h4>
      <ul>
        <li><a href="products.html">All Products</a></li>
        <li><a href="products.html">Box Files</a></li>
        <li><a href="products.html">Ring Binders</a></li>
        <li><a href="products.html">Spring Files</a></li>
        <li><a href="products.html">Eco Folders</a></li>
        <li><a href="stamp.html">Custom Stamps</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul>
        <li><a href="about.html">About Shambhu</a></li>
        <li><a href="distributor.html">Distributor Portal</a></li>
        <li><a href="offers.html">Current Offers</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Support</h4>
      <ul>
        <li><a href="faq.html">FAQ</a></li>
        <li><a href="tracking.html">Order Tracking</a></li>
        <li><a href="terms.html">Terms &amp; Privacy</a></li>
        <li><a href="https://wa.me/919960950007" target="_blank">WhatsApp Support</a></li>
        <li><a href="https://www.instagram.com/khaireindustries.shambhu" target="_blank">Instagram</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 Shambhu Files (Khaire Industries), Narayangaon, Pune, Maharashtra. All Rights Reserved.</p>
    <p class="footer-gstin">GSTIN: 27GEZPK8310G1ZX</p>
  </div>
</footer>`;

const SHARED_SCRIPT = `<script src="assets/js/main.js"></script>
<script>
  // Navbar scroll
  window.addEventListener('scroll', () => {
    const n = document.getElementById('navbar');
    if (n) n.classList.toggle('scrolled', window.scrollY > 40);
  });
  // Mobile menu
  function toggleMobile() {
    const m = document.getElementById('mobileMenu');
    if (m) m.classList.toggle('open');
  }
  // Scroll reveal
  const _obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => _obs.observe(el));
</script>`;

/* ── PAGE CONFIG ─────────────────────────────────────────────── */
// Each entry: filename, active nav link
const PAGES = [
  { file: 'products.html',      active: 'products.html' },
  { file: 'product-detail.html',active: 'products.html' },
  { file: 'stamp.html',         active: 'stamp.html' },
  { file: 'distributor.html',   active: 'distributor.html' },
  { file: 'about.html',         active: '' },
  { file: 'contact.html',       active: 'contact.html' },
  { file: 'faq.html',           active: '' },
  { file: 'terms.html',         active: '' },
  { file: 'offers.html',        active: '' },
  { file: 'tracking.html',      active: '' },
];

/* ── PATCH EACH PAGE ─────────────────────────────────────────── */
for (const { file, active } of PAGES) {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) { console.log('SKIP (not found): ' + file); continue; }

  let c = fs.readFileSync(filePath, 'utf-8');

  // 1. Replace existing <nav ...> ... </nav> with correct nav
  c = c.replace(/<nav[\s\S]*?<\/nav>/, makeNav(active));

  // 2. Remove any existing mobile-menu div
  c = c.replace(/<div class="mobile-menu"[\s\S]*?<\/div>\s*\n?/, '');

  // 3. Inject mobile menu right after </nav>
  c = c.replace(/<\/nav>/, '</nav>\n\n' + makeMobileMenu(active));

  // 4. Remove old WA float if present (any page)
  c = c.replace(/<a class="wa-float"[\s\S]*?<\/a>\s*\n?/, '');

  // 5. Remove old SHARED_SCRIPT blocks (inline observer scripts added by build.js)
  c = c.replace(/<script>\s*const observer[\s\S]*?<\/script>\s*\n?/g, '');
  c = c.replace(/<script>\s*const _obs[\s\S]*?<\/script>\s*\n?/g, '');
  // Remove old inline navbar scroll handlers
  c = c.replace(/<script>\s*window\.addEventListener\('scroll'[\s\S]*?<\/script>\s*\n?/g, '');

  // 6. Remove old footer
  c = c.replace(/<footer>[\s\S]*?<\/footer>\s*\n?/, '');

  // 7. Inject WA float + footer + shared script before </body>
  c = c.replace(/<\/body>/, '\n' + WA_FLOAT + '\n\n' + FOOTER + '\n\n' + SHARED_SCRIPT + '\n</body>');

  // 8. Remove duplicate <script src="assets/js/main.js"> if any (keep only 1)
  const mainJsCount = (c.match(/src="js\/main\.js"/g) || []).length;
  if (mainJsCount > 1) {
    // Remove first occurrence (leave the one inside SHARED_SCRIPT)
    c = c.replace('<script src="assets/js/main.js"></script>', '');
  }

  fs.writeFileSync(filePath, c);
  console.log('✅ ' + file);
}

console.log('\n🎉 All pages connected! Nav + mobile menu + WA float + footer standardised.');
