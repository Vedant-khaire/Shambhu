/* ===================================================
   SHAMBHU — MAIN JS  (js/main.js)
   Navbar scroll · Mobile menu · Reveal · Products grid · Modals · Forms
   =================================================== */

// ── REAL PRODUCT DATA ──────────────────────────────────────────────
const DEFAULT_PRODUCTS = [
  { id:1,  name:'Lamination Box File',  cat:'Box Files',    icon:'assets/images/lamination_box_file.jpg', price:'₹120', wholesale:'₹72',  moq:'50 pcs',  badge:'Bestseller', desc:'Premium laminated cardboard box file with heavy-duty steel clip. Water-resistant cover. Ideal for long-term document storage.', colors:['Navy Blue','Black','Maroon','Green','Red'] },
  { id:2,  name:'PVC Box File',         cat:'Box Files',    icon:'assets/images/pvc_box_file.jpg', price:'₹140', wholesale:'₹85',  moq:'50 pcs',  badge:'',           desc:'Durable PVC-coated box file with metal spine and steel clip mechanism. Extra-strong for heavy document loads.', colors:['Black','Dark Blue','Maroon'] },
  { id:3,  name:'D Ring File',          cat:'Ring Binders', icon:'assets/images/d_ring_file.jpg', price:'₹130', wholesale:'₹80',  moq:'50 pcs',  badge:'',           desc:'Strong D-ring binder for accounts and legal documents. Available with 25mm, 38mm, and 50mm spine width.', colors:['Black','Blue','Red','Green'] },
  { id:4,  name:'Ring Binder',          cat:'Ring Binders', icon:'assets/images/ring_binder.jpg', price:'₹110', wholesale:'₹65',  moq:'50 pcs',  badge:'',           desc:'Classic 2/4-ring mechanism binder, ideal for presentations and report filing. Available in A4 and foolscap.', colors:['Black','Blue','Brown','Maroon'] },
  { id:5,  name:'Spring Files',         cat:'Spring Files', icon:'assets/images/spring_file.jpg', price:'₹20',  wholesale:'₹12',  moq:'200 pcs', badge:'',           desc:'Coloured cardboard spring file No. 202. Budget-friendly, ideal for schools, courts, and government offices.', colors:['Red','Blue','Green','Yellow','Orange','Violet'] },
  { id:6,  name:'Office Patti Files',   cat:'Spring Files', icon:'assets/images/office_patti_file.jpg', price:'₹18',  wholesale:'₹10',  moq:'200 pcs', badge:'',           desc:'Traditional patti file with inner fastener. Widely used in government offices and legal departments.', colors:['Yellow','White'] },
  { id:7,  name:'Jute Folder',          cat:'Eco Folders',  icon:'assets/images/jute_folder.jpg', price:'₹85',  wholesale:'₹50',  moq:'50 pcs',  badge:'Eco-Friendly',desc:'Eco-friendly jute material folder with optional custom screen printing. Popular with law firms, CA offices, and NGOs.', colors:['Natural Beige','Brown'] },
  { id:8,  name:'Voucher File',         cat:'Box Files',    icon:'assets/images/voucher_file.jpg', price:'₹95',  wholesale:'₹58',  moq:'50 pcs',  badge:'',           desc:'Dedicated voucher and accounts document file with labeled sections. Ideal for accounts departments and CA firms.', colors:['Grey','Blue'] },
  { id:9,  name:'Eco Box Cobra',        cat:'Box Files',    icon:'assets/images/eco_box_cobra.jpg', price:'₹110', wholesale:'₹68',  moq:'50 pcs',  badge:'',           desc:'Eco-friendly cobra-style box file with push-lock mechanism. Sustainable alternative to PVC-coated files.', colors:['Natural Brown','Black'] },
  { id:10, name:'Two Flap File',        cat:'Folders',      icon:'assets/images/two_flap_file.jpg', price:'₹30',  wholesale:'₹18',  moq:'100 pcs', badge:'',           desc:'Two-flap document folder. Holds papers neatly without punching or clipping. Ideal for single-use presentations. A4 size.', colors:['Red','Blue','Green','Yellow','Maroon','Black'] },
  { id:11, name:'Rexine Four Flap',     cat:'Folders',      icon:'assets/images/rexine_four_flap.jpg', price:'₹40',  wholesale:'₹24',  moq:'100 pcs', badge:'',           desc:'Four-flap expandable file folder with tie-strings. Made from durable rexine to hold bulky document sets securely. Popular in banks and courts.', colors:['Red','Blue','Maroon','Green','Black'] },
  { id:12, name:'File Cover',           cat:'Folders',      icon:'assets/images/file_cover.jpg', price:'₹8',   wholesale:'₹5',   moq:'500 pcs', badge:'',           desc:'Transparent and printed PVC file cover. Protects documents from dust and moisture. Available in A4 and legal size.', colors:['Transparent','Blue','Red','Green'] },
  { id:13, name:'File Tag',             cat:'Folders',      icon:'assets/images/file_tag.jpg', price:'₹2',   wholesale:'₹1',   moq:'1000 pcs',badge:'',           desc:'Standard tie-cord file tag/label for document identification. Widely used in courts, hospitals, and government offices.', colors:['White'] },
  { id:14, name:'Button Folder',        cat:'Folders',      icon:'assets/images/button_folder.jpg', price:'₹35',  wholesale:'₹20',  moq:'100 pcs', badge:'',           desc:'Button closure PVC folder. Versatile transparent document holder for projects, tenders, and legal bundles.', colors:['Pink','Blue','Green','White','Yellow'] },
  { id:15, name:'Punch Folder',         cat:'Folders',      icon:'assets/images/punch_folder.jpg', price:'₹25',  wholesale:'₹15',  moq:'100 pcs', badge:'',           desc:'Two-punch filing folder with metal fastener. Standard format for government and legal document filing.', colors:['Clear'] },
  { id:16, name:'Magazine Folder',      cat:'Folders',      icon:'assets/images/magazine_folder.jpg', price:'₹55',  wholesale:'₹33',  moq:'50 pcs',  badge:'',           desc:'Upright magazine and journal holder. Ideal for office libraries, waiting rooms, and reception desks.', colors:['Blue'] },
  { id:17, name:'Chain Folder',         cat:'Folders',      icon:'assets/images/chain_folder.jpg', price:'₹45',  wholesale:'₹27',  moq:'100 pcs', badge:'',           desc:'Chain-closure document folder with looped fastener. Provides a secure hold for legal and official documents.', colors:['Red','Blue','Green','Black'] },
  { id:18, name:'Unbreakable Exam Pad', cat:'Clipboards',   icon:'assets/images/unbreakable_exam_pad.jpg', price:'₹60',  wholesale:'₹36',  moq:'50 pcs',  badge:'',           desc:'Crystal clear transparent unbreakable exam board with sturdy metal clip. Ideal for students and professionals.', colors:['Transparent'] },
  { id:19, name:'Khadi Folder',         cat:'Eco Folders',  icon:'assets/images/khadi_folder.jpg', price:'₹90',  wholesale:'₹55',  moq:'50 pcs',  badge:'Eco-Friendly',desc:'Handcrafted khadi cloth folder — the premium eco-friendly choice for government gifting, NGOs, and corporate events.', colors:['White','Off-White','Cream'] },
  { id:20, name:'Report File',          cat:'Folders',      icon:'assets/images/report_file.jpg', price:'₹25',  wholesale:'₹15',  moq:'100 pcs', badge:'',           desc:'Clear transparent report file with printed spine and secure slide clip. Perfect for presenting reports and projects.', colors:['Clear'] },
  { id:21, name:'Advocate Brief Cover', cat:'Folders',      icon:'assets/images/advocate_brief_cover.jpg', price:'₹45',  wholesale:'₹28',  moq:'100 pcs', badge:'',           desc:'Durable advocate brief cover with inner pockets, index lines, and string closure. Essential for legal document management.', colors:['Red'] }
];

