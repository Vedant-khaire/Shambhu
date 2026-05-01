const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf-8');

// 1. Extract and replace <style>
const styleMatch = indexHtml.match(/<style>([\s\S]*?)<\/style>/i);
if (styleMatch) {
  const cssContent = styleMatch[1].trim();
  fs.writeFileSync(path.join(__dirname, 'css', 'global.css'), cssContent);
  indexHtml = indexHtml.replace(styleMatch[0], '<link rel="stylesheet" href="assets/css/global.css">');
  console.log('✅ Extracted CSS to css/global.css');
} else {
  console.log('⚠️ No <style> tag found or already extracted.');
}

// 2. Extract and replace <script>
const scriptMatch = indexHtml.match(/<script>([\s\S]*?)<\/script>/i);
if (scriptMatch) {
  const jsContent = scriptMatch[1].trim();
  fs.writeFileSync(path.join(__dirname, 'js', 'main.js'), jsContent);
  indexHtml = indexHtml.replace(scriptMatch[0], '<script src="assets/js/main.js"></script>');
  console.log('✅ Extracted JS to js/main.js');
} else {
  console.log('⚠️ No <script> tag found or already extracted.');
}

// 3. Save index.html
fs.writeFileSync(indexPath, indexHtml);
console.log('✅ Updated index.html');
