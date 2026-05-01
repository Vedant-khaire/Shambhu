const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let n = 0;
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf-8');
  const b = c;
  c = c.replace(/ style="padding-top: 140px;"/g, '');
  if (c !== b) { fs.writeFileSync(f, c); console.log('cleaned: ' + f); n++; }
});
console.log('Done, cleaned ' + n + ' files');