let PRODUCTS = JSON.parse(localStorage.getItem('shambhu_products')) || DEFAULT_PRODUCTS;

// Migration: Fix cached local storage paths and pull in new images
let _migratedPaths = false;
PRODUCTS.forEach(p => {
  // Pull new images from DEFAULT_PRODUCTS if current is an emoji
  const defaultP = DEFAULT_PRODUCTS.find(x => x.id === p.id);
  if (defaultP && defaultP.icon.includes('assets/images/') && p.icon && p.icon.length <= 4 && !p.icon.includes('assets')) {
    p.icon = defaultP.icon;
    p.name = defaultP.name;
    _migratedPaths = true;
  }

  if (p.icon && p.icon.match(/^assets\/[^/]+\.(jpg|jpeg|png|gif|svg)$/i)) {
    p.icon = p.icon.replace(/^assets\//, 'assets/images/');
    _migratedPaths = true;
  }
  if (p.gallery && p.gallery.length) {
    p.gallery = p.gallery.map(img => {
      if (img.match(/^assets\/[^/]+\.(jpg|jpeg|png|gif|svg)$/i)) {
        _migratedPaths = true;
        return img.replace(/^assets\//, 'assets/images/');
      }
      return img;
    });
  }
});

// Append any brand new products from DEFAULT_PRODUCTS that aren't in local storage yet
DEFAULT_PRODUCTS.forEach(dp => {
  if (!PRODUCTS.find(p => p.id === dp.id)) {
    PRODUCTS.push(dp);
    _migratedPaths = true;
  }
});

if (_migratedPaths) {
  localStorage.setItem('shambhu_products', JSON.stringify(PRODUCTS));
}

function saveProducts() {
  localStorage.setItem('shambhu_products', JSON.stringify(PRODUCTS));
}

// ── DISTRIBUTOR STATE MANAGEMENT ───────────────────────────────────
function getPendingDistributors() {
  return JSON.parse(localStorage.getItem('shambhu_pending')) || [];
}
function savePendingDistributors(data) {
  localStorage.setItem('shambhu_pending', JSON.stringify(data));
}
function getApprovedDistributors() {
  return JSON.parse(localStorage.getItem('shambhu_approved')) || [];
}
function saveApprovedDistributors(data) {
  localStorage.setItem('shambhu_approved', JSON.stringify(data));
}

const WA_NUM = '919960950007';

// ── NAVBAR SCROLL ──────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ── MOBILE MENU ────────────────────────────────────────────────────
function toggleMobile() {
  const m = document.getElementById('mobileMenu');
  if (m) m.classList.toggle('open');
}

// ── SCROLL REVEAL ──────────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── RENDER PRODUCTS GRID ───────────────────────────────────────────
function renderProducts(list, containerId, isWholesale = false) {
  const grid = document.getElementById(containerId || 'productsGrid');
  if (!grid) return;
  if (!list.length) { grid.innerHTML = '<p style="color:rgba(255,255,255,0.4);padding:40px 0;grid-column:1/-1;text-align:center">No products found.</p>'; return; }

  const filteredList = list.filter(p => {
    if (isWholesale) return p.visibility !== 'retail';
    return p.visibility !== 'wholesale';
  });

  grid.innerHTML = filteredList.map(p => {
    let visual = '';
    if (p.icon && (p.icon.startsWith('data:image') || p.icon.startsWith('http') || p.icon.startsWith('assets/'))) {
      visual = `<img src="${p.icon}" style="width:100%; height:100%; object-fit:cover; border-radius:12px;">`;
    } else {
      visual = `<div class="product-img-icon">${p.icon || '📦'}</div>`;
    }
    
    const displayPrice = isWholesale ? p.wholesale : p.price;
    const displayLabel = isWholesale ? 'Wholesale' : 'Retail';
    
    return `
    <div class="product-card" onclick="openModal(${p.id}, ${isWholesale})">
      <div class="product-img-wrap" style="overflow:hidden; display:flex; align-items:center; justify-content:center;">
        ${visual}
        ${p.badge ? `<div class="product-featured-badge">${p.badge}</div>` : ''}
      </div>
      <div class="product-info">
        <div class="product-cat">${p.cat}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc ? p.desc.slice(0,90) + '…' : ''}</div>
        <div class="product-footer">
          <div class="product-price">${displayPrice} <small>${displayLabel} · Min ${p.moq}</small></div>
          <button class="btn-enquire" onclick="event.stopPropagation();openModal(${p.id}, ${isWholesale})">View</button>
        </div>
      </div>
    </div>
  `}).join('');
}

// ── FILTER ─────────────────────────────────────────────────────────
let currentFilter = 'all';
function filterProducts(cat, btn) {
  currentFilter = cat;
  if (btn) {
    document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  const list = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
  renderProducts(list);
}

// ── PRODUCT MODAL ──────────────────────────────────────────────────
function openModal(id, isWholesale = false) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  
  const pmCat = document.getElementById('pm_cat');
  const pmName = document.getElementById('pm_name');
  const pmPrice = document.getElementById('pm_price');
  const pmMoq = document.getElementById('pm_moq');
  const pmDesc = document.getElementById('pm_desc');
  const pmWaLink = document.getElementById('pm_wa_link');
  const pmMainImg = document.getElementById('pm_main_img');
  const pmGallery = document.getElementById('pm_gallery');
  
  if (pmCat) pmCat.textContent = p.cat;
  if (pmName) pmName.textContent = p.name;
  if (pmDesc) pmDesc.textContent = p.desc || '';
  
  if (isWholesale) {
    if (pmPrice) pmPrice.textContent = p.wholesale;
    if (pmMoq) pmMoq.textContent = 'Wholesale MOQ: ' + p.moq;
  } else {
    if (pmPrice) pmPrice.textContent = p.price;
    if (pmMoq) pmMoq.textContent = 'MOQ: ' + p.moq;
  }
  
  const msg = encodeURIComponent(`Hi Shambhu, I'm interested in: *${p.name}*. Please share details and pricing.`);
  if (pmWaLink) pmWaLink.href = `https://wa.me/${WA_NUM}?text=${msg}`;
  
  // Gallery Logic
  const allImages = [];
  if (p.icon && p.icon !== '📦' && p.icon !== '📂' && !p.icon.match(/^[a-zA-Z0-9\uD83C-\uDBFF\uDC00-\uDFFF]+$/)) {
    allImages.push(p.icon); // main image
  }
  if (p.gallery && p.gallery.length) {
    allImages.push(...p.gallery);
  }
  
  if (allImages.length > 0) {
    if (pmMainImg) pmMainImg.src = allImages[0];
    
    // Build thumbnails if more than 1 image
    if (pmGallery) {
      if (allImages.length > 1) {
        pmGallery.style.display = 'flex';
        pmGallery.innerHTML = allImages.map(imgSrc => `
          <div onclick="document.getElementById('pm_main_img').src='${imgSrc}'" style="width: 60px; height: 60px; border-radius: 4px; overflow: hidden; cursor: pointer; flex-shrink: 0; border: 2px solid transparent; hover:border-color:var(--gold);">
            <img src="${imgSrc}" style="width:100%; height:100%; object-fit:cover;">
          </div>
        `).join('');
      } else {
        pmGallery.style.display = 'none';
        pmGallery.innerHTML = '';
      }
    }
  } else {
    // Fallback if no images
    if (pmMainImg) pmMainImg.src = ''; 
    if (pmGallery) pmGallery.style.display = 'none';
  }
  
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  const modal = document.getElementById('productModal');
  if (modal) modal.classList.remove('open');
  const gModal = document.getElementById('galleryModal');
  if (gModal) gModal.classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('productModal')?.addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });
document.getElementById('galleryModal')?.addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── STAMP ORDER ────────────────────────────────────────────────────
let selectedInk = 'Red';
function selectInk(el, color) {
  document.querySelectorAll('.ink-dot').forEach(d => d.classList.remove('selected'));
  el.classList.add('selected');
  selectedInk = color;
}
function showFileName(input) {
  const disp = document.getElementById('fileNameDisplay');
  if (disp && input.files[0]) disp.textContent = '📎 ' + input.files[0].name;
}
function submitStampOrder(e) {
  e.preventDefault();
  const form = e.target;
  const name    = form.querySelector('input[type="text"]').value;
  const phone   = form.querySelector('input[type="tel"]').value;
  const size    = form.querySelector('select').value;
  const qty     = form.querySelector('input[type="number"]').value;
  const msg = encodeURIComponent(`Hi Shambhu! I'd like to order a Custom Stamp.\n\nName: ${name}\nPhone: ${phone}\nStamp Size: ${size}\nQuantity: ${qty}\nInk Colour: ${selectedInk}\n\nPlease confirm my order.`);
  window.open(`https://wa.me/${WA_NUM}?text=${msg}`, '_blank');
  document.getElementById('stampFormCard').querySelector('form').style.display = 'none';
  document.getElementById('stampSuccess').style.display = 'block';
}

// ── DISTRIBUTOR LOGIN ───────────────────────────────────────────────
function switchTab(tab) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  if (event && event.currentTarget) event.currentTarget.classList.add('active');
  // Also handle div-based tabs on distributor.html
  if (event && event.target) event.target.classList.add('active');
}

