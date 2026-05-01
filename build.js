const fs = require('fs');
const path = require('path');

// Read existing index.html to extract the CSS and Navbar and Footer
const indexPath = path.join(__dirname, 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf-8');

// Extract everything from <!DOCTYPE html> to </nav>
const headAndNavMatch = indexHtml.match(/<!DOCTYPE html>[\s\S]*?<\/nav>/i);
const headAndNav = headAndNavMatch ? headAndNavMatch[0] : '';

// Extract mobile menu
const mobileMenuMatch = indexHtml.match(/<div class="mobile-menu"[\s\S]*?<\/div>/i);
const mobileMenu = mobileMenuMatch ? mobileMenuMatch[0] : '';

// Extract Footer to the end
const footerMatch = indexHtml.match(/<footer>[\s\S]*?<\/html>/i);
let footer = footerMatch ? footerMatch[0] : '</body></html>';

// For the separate pages, we need to adjust the nav links from `#hash` to `page.html`
const globalHeader = headAndNav
    .replace(/href="#products"/g, 'href="products.html"')
    .replace(/href="#gallery"/g, 'href="index.html#gallery"')
    .replace(/href="#stamp"/g, 'href="stamp.html"')
    .replace(/href="#distributor"/g, 'href="distributor.html"')
    .replace(/href="#contact"/g, 'href="contact.html"');

const globalMobileMenu = mobileMenu
    .replace(/href="#products"/g, 'href="products.html"')
    .replace(/href="#gallery"/g, 'href="index.html#gallery"')
    .replace(/href="#stamp"/g, 'href="stamp.html"')
    .replace(/href="#distributor"/g, 'href="distributor.html"')
    .replace(/href="#contact"/g, 'href="contact.html"');

const globalFooter = footer
    .replace(/href="#products"/g, 'href="products.html"')
    .replace(/href="#gallery"/g, 'href="index.html#gallery"')
    .replace(/href="#stamp"/g, 'href="stamp.html"')
    .replace(/href="#distributor"/g, 'href="distributor.html"')
    .replace(/href="#contact"/g, 'href="contact.html"');


// Helper to build a page
function buildPage(filename, pageTitle, contentHtml) {
    // Wrap content with proper padding since it's under fixed navbar
    const content = `
    <div style="padding-top: 100px; min-height: 80vh;">
      ${contentHtml}
    </div>
  `;

    const html = `${globalHeader}\n${globalMobileMenu}\n${content}\n${globalFooter}`;
    fs.writeFileSync(path.join(__dirname, filename), html);
    console.log(`✅ Built ${filename}`);
}

// 1. Products Page
const productsContent = `
<section class="products-section" style="padding-top: 40px;">
  <div class="products-header">
    <div>
      <div class="section-label reveal">Our Range</div>
      <h2 class="section-title reveal reveal-delay-1">All Products</h2>
    </div>
  </div>
  <div class="products-grid" id="productsGrid">
    <div class="product-card reveal">
      <div class="product-img-wrap">
        <div class="product-img-icon">📦</div>
        <div class="product-featured-badge">★ Featured</div>
      </div>
      <div class="product-info">
        <div class="product-cat">Box Files</div>
        <div class="product-name">Lamination Box File</div>
        <div class="product-desc">Premium laminated cardboard box file with steel clip mechanism. Ideal for office document storage.</div>
        <div class="product-footer">
          <div class="product-price">₹120 <small>per piece · Min 50 pcs</small></div>
          <a href="product-detail.html" class="btn-enquire" style="text-decoration:none">View</a>
        </div>
      </div>
    </div>
    
    <div class="product-card reveal">
      <div class="product-img-wrap">
        <div class="product-img-icon">🗂️</div>
      </div>
      <div class="product-info">
        <div class="product-cat">Folders</div>
        <div class="product-name">Two Flap File</div>
        <div class="product-desc">Two-flap document holding folder. Keeps papers neat without punching or clipping. A4 size.</div>
        <div class="product-footer">
          <div class="product-price">₹30 <small>per piece · Min 100 pcs</small></div>
          <a href="product-detail.html" class="btn-enquire" style="text-decoration:none">View</a>
        </div>
      </div>
    </div>
    
    <div class="product-card reveal">
      <div class="product-img-wrap">
        <div class="product-img-icon">🌿</div>
      </div>
      <div class="product-info">
        <div class="product-cat">Eco Folders</div>
        <div class="product-name">Jute Folder</div>
        <div class="product-desc">Eco-friendly jute material folder with custom printing option. Popular with law firms and corporates.</div>
        <div class="product-footer">
          <div class="product-price">₹85 <small>per piece · Min 50 pcs</small></div>
          <a href="product-detail.html" class="btn-enquire" style="text-decoration:none">View</a>
        </div>
      </div>
    </div>
  </div>
</section>
`;

// 2. Product Detail Page
const productDetailContent = `
<section style="padding-top: 40px; padding-bottom: 60px;">
  <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start;">
    <div style="background: linear-gradient(135deg, var(--navy-mid), var(--navy-light)); border-radius: 24px; padding: 60px; text-align: center; border: 1px solid var(--border);">
      <div style="font-size: 8rem;">📦</div>
    </div>
    <div>
      <div class="section-label reveal">Box Files</div>
      <h1 class="hero-heading" style="font-size: 2.5rem; margin-bottom: 16px;">Lamination Box File</h1>
      <p style="color: rgba(255,255,255,0.6); line-height: 1.6; margin-bottom: 32px; font-size: 1.1rem;">
        Premium laminated cardboard box file with heavy-duty steel clip mechanism. Ideal for long-term office document storage. Available in multiple vibrant corporate colors. Water-resistant outer cover.
      </p>
      
      <div style="display: flex; gap: 24px; margin-bottom: 32px; padding: 24px; background: rgba(200,149,26,0.05); border: 1px solid rgba(200,149,26,0.2); border-radius: 16px;">
        <div>
          <div style="font-size: 0.8rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Retail Price</div>
          <div style="font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 700; color: var(--gold-light);">₹120</div>
        </div>
        <div style="width: 1px; background: rgba(255,255,255,0.1);"></div>
        <div>
          <div style="font-size: 0.8rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Wholesale (Distributor)</div>
          <div style="font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 700; color: rgba(255,255,255,0.5);">₹75 <span style="font-size: 0.9rem; color: var(--gold); font-family: 'DM Sans', sans-serif;">Min 50 pcs</span></div>
        </div>
      </div>
      
      <div style="margin-bottom: 32px;">
        <h4 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.5); margin-bottom: 12px;">Available Colors</h4>
        <div style="display: flex; gap: 12px;">
          <span style="padding: 6px 16px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.2); font-size: 0.85rem;">Navy Blue</span>
          <span style="padding: 6px 16px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.2); font-size: 0.85rem;">Black</span>
          <span style="padding: 6px 16px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.2); font-size: 0.85rem;">Maroon</span>
          <span style="padding: 6px 16px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.2); font-size: 0.85rem;">Green</span>
        </div>
      </div>
      
      <div style="display: flex; gap: 16px;">
        <a href="https://wa.me/919876543210" target="_blank" class="btn-primary" style="flex: 1; justify-content: center;">📲 Order on WhatsApp</a>
        <a href="distributor.html" class="btn-secondary" style="flex: 1; justify-content: center;">📦 Buy Wholesale</a>
      </div>
    </div>
  </div>
</section>
`;

// 3. Custom Stamp Order Page
const stampContent = `
<section class="stamp-form-section" style="padding-top: 40px; background: transparent;">
  <div class="section-label reveal" style="justify-content:center">Place Order</div>
  <h2 class="section-title reveal reveal-delay-1" style="text-align:center">Order Your Custom Stamp</h2>
  
  <div class="form-card reveal reveal-delay-2" style="margin-top: 32px;">
    <form>
      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">Full Name *</label>
          <input class="form-input" type="text" placeholder="Rajesh Kumar" required>
        </div>
        <div class="form-group">
          <label class="form-label">Mobile Number *</label>
          <input class="form-input" type="tel" placeholder="+91 98765 43210" required>
        </div>
        <div class="form-group full">
          <label class="form-label">Delivery Address *</label>
          <textarea class="form-textarea" placeholder="House/Office No., Street, Area, City, PIN Code" required></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Stamp Size *</label>
          <select class="form-select" required>
            <option value="small">Small 30×30mm — ₹299</option>
            <option value="medium">Medium 40×60mm — ₹349</option>
            <option value="large">Large 50×80mm — ₹399</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Quantity</label>
          <input class="form-input" type="number" value="1">
        </div>
        <div class="form-group full">
          <label class="form-label">Upload Your Design *</label>
          <div class="file-upload-area">
            <div class="upload-icon">📎</div>
            <p><strong>Click to upload</strong> your logo or design</p>
          </div>
        </div>
      </div>
      <button type="button" class="form-submit" onclick="alert('Order request initiated! We will redirect you to WhatsApp.')">Place Stamp Order 🎯</button>
    </form>
  </div>
</section>
`;

// 4. Distributor Portal Page
const distributorContent = `
<section class="distributor-section" style="padding-top: 40px; background: transparent;">
  <div class="distributor-layout" style="max-width: 1000px; margin: 0 auto; grid-template-columns: 1fr;">
    <div style="text-align: center; margin-bottom: 40px;">
      <div class="section-label reveal" style="justify-content:center">Wholesale Portal</div>
      <h2 class="section-title reveal reveal-delay-1">Distributor Login</h2>
      <p class="section-sub reveal reveal-delay-2" style="margin: 0 auto;">Access exclusive wholesale pricing, track your bulk orders, and manage credit facilities.</p>
    </div>
    
    <div class="login-card reveal reveal-delay-2" style="max-width: 500px; margin: 0 auto; width: 100%;">
      <form class="login-form">
        <div class="form-group">
          <label class="form-label">Email Address / Distributor ID</label>
          <input class="form-input" type="email" placeholder="distributor@example.com" required>
        </div>
        <div class="form-group">
          <label class="form-label">Password</label>
          <input class="form-input" type="password" placeholder="••••••••" required>
        </div>
        <button type="button" class="form-submit" style="margin-top:24px" onclick="window.location.href='admin.html'">Login to Portal</button>
      </form>
    </div>
  </div>
</section>
`;

// 5. About Page
const aboutContent = `
<section style="padding-top: 40px; max-width: 1000px; margin: 0 auto;">
  <div class="section-label reveal">Our Story</div>
  <h2 class="section-title reveal reveal-delay-1">Crafting Quality for Decades</h2>
  
  <div style="margin-top: 40px; line-height: 1.8; color: rgba(255,255,255,0.7); font-size: 1.1rem;" class="reveal reveal-delay-2">
    <p style="margin-bottom: 24px;">Established in Pune, Maharashtra, <strong>Shambhu Files</strong> has been a trusted name in manufacturing premium office filing solutions. Our journey began with a simple mission: to organize India's offices, courts, and schools with durable, high-quality products.</p>
    
    <p style="margin-bottom: 24px;">We pride ourselves on using top-grade raw materials, ensuring that every Box File, Ring Binder, and Spring File we produce meets stringent quality standards. From humble beginnings, our manufacturing unit has grown to supply products Pan-India.</p>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 32px; margin: 60px 0; text-align: center;">
      <div style="background: rgba(255,255,255,0.03); padding: 32px; border-radius: 16px; border: 1px solid var(--border);">
        <div style="font-size: 3rem; margin-bottom: 16px; color: var(--gold);">🏭</div>
        <h3 style="font-family: 'Playfair Display', serif; font-size: 1.4rem; margin-bottom: 8px;">State of the Art</h3>
        <p style="font-size: 0.9rem; color: rgba(255,255,255,0.5);">Modern manufacturing facility in Pune.</p>
      </div>
      <div style="background: rgba(255,255,255,0.03); padding: 32px; border-radius: 16px; border: 1px solid var(--border);">
        <div style="font-size: 3rem; margin-bottom: 16px; color: var(--gold);">🚚</div>
        <h3 style="font-family: 'Playfair Display', serif; font-size: 1.4rem; margin-bottom: 8px;">Pan-India Reach</h3>
        <p style="font-size: 0.9rem; color: rgba(255,255,255,0.5);">Delivering to all 28 states and 8 UTs.</p>
      </div>
      <div style="background: rgba(255,255,255,0.03); padding: 32px; border-radius: 16px; border: 1px solid var(--border);">
        <div style="font-size: 3rem; margin-bottom: 16px; color: var(--gold);">🤝</div>
        <h3 style="font-family: 'Playfair Display', serif; font-size: 1.4rem; margin-bottom: 8px;">Trusted Partner</h3>
        <p style="font-size: 0.9rem; color: rgba(255,255,255,0.5);">Preferred by top law firms & corporates.</p>
      </div>
    </div>
  </div>
</section>
`;

// 6. Contact Page
const contactContent = `
<section style="padding-top: 40px; max-width: 1200px; margin: 0 auto;">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start">
    <div>
      <div class="section-label reveal">Get in Touch</div>
      <h2 class="section-title reveal reveal-delay-1">Contact Shambhu</h2>
      <p class="section-sub reveal reveal-delay-2" style="margin-bottom: 40px;">Have a bulk order query, custom requirement, or distributor enquiry? Reach us anytime.</p>
      
      <div style="display: flex; flex-direction: column; gap: 24px;" class="reveal reveal-delay-2">
        <div style="display: flex; gap: 16px; align-items: center; background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; border: 1px solid var(--border);">
          <div style="font-size: 2rem;">📍</div>
          <div>
            <h4 style="font-size: 1rem; margin-bottom: 4px;">Factory Address</h4>
            <p style="color: rgba(255,255,255,0.5); font-size: 0.9rem;">Khaire Industries, Pune Nashik Highway, Narayangaon, Pune 410504</p>
          </div>
        </div>
        
        <div style="display: flex; gap: 16px; align-items: center; background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; border: 1px solid var(--border);">
          <div style="font-size: 2rem;">📞</div>
          <div>
            <h4 style="font-size: 1rem; margin-bottom: 4px;">Phone / WhatsApp</h4>
            <p style="color: rgba(255,255,255,0.5); font-size: 0.9rem;">+91 9960950007</p>
          </div>
        </div>
        
        <div style="display: flex; gap: 16px; align-items: center; background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; border: 1px solid var(--border);">
          <div style="font-size: 2rem;">✉️</div>
          <div>
            <h4 style="font-size: 1rem; margin-bottom: 4px;">Email</h4>
            <p style="color: rgba(255,255,255,0.5); font-size: 0.9rem;">khaireindustries@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="reveal reveal-delay-3">
      <form class="login-form" style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:20px;padding:36px">
        <h3 style="font-family: 'Playfair Display', serif; font-size: 1.5rem; margin-bottom: 24px;">Send a Message</h3>
        <div class="form-group" style="margin-bottom: 16px;">
          <label class="form-label">Your Name *</label>
          <input class="form-input" type="text" placeholder="Your name" required>
        </div>
        <div class="form-group" style="margin-bottom: 16px;">
          <label class="form-label">Phone / Email *</label>
          <input class="form-input" type="text" placeholder="Phone or email" required>
        </div>
        <div class="form-group" style="margin-bottom: 24px;">
          <label class="form-label">Message *</label>
          <textarea class="form-textarea" placeholder="Tell us about your requirement..." required></textarea>
        </div>
        <button type="button" class="form-submit" onclick="alert('Message sent successfully!')">Send Message →</button>
      </form>
    </div>
  </div>
</section>
`;

// 7. FAQ Page
const faqContent = `
<section style="padding-top: 40px; max-width: 800px; margin: 0 auto;">
  <div class="section-label reveal" style="justify-content:center">Support</div>
  <h2 class="section-title reveal reveal-delay-1" style="text-align:center">Frequently Asked Questions</h2>
  
  <div style="margin-top: 48px; display: flex; flex-direction: column; gap: 16px;" class="reveal reveal-delay-2">
    <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 12px; padding: 24px;">
      <h3 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 12px; color: var(--gold-light);">Do you deliver across India?</h3>
      <p style="color: rgba(255,255,255,0.6); line-height: 1.6;">Yes, we provide Pan-India delivery via our trusted courier partners. Shipping is free for retail orders above ₹2,000.</p>
    </div>
    
    <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 12px; padding: 24px;">
      <h3 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 12px; color: var(--gold-light);">What is the minimum order quantity for wholesale pricing?</h3>
      <p style="color: rgba(255,255,255,0.6); line-height: 1.6;">Minimum Order Quantities (MOQ) vary by product. For Box Files it is typically 50 pieces, while for smaller items like File Tags it may be 1000 pieces. Registered distributors can view MOQs in the portal.</p>
    </div>
    
    <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 12px; padding: 24px;">
      <h3 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 12px; color: var(--gold-light);">Can I get custom branding on folders?</h3>
      <p style="color: rgba(255,255,255,0.6); line-height: 1.6;">Absolutely. We provide screen printing and foil stamping for bulk orders of Eco Folders, Exam Pads, and Jute Folders. Please contact us on WhatsApp with your logo for a quote.</p>
    </div>
  </div>
</section>
`;

// 8. Terms & Privacy Page
const termsContent = `
<section style="padding-top: 40px; max-width: 800px; margin: 0 auto;">
  <div class="section-label reveal">Legal</div>
  <h2 class="section-title reveal reveal-delay-1">Terms & Privacy Policy</h2>
  
  <div style="margin-top: 40px; line-height: 1.8; color: rgba(255,255,255,0.7); font-size: 0.95rem; background: rgba(255,255,255,0.02); padding: 40px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);" class="reveal reveal-delay-2">
    <h3 style="color: var(--white); font-size: 1.2rem; margin-bottom: 16px;">1. Introduction</h3>
    <p style="margin-bottom: 24px;">Welcome to Shambhu Files. By using our website and purchasing our products, you agree to these Terms of Service. Please read them carefully.</p>
    
    <h3 style="color: var(--white); font-size: 1.2rem; margin-bottom: 16px;">2. Shipping and Delivery</h3>
    <p style="margin-bottom: 24px;">We process orders within 1-3 business days. Delivery times vary based on your location but typically range from 3-7 business days. We are not liable for delays caused by third-party courier services.</p>
    
    <h3 style="color: var(--white); font-size: 1.2rem; margin-bottom: 16px;">3. Returns and Refunds</h3>
    <p style="margin-bottom: 24px;">We accept returns for defective or damaged products within 7 days of delivery. Custom products (e.g., custom stamps, branded folders) are non-refundable unless there is a manufacturing defect.</p>
    
    <h3 style="color: var(--white); font-size: 1.2rem; margin-bottom: 16px;">4. Privacy Policy</h3>
    <p style="margin-bottom: 24px;">We respect your privacy. Any personal information collected (such as name, address, phone number) is used solely for order processing and communication. We do not sell your data to third parties.</p>
  </div>
</section>
`;

// 9. Offers Page
const offersContent = `
<section class="offers-section" style="padding-top: 40px; background: transparent;">
  <div class="section-label reveal" style="justify-content:center">Special Deals</div>
  <h2 class="section-title reveal reveal-delay-1" style="text-align:center">Current Offers</h2>
  
  <div class="offers-grid" style="max-width: 1000px; margin: 48px auto 0;">
    <div class="offer-card reveal reveal-delay-1">
      <div class="offer-icon">🏷️</div>
      <div class="offer-title">Bulk Order Savings</div>
      <div class="offer-desc">Get 15% off on all orders above ₹5,000. Perfect for offices, schools, and government departments buying in volume.</div>
      <span class="offer-badge">15% OFF above ₹5,000</span>
    </div>
    <div class="offer-card reveal reveal-delay-2">
      <div class="offer-icon">🚚</div>
      <div class="offer-title">Free Pan-India Shipping</div>
      <div class="offer-desc">All retail orders above ₹2,000 ship absolutely free anywhere in India. Fast courier delivery in 3–7 business days.</div>
      <span class="offer-badge">FREE above ₹2,000</span>
    </div>
  </div>
</section>
`;

// 10. Order Tracking Page
const trackingContent = `
<section style="padding-top: 40px; max-width: 600px; margin: 0 auto; text-align: center;">
  <div class="section-label reveal" style="justify-content:center">Where is my order?</div>
  <h2 class="section-title reveal reveal-delay-1">Track Your Order</h2>
  <p class="section-sub reveal reveal-delay-2" style="margin: 0 auto 40px;">Enter your tracking ID or Order Number provided via WhatsApp/Email.</p>
  
  <div class="login-card reveal reveal-delay-2" style="text-align: left;">
    <form class="login-form">
      <div class="form-group">
        <label class="form-label">Tracking ID / Order No.</label>
        <input class="form-input" type="text" placeholder="e.g. SHB10293 or AWB..." required>
      </div>
      <button type="button" class="form-submit" style="margin-top: 16px;" onclick="alert('Tracking system is currently integrating with our courier partners. Please WhatsApp us at +91 9960950007 for instant status.')">Track Package 📦</button>
    </form>
  </div>
</section>
`;

// 11. Admin Dashboard Page
const adminContent = `
<section style="padding-top: 40px; max-width: 1200px; margin: 0 auto;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px;">
    <div>
      <div class="section-label reveal">Admin Area</div>
      <h2 class="section-title reveal">Dashboard</h2>
    </div>
    <div>
      <span style="background: rgba(37,211,102,0.2); color: #25D366; padding: 6px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">System Online</span>
    </div>
  </div>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 24px; margin-bottom: 40px;" class="reveal">
    <div style="background: var(--card-bg); border: 1px solid var(--border); padding: 24px; border-radius: 16px;">
      <div style="font-size: 0.8rem; color: rgba(255,255,255,0.5); text-transform: uppercase; margin-bottom: 8px;">Total Orders (Month)</div>
      <div style="font-family: 'Playfair Display', serif; font-size: 2rem; color: var(--gold-light);">142</div>
    </div>
    <div style="background: var(--card-bg); border: 1px solid var(--border); padding: 24px; border-radius: 16px;">
      <div style="font-size: 0.8rem; color: rgba(255,255,255,0.5); text-transform: uppercase; margin-bottom: 8px;">Pending Stamps</div>
      <div style="font-family: 'Playfair Display', serif; font-size: 2rem; color: #E74C3C;">12</div>
    </div>
    <div style="background: var(--card-bg); border: 1px solid var(--border); padding: 24px; border-radius: 16px;">
      <div style="font-size: 0.8rem; color: rgba(255,255,255,0.5); text-transform: uppercase; margin-bottom: 8px;">Active Distributors</div>
      <div style="font-family: 'Playfair Display', serif; font-size: 2rem; color: #3498DB;">48</div>
    </div>
    <div style="background: var(--card-bg); border: 1px solid var(--border); padding: 24px; border-radius: 16px;">
      <div style="font-size: 0.8rem; color: rgba(255,255,255,0.5); text-transform: uppercase; margin-bottom: 8px;">Revenue (Est)</div>
      <div style="font-family: 'Playfair Display', serif; font-size: 2rem; color: #2ECC71;">₹4.2L</div>
    </div>
  </div>
  
  <div style="background: var(--card-bg); border: 1px solid var(--border); border-radius: 16px; padding: 32px;" class="reveal">
    <h3 style="font-family: 'Playfair Display', serif; font-size: 1.4rem; margin-bottom: 24px;">Recent Orders</h3>
    <table style="width: 100%; text-align: left; border-collapse: collapse;">
      <thead>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.5); font-size: 0.85rem; text-transform: uppercase;">
          <th style="padding: 12px 8px;">Order ID</th>
          <th style="padding: 12px 8px;">Customer</th>
          <th style="padding: 12px 8px;">Type</th>
          <th style="padding: 12px 8px;">Amount</th>
          <th style="padding: 12px 8px;">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
          <td style="padding: 16px 8px; font-family: monospace;">SHB9921</td>
          <td style="padding: 16px 8px;">Ramesh Trading</td>
          <td style="padding: 16px 8px;">Wholesale (Box Files)</td>
          <td style="padding: 16px 8px;">₹14,500</td>
          <td style="padding: 16px 8px;"><span style="background: rgba(241,196,15,0.2); color: #F1C40F; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem;">Processing</span></td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
          <td style="padding: 16px 8px; font-family: monospace;">SHB9920</td>
          <td style="padding: 16px 8px;">Adv. Suresh</td>
          <td style="padding: 16px 8px;">Custom Stamp</td>
          <td style="padding: 16px 8px;">₹349</td>
          <td style="padding: 16px 8px;"><span style="background: rgba(46,204,113,0.2); color: #2ECC71; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem;">Shipped</span></td>
        </tr>
        <tr>
          <td style="padding: 16px 8px; font-family: monospace;">SHB9919</td>
          <td style="padding: 16px 8px;">Pune High School</td>
          <td style="padding: 16px 8px;">Retail (Exam Pads)</td>
          <td style="padding: 16px 8px;">₹3,750</td>
          <td style="padding: 16px 8px;"><span style="background: rgba(46,204,113,0.2); color: #2ECC71; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem;">Delivered</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
`;

// Map of pages to generate
const pagesMap = {
    'products.html': productsContent,
    'product-detail.html': productDetailContent,
    'stamp.html': stampContent,
    'distributor.html': distributorContent,
    'about.html': aboutContent,
    'contact.html': contactContent,
    'faq.html': faqContent,
    'terms.html': termsContent,
    'offers.html': offersContent,
    'tracking.html': trackingContent,
    'admin.html': adminContent
};

// Generate pages
for (const [filename, content] of Object.entries(pagesMap)) {
    buildPage(filename, '', content);
}

console.log('🎉 Successfully built all 11 additional pages using index.html layout.');