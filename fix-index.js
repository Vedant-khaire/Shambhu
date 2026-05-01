// fix-index.js — fix nav links + real info in index.html
const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf-8');

// Nav links (desktop)
c = c.replace('href="#products">Products', 'href="products.html">Products');
c = c.replace('href="#stamp">Custom Stamp', 'href="stamp.html">Custom Stamp');
c = c.replace('href="#distributor">Distributor<', 'href="distributor.html">Distributor<');
c = c.replace('href="#distributor" class="nav-btn"', 'href="distributor.html" class="nav-btn"');
c = c.replace('href="#contact">Contact<', 'href="contact.html">Contact<');

// Mobile menu
c = c.replace('href="#products" onclick', 'href="products.html" onclick');
c = c.replace('href="#stamp" onclick', 'href="stamp.html" onclick');
c = c.replace('href="#distributor" onclick', 'href="distributor.html" onclick');
c = c.replace('href="#contact" onclick', 'href="contact.html" onclick');

// Tagline
c = c.replace(/We Secure Your Documents/g, 'We Secure Your Importance');

// Footer company links
c = c.replace('href="#">About Shambhu', 'href="about.html">About Shambhu');
c = c.replace('href="#">Careers', 'href="about.html">About Us');

// Footer support links
c = c.replace('href="#">Shipping Policy', 'href="terms.html">Terms & Privacy');
c = c.replace('href="#">Return Policy', 'href="faq.html">FAQ');
c = c.replace('href="#">Privacy Policy', 'href="tracking.html">Order Tracking');
c = c.replace('href="#">Terms of Service', 'href="https://www.instagram.com/khaireindustries.shambhu" target="_blank">Instagram');

// GST + copyright
c = c.replace('GST: 27AABCS1234A1ZX | MSME Registered', 'GSTIN: 27GEZPK8310G1ZX | Khaire Industries, Narayangaon, Pune 410504');

// Contact section address
c = c.replace('href="#">📍 Pune, Maharashtra, India', 'href="#" style="cursor:default">📍 Pune Nashik Highway, Narayangaon, Pune 410504');

fs.writeFileSync('index.html', c);
console.log('index.html fixed successfully');