// Credentials: vedant/vk1706 (developer) · sanku/sanku980 (shop owner)
const USERS = { 'vedant': { pass: 'vk1706', role: 'developer' }, 'sanku': { pass: 'sanku980', role: 'owner' } };

function showAuthError(form, msg) {
  let err = form.querySelector('.auth-error');
  if (!err) {
    err = document.createElement('p');
    err.className = 'auth-error';
    err.style.cssText = 'color:#E74C3C;font-size:0.82rem;margin-top:-4px;padding:8px 12px;background:rgba(231,76,60,0.1);border:1px solid rgba(231,76,60,0.3);border-radius:8px;text-align:center;';
    const btn = form.querySelector('button[type="submit"]');
    if (btn) btn.before(err);
    else form.appendChild(err);
  }
  err.textContent = msg;
  err.style.display = 'block';
}

function handleLogin(e) {
  e.preventDefault();
  const inputs = e.target.querySelectorAll('input');
  const user = inputs[0].value.trim().toLowerCase();
  const pass = inputs[1].value;

  if (!user || !pass) {
    showAuthError(e.target, '⚠️ Please enter your username and password.');
    return;
  }

  if (USERS[user] && USERS[user].pass === pass) {
    // Store session with 7-day expiry
    const expiry = new Date().getTime() + (7 * 24 * 60 * 60 * 1000);
    localStorage.setItem('shambhu_user', user);
    localStorage.setItem('shambhu_role', USERS[user].role);
    localStorage.setItem('shambhu_auth_expiry', expiry.toString());
    // Show brief success state
    const btn = e.target.querySelector('button[type="submit"]');
    if (btn) { btn.textContent = '✓ Logging in…'; btn.disabled = true; }
    setTimeout(() => { window.location.href = 'admin.html'; }, 600);
  } else {
    showAuthError(e.target, '❌ Invalid username or password. Please try again.');
    inputs[1].value = '';
    inputs[1].focus();
  }
}

