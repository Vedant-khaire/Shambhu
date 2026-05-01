/**
 * inject-responsive.js
 * Adds <link rel="stylesheet" href="assets/css/responsive.css"> to every HTML page
 * and improves the auth/login error UX.
 */
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const HTML_FILES = fs.readdirSync(DIR).filter(f => f.endsWith('.html'));

// The responsive link to inject (after global.css link)
const RESP_LINK = '<link rel="stylesheet" href="assets/css/responsive.css">';
const VIEWPORT  = '<meta name="viewport" content="width=device-width, initial-scale=1.0">';

let patched = 0;
for (const file of HTML_FILES) {
  const fp = path.join(DIR, file);
  let c = fs.readFileSync(fp, 'utf-8');

  // Skip if already has responsive.css
  if (c.includes('responsive.css')) {
    console.log('SKIP (already has responsive.css): ' + file);
    continue;
  }

  // Make sure viewport meta exists
  if (!c.includes('name="viewport"')) {
    c = c.replace('<head>', '<head>\n<meta name="viewport" content="width=device-width, initial-scale=1.0">');
  }

  // Inject after global.css link, or before </head> if no global.css
  if (c.includes('css/global.css">')) {
    c = c.replace('css/global.css">', 'css/global.css">\n<link rel="stylesheet" href="assets/css/responsive.css">');
  } else if (c.includes('</head>')) {
    c = c.replace('</head>', '<link rel="stylesheet" href="assets/css/responsive.css">\n</head>');
  }

  fs.writeFileSync(fp, c);
  console.log('✅ Patched: ' + file);
  patched++;
}

console.log('\nDone. Patched ' + patched + ' files with responsive.css');
