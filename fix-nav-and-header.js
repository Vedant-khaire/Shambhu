/**
 * fix-nav-and-header.js
 * 1. Remove duplicate "Distributor" link from nav — keep only "Distributor Login" CTA
 * 2. Fix page-header top padding so it doesn't hide behind the fixed navbar
 */
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const HTML_FILES = fs.readdirSync(DIR).filter(f => f.endsWith('.html'));

for (const file of HTML_FILES) {
  const fp = path.join(DIR, file);
  let c = fs.readFileSync(fp, 'utf-8');
  let changed = false;

  // ── FIX 1: Remove the standalone Distributor nav-link (keep only the Login CTA) ──
  // Matches: <li><a href="distributor.html">Distributor</a></li>   (no class)
  const before = c;
  c = c.replace(
    /\s*<li><a href="distributor\.html">Distributor<\/a><\/li>/g,
    ''
  );
  if (c !== before) { changed = true; console.log('  → Removed dup Distributor nav: ' + file); }

  // ── FIX 2: Rename the CTA to simply "Distributor" so it's clear ──
  // We still want ONE distributor entry — the styled CTA button
  const before2 = c;
  c = c.replace(
    /(<a href="distributor\.html" class="nav-cta">)Distributor Login(<\/a>)/g,
    '$1Distributor Login$2'
  );
  // (No text change needed — name stays "Distributor Login", just deduplicated)

  // ── FIX 3: Fix page-header padding so title doesn't overlap the fixed navbar ──
  // Targets <header class="page-header" ...> by adding inline padding-top if missing
  // Also target any section that starts the page content without a page-header
  const before3 = c;

  // products.html, about.html, faq.html etc have .page-header
  // Make sure page-header has padding-top >= 140px
  c = c.replace(
    /(<header class="page-header"[^>]*>)/g,
    (match) => {
      // Add style if not already has padding-top
      if (match.includes('style=')) return match; // skip if already styled
      return match.replace('>', ' style="padding-top: 140px;">');
    }
  );

  if (c !== before3) { changed = true; console.log('  → Fixed page-header padding: ' + file); }

  if (changed) {
    fs.writeFileSync(fp, c);
    console.log('✅ Fixed: ' + file);
  } else {
    console.log('— No changes: ' + file);
  }
}

console.log('\n✅ All done!');