function handleDistributorLogin(e) {
  e.preventDefault();
  const inputs = e.target.querySelectorAll('input');
  const email = inputs[0].value.trim().toLowerCase();
  const pass = inputs[1].value;

  if (!email || !pass) {
    showAuthError(e.target, '⚠️ Please enter your email and numeric password.');
    return;
  }

  const approved = getApprovedDistributors();
  const dist = approved.find(d => d.email.toLowerCase() === email && d.password === pass);

  if (dist) {
    const expiry = new Date().getTime() + (7 * 24 * 60 * 60 * 1000);
    localStorage.setItem('shambhu_dist_user', JSON.stringify(dist));
    localStorage.setItem('shambhu_dist_expiry', expiry.toString());
    const btn = e.target.querySelector('button[type="submit"]');
    if (btn) { btn.textContent = '✓ Logging in…'; btn.disabled = true; }
    setTimeout(() => { window.location.href = 'distributor-portal.html'; }, 600);
  } else {
    showAuthError(e.target, '❌ Invalid email or password.');
    inputs[1].value = '';
    inputs[1].focus();
  }
}

function handleLogout() {
  localStorage.removeItem('shambhu_user');
  localStorage.removeItem('shambhu_role');
  localStorage.removeItem('shambhu_auth_expiry');
  localStorage.removeItem('shambhu_dist_user');
  localStorage.removeItem('shambhu_dist_expiry');
  window.location.href = 'distributor.html';
}

