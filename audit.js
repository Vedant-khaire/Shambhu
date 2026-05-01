const fs = require('fs');
const files = ['index.html','products.html','product-detail.html','stamp.html','distributor.html','about.html','contact.html','faq.html','terms.html','offers.html','tracking.html','admin.html'];
files.forEach(f => {
  try {
    const c = fs.readFileSync(f, 'utf-8');
    const hasNav = c.includes('nav-links');
    const hasMobile = c.includes('mobile-menu');
    const hasWA = c.includes('wa-float');
    const hasFooter = c.includes('<footer>');
    const hasMainJs = c.includes('assets/js/main.js');
    const hasReveal = c.includes('revealObserver') || c.includes('IntersectionObserver');
    console.log(f + ' | nav=' + hasNav + ' | mobile=' + hasMobile + ' | wa=' + hasWA + ' | footer=' + hasFooter + ' | main.js=' + hasMainJs + ' | reveal=' + hasReveal);
  } catch(e) { console.log(f + ': NOT FOUND'); }
});
