// fix-info.js — Fixes all wrong info across all HTML files
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const files = fs.readdirSync(DIR).filter(f => f.endsWith('.html'));

const replacements = [
  // Phone number
  [/\+91 98765 43210/g, '+91 9960950007'],
  [/919876543210/g, '919960950007'],
  [/9876543210/g, '9960950007'],
  // Email
  [/info@shambhu\.in/g, 'khaireindustries@gmail.com'],
  // GST
  [/27AABCS1234A1ZX/g, '27GEZPK8310G1ZX'],
  [/27AABCU9603R1ZX/g, '27GEZPK8310G1ZX'],
  // Tagline
  [/We Secure Your Documents/g, 'We Secure Your Importance'],
  // Copyright year
  [/© 2025 Shambhu/g, '© 2026 Shambhu'],
];

let totalFixes = 0;
for (const file of files) {
  const filePath = path.join(DIR, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;
  for (const [pattern, replacement] of replacements) {
    const before = content;
    content = content.replace(pattern, replacement);
    if (content !== before) { changed = true; totalFixes++; }
  }
  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${file}`);
  }
}
console.log(`\n🎉 Done. Applied ${totalFixes} fixes across ${files.length} files.`);