// Auth guard for admin.html — redirect to login if not authenticated
function checkAdminAuth() {
  if (window.location.pathname.includes('admin.html')) {
    const user = localStorage.getItem('shambhu_user');
    const expiry = localStorage.getItem('shambhu_auth_expiry');
    
    if (!user || !expiry || new Date().getTime() > parseInt(expiry)) {
      handleLogout();
      return false;
    }
    // Show username in dashboard
    const titleEl = document.querySelector('.admin-title');
    const role = localStorage.getItem('shambhu_role');
    if (titleEl) {
      const roleLabel = role === 'developer' ? '👨‍💻 Developer' : '👤 Owner';
      titleEl.innerHTML = 'Dashboard &nbsp;<small style="font-size:0.85rem;color:var(--text-muted)">— ' + roleLabel + ' (' + user + ')</small>';
    }
    return true;
  }
}

function checkDistributorAuth() {
  if (window.location.pathname.includes('distributor-portal.html')) {
    const user = localStorage.getItem('shambhu_dist_user');
    const expiry = localStorage.getItem('shambhu_dist_expiry');
    
    if (!user || !expiry || new Date().getTime() > parseInt(expiry)) {
      handleLogout();
      return false;
    }
    return true;
  }
}

function handleRegister(e) {
  if (e) e.preventDefault();
  const modal = document.getElementById('registerModal');
  if (modal) modal.classList.add('open');
}

function submitDistributorRegistration(e) {
  e.preventDefault();
  const inputs = e.target.querySelectorAll('input, textarea');
  const firm = inputs[0].value.trim();
  const person = inputs[1].value.trim();
  const email = inputs[2].value.trim();
  const phone = inputs[3].value.trim();
  const city = inputs[4].value.trim();
  const gstin = inputs[5].value.trim();
  
  if (!firm || !person || !email || !phone) {
    alert("Please fill all required fields.");
    return;
  }
  
  const pending = getPendingDistributors();
  const id = 'DIST' + Date.now();
  pending.push({
    id, firm, person, email, phone, city, gstin, date: new Date().toISOString()
  });
  savePendingDistributors(pending);
  
  e.target.innerHTML = `
    <div style="text-align:center; padding: 30px;">
      <h3 style="color:var(--gold); margin-bottom:15px;">Registration Submitted</h3>
      <p style="color:rgba(255,255,255,0.7); line-height:1.6;">Thank you for your interest! The owner will review your application. Once approved, you will receive a password on your email to login.</p>
    </div>
  `;
}
// ── ADMIN DASHBOARD FUNCTIONS ─────────────────────────────────────────
function switchAdminTab(tab) {
  document.querySelectorAll('.admin-tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  const tContent = document.getElementById('admin-tab-' + tab);
  if (tContent) tContent.classList.add('active');
  if (event && event.currentTarget) event.currentTarget.classList.add('active');
}

function renderAdminDashboard() {
  const role = localStorage.getItem('shambhu_role');
  if (role === 'developer') {
    document.querySelectorAll('.dev-only').forEach(el => el.style.display = '');
  }

  // Update KPIs
  const pending = getPendingDistributors();
  const approved = getApprovedDistributors();
  const kpiPending = document.getElementById('kpi-pending');
  const kpiApproved = document.getElementById('kpi-approved');
  const kpiProducts = document.getElementById('kpi-products');
  
  if(kpiPending) kpiPending.textContent = pending.length;
  if(kpiApproved) kpiApproved.textContent = approved.length;
  if(kpiProducts) kpiProducts.textContent = PRODUCTS.length;

  renderAdminProducts();
  renderAdminDistributors();
}

function renderAdminProducts() {
  const tbody = document.getElementById('adminProductsList');
  if (!tbody) return;
  
  tbody.innerHTML = PRODUCTS.map(p => {
    let visual = '';
    if (p.icon && (p.icon.startsWith('data:image') || p.icon.startsWith('http') || p.icon.startsWith('assets/'))) {
      visual = `<img src="${p.icon}" style="width:32px; height:32px; object-fit:cover; border-radius:4px; vertical-align:middle;">`;
    } else {
      visual = `<span style="font-size:1.5rem; vertical-align:middle;">${p.icon || '📦'}</span>`;
    }
    const vis = p.visibility ? p.visibility.charAt(0).toUpperCase() + p.visibility.slice(1) : 'All';
    return `
    <tr>
      <td style="font-family: monospace; color: var(--gold);">${p.id}</td>
      <td>${visual}</td>
      <td>${p.name}</td>
      <td>${p.cat}</td>
      <td><span class="badge-status ${vis === 'All' ? 'bg-good' : 'bg-warn'}">${vis}</span></td>
      <td>${p.price}</td>
      <td style="color:var(--gold-light)">${p.wholesale}</td>
      <td>
        <button onclick="openGalleryManager(${p.id})" style="background:transparent; border:none; color:#2ECC71; cursor:pointer; font-size:0.85rem; margin-right:8px;">Gallery</button>
        <button onclick="openEditProduct(${p.id})" style="background:transparent; border:none; color:#3498DB; cursor:pointer; font-size:0.85rem; margin-right:8px;">Edit</button>
        <button onclick="deleteProduct(${p.id})" style="background:transparent; border:none; color:#E74C3C; cursor:pointer; font-size:0.85rem;">Delete</button>
      </td>
    </tr>
  `}).join('');
}

function submitNewProduct(e) {
  e.preventDefault();
  const newId = PRODUCTS.length > 0 ? Math.max(...PRODUCTS.map(p => p.id)) + 1 : 1;
  const visEl = document.getElementById('np_visibility');
  const p = {
    id: newId,
    name: document.getElementById('np_name').value,
    cat: document.getElementById('np_cat').value,
    icon: document.getElementById('np_icon').value,
    price: document.getElementById('np_price').value,
    wholesale: document.getElementById('np_wholesale').value,
    moq: document.getElementById('np_moq').value,
    visibility: visEl ? visEl.value : 'all',
    badge: '',
    desc: document.getElementById('np_desc').value,
    colors: []
  };
  PRODUCTS.push(p);
  saveProducts();
  renderAdminProducts();
  document.getElementById('kpi-products').textContent = PRODUCTS.length;
  e.target.reset();
  document.getElementById('addProductForm').classList.add('hidden');
}

function openEditProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  document.getElementById('ep_id').value = p.id;
  document.getElementById('ep_name').value = p.name;
  document.getElementById('ep_cat').value = p.cat;
  document.getElementById('ep_price').value = p.price;
  document.getElementById('ep_wholesale').value = p.wholesale;
  document.getElementById('ep_moq').value = p.moq;
  document.getElementById('ep_icon').value = p.icon;
  document.getElementById('ep_desc').value = p.desc || '';
  
  const visEl = document.getElementById('ep_visibility');
  if(visEl) visEl.value = p.visibility || 'all';
  
  document.getElementById('editProductModal').classList.add('open');
}

function saveEditedProduct(e) {
  e.preventDefault();
  const id = parseInt(document.getElementById('ep_id').value);
  const pIndex = PRODUCTS.findIndex(x => x.id === id);
  if (pIndex === -1) return;
  
  const visEl = document.getElementById('ep_visibility');
  
  PRODUCTS[pIndex] = {
    ...PRODUCTS[pIndex],
    name: document.getElementById('ep_name').value,
    cat: document.getElementById('ep_cat').value,
    price: document.getElementById('ep_price').value,
    wholesale: document.getElementById('ep_wholesale').value,
    moq: document.getElementById('ep_moq').value,
    icon: document.getElementById('ep_icon').value,
    desc: document.getElementById('ep_desc').value,
    visibility: visEl ? visEl.value : 'all'
  };
  
  saveProducts();
  renderAdminProducts();
  document.getElementById('editProductModal').classList.remove('open');
}

// ── GALLERY MANAGER ────────────────────────────────────────────────
function openGalleryManager(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  
  document.getElementById('gm_product_id').value = p.id;
  document.getElementById('gm_product_name').textContent = p.name;
  renderGalleryManagerImages(p);
  
  document.getElementById('galleryModal').classList.add('open');
}

function renderGalleryManagerImages(p) {
  const container = document.getElementById('gm_images_container');
  if (!container) return;
  
  const gallery = p.gallery || [];
  if (gallery.length === 0) {
    container.innerHTML = '<div style="grid-column: 1/-1; color: rgba(255,255,255,0.4);">No images in gallery yet.</div>';
    return;
  }
  
  container.innerHTML = gallery.map((imgUrl, index) => `
    <div style="position:relative; aspect-ratio:1; border-radius:8px; overflow:hidden; background:rgba(0,0,0,0.3);">
      <img src="${imgUrl}" style="width:100%; height:100%; object-fit:cover;">
      <button onclick="deleteGalleryImage(${p.id}, ${index})" style="position:absolute; top:4px; right:4px; background:rgba(231,76,60,0.9); color:white; border:none; width:24px; height:24px; border-radius:4px; cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:12px;">✕</button>
    </div>
  `).join('');
}

function addGalleryImage(input) {
  if (!input.files || !input.files[0]) return;
  const id = parseInt(document.getElementById('gm_product_id').value);
  const pIndex = PRODUCTS.findIndex(x => x.id === id);
  if (pIndex === -1) return;
  
  const p = PRODUCTS[pIndex];
  if (!p.gallery) p.gallery = [];
  
  const reader = new FileReader();
  reader.onload = function(e) {
    p.gallery.push(e.target.result);
    saveProducts();
    renderGalleryManagerImages(p);
    input.value = ''; // Reset input
  };
  reader.readAsDataURL(input.files[0]);
}

function deleteGalleryImage(id, index) {
  if (!confirm("Remove this image from the gallery?")) return;
  const pIndex = PRODUCTS.findIndex(x => x.id === id);
  if (pIndex === -1) return;
  
  const p = PRODUCTS[pIndex];
  if (p.gallery && p.gallery.length > index) {
    p.gallery.splice(index, 1);
    saveProducts();
    renderGalleryManagerImages(p);
  }
}


function deleteProduct(id) {
  if (confirm("Delete this product?")) {
    PRODUCTS = PRODUCTS.filter(p => p.id !== id);
    saveProducts();
    renderAdminProducts();
    document.getElementById('kpi-products').textContent = PRODUCTS.length;
  }
}

function renderAdminDistributors() {
  const pendingTbody = document.getElementById('adminPendingList');
  const approvedTbody = document.getElementById('adminApprovedList');
  if (!pendingTbody || !approvedTbody) return;

  const pending = getPendingDistributors();
  const approved = getApprovedDistributors();

  pendingTbody.innerHTML = pending.length ? pending.map(p => `
    <tr>
      <td>${p.firm}</td>
      <td>${p.person}</td>
      <td>${p.email}</td>
      <td>${p.phone} <br> <small>${p.city}</small></td>
      <td>
        <button onclick="approveDistributor('${p.id}')" style="background:#2ECC71; color:#fff; border:none; padding:4px 10px; border-radius:4px; cursor:pointer; margin-right:8px; font-size:0.8rem;">Approve</button>
        <button onclick="rejectDistributor('${p.id}')" style="background:#E74C3C; color:#fff; border:none; padding:4px 10px; border-radius:4px; cursor:pointer; font-size:0.8rem;">Reject</button>
      </td>
    </tr>
  `).join('') : `<tr><td colspan="5" style="text-align:center; color:rgba(255,255,255,0.4)">No pending requests</td></tr>`;

  approvedTbody.innerHTML = approved.length ? approved.map(a => `
    <tr>
      <td style="color:var(--gold)">${a.firm}</td>
      <td>${a.person}</td>
      <td>${a.email}</td>
      <td style="font-family:monospace; font-size:1.1rem; letter-spacing:2px;">${a.password}</td>
      <td>
        <button onclick="revokeDistributor('${a.id}')" style="background:transparent; border:none; color:#E74C3C; cursor:pointer; font-size:0.85rem;">Revoke Access</button>
      </td>
    </tr>
  `).join('') : `<tr><td colspan="5" style="text-align:center; color:rgba(255,255,255,0.4)">No approved distributors</td></tr>`;
}

function approveDistributor(id) {
  let pending = getPendingDistributors();
  const dist = pending.find(d => d.id === id);
  if (dist) {
    const manualPass = prompt(`Assign a password for ${dist.firm} (${dist.email}):`, Math.floor(100000 + Math.random() * 900000).toString());
    if (!manualPass) return; // Cancelled
    
    dist.password = manualPass;
    dist.approvedAt = new Date().toISOString();
    
    let approved = getApprovedDistributors();
    approved.push(dist);
    saveApprovedDistributors(approved);
    
    pending = pending.filter(d => d.id !== id);
    savePendingDistributors(pending);
    
    renderAdminDashboard();
    alert(`Approved ${dist.firm}!\n\nPlease inform them to login with password: ${dist.password}`);
  }
}

function submitManualDistributor(e) {
  e.preventDefault();
  const firm = document.getElementById('nd_firm').value.trim();
  const person = document.getElementById('nd_person').value.trim();
  const email = document.getElementById('nd_email').value.trim();
  const phone = document.getElementById('nd_phone').value.trim();
  const city = document.getElementById('nd_city').value.trim();
  const password = document.getElementById('nd_password').value.trim();

  const id = 'DIST' + Date.now();
  const dist = {
    id, firm, person, email, phone, city, password, approvedAt: new Date().toISOString()
  };

  let approved = getApprovedDistributors();
  approved.push(dist);
  saveApprovedDistributors(approved);

  renderAdminDashboard();
  e.target.reset();
  document.getElementById('addDistributorForm').classList.add('hidden');
  alert(`Added ${firm} successfully!`);
}


function rejectDistributor(id) {
  if (confirm("Reject this request?")) {
    let pending = getPendingDistributors();
    pending = pending.filter(d => d.id !== id);
    savePendingDistributors(pending);
    renderAdminDashboard();
  }
}

function revokeDistributor(id) {
  if (confirm("Revoke access for this distributor?")) {
    let approved = getApprovedDistributors();
    approved = approved.filter(d => d.id !== id);
    saveApprovedDistributors(approved);
    renderAdminDashboard();
  }
}
// ── CONTACT FORM ────────────────────────────────────────────────────
function submitContact(e) {
  e.preventDefault();
  const inputs = e.target.querySelectorAll('input, textarea');
  const name = inputs[0]?.value || '';
  const contact = inputs[1]?.value || '';
  const message = e.target.querySelector('textarea')?.value || '';
  const msg = encodeURIComponent(`Hi Shambhu!\n\nName: ${name}\nContact: ${contact}\n\nMessage:\n${message}`);
  window.open(`https://wa.me/${WA_NUM}?text=${msg}`, '_blank');
}

// ── INIT ────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Render products on homepage or products page
  if (document.getElementById('productsGrid')) {
    const isWholesale = window.location.pathname.includes('distributor-portal.html');
    renderProducts(PRODUCTS, 'productsGrid', isWholesale);
  }

  // Filter tab click listeners
  document.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', function() {
      const cat = this.textContent.trim();
      filterProducts(cat === 'All' ? 'all' : cat, this);
    });
  });

  // Admin auth guard
  checkAdminAuth();
  checkDistributorAuth();
  
  if (window.location.pathname.includes('admin.html')) {
    renderAdminDashboard();
  }

  // Add logout button to admin/portal nav if logged in
  if ((window.location.pathname.includes('admin.html') && localStorage.getItem('shambhu_user')) || 
      (window.location.pathname.includes('distributor-portal.html') && localStorage.getItem('shambhu_dist_user'))) {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      const li = document.createElement('li');
      li.innerHTML = '<a href="#" onclick="handleLogout();return false;" style="color:#E74C3C;border:1px solid rgba(231,76,60,0.3);padding:7px 16px;border-radius:6px; margin-left: 10px;">Logout</a>';
      navLinks.appendChild(li);
    }
  }
});

// ── FILE UPLOAD LOGIC ──────────────────────────────────────────────
function encodeImageFileAsURL(element, targetId) {
  const file = element.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onloadend = function() {
    document.getElementById(targetId).value = reader.result;
  }
  reader.readAsDataURL(file);
}