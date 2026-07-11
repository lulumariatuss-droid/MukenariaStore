/* ================= DATA ================= */
const OWNER_WHATSAPP = "6281232614355"; // 081232614355
const OWNER_EMAIL = "lulumariatuss@gmail.com";

// Ganti "img" di bawah ini dengan URL gambar produk kamu sendiri untuk mengubah katalog.
const PRODUCTS = [
  { id:1, name:"Mukena Katun Jepang Klasik", category:"Katun Jepang", price:185000, stock:12,
    colors:[{name:"Sage",hex:"#7c9885"},{name:"Cream",hex:"#f2ece0"},{name:"Dusty Pink",hex:"#d9b8b0"}],
    sizes:["All Size"], img:"MukenaKatunJepang.jpeg",
    desc:"Mukena berbahan katun jepang premium yang lembut dan adem di kulit, cocok dipakai sehari-hari maupun bepergian." },
  { id:2, name:"Mukena Jumbo Rayon Adem", category:"Jumbo", price:210000, stock:8,
    colors:[{name:"Lavender",hex:"#c9b8d9"},{name:"Sage",hex:"#7c9885"},{name:"Navy",hex:"#3b4a5a"}],
    sizes:["Jumbo"], img:"MukenaJumbo.jpeg",
    desc:"Ukuran jumbo dengan bahan rayon adem, memberi ruang gerak lebih leluasa dan nyaman untuk sholat lama." },
  { id:3, name:"Mukena Katun Bali Bordir", category:"Bordir", price:265000, stock:10,
    colors:[{name:"Cream",hex:"#f2ece0"},{name:"Gold",hex:"#b6924f"}],
    sizes:["All Size"], img:"MukenaKatunBali.jpeg",
    desc:"Detail bordir halus khas Bali pada bagian mukena, memberi kesan elegan dan mewah namun tetap ringan dipakai." },
  { id:4, name:"Mukena Travel Set Praktis", category:"Travel", price:150000, stock:20,
    colors:[{name:"Abu",hex:"#9aa39c"},{name:"Cream",hex:"#f2ece0"}],
    sizes:["All Size"], img:"MukenaTravel.jpeg",
    desc:"Dilengkapi tas serut ringkas, cocok dibawa bepergian, bahan mudah dilipat dan tidak memakan tempat." },
  { id:5, name:"Mukena Silk Premium", category:"Premium", price:320000, stock:6,
    colors:[{name:"Sage",hex:"#7c9885"},{name:"Maroon",hex:"#7a3b3b"},{name:"Navy",hex:"#3b4a5a"}],
    sizes:["All Size"], img:"MukenaSilk.jpeg",
    desc:"Bahan silk premium dengan jatuh kain yang halus dan mewah, pilihan tepat untuk momen spesial." },
  { id:6, name:"Mukena Anak Motif Bunga", category:"Anak", price:95000, stock:15,
    colors:[{name:"Pink",hex:"#d9b8b0"},{name:"Lavender",hex:"#c9b8d9"}],
    sizes:["S","M"], img:"MukenaAnak.jfif",
    desc:"Didesain khusus untuk si kecil belajar sholat, motif bunga lucu dengan bahan lembut anti iritasi." },
  { id:7, name:"Mukena Renda Brukat Elegan", category:"Brukat", price:275000, stock:9,
    colors:[{name:"Cream",hex:"#f2ece0"},{name:"Gold",hex:"#b6924f"},{name:"Sage",hex:"#7c9885"}],
    sizes:["All Size"], img:"MukenaRenda.jpeg",
    desc:"Sentuhan renda brukat pada bagian kerudung memberi kesan anggun dan cocok untuk hadiah spesial." },
  { id:8, name:"Mukena Katun Polos Minimalis", category:"Katun Jepang", price:165000, stock:18,
    colors:[{name:"Abu",hex:"#9aa39c"},{name:"Sage",hex:"#7c9885"},{name:"Cream",hex:"#f2ece0"}],
    sizes:["All Size"], img:"MukenaKatunPolos.jpeg",
    desc:"Desain polos minimalis modern, ringan digunakan untuk aktivitas sholat harian di rumah maupun kantor." },
  { id:9, name:"Mukena Couple Mewah", category:"Jumbo", price:295000, stock:7,
    colors:[{name:"Navy",hex:"#3b4a5a"},{name:"Maroon",hex:"#7a3b3b"}],
    sizes:["Jumbo"], img:"MukenaCouple.jpeg",
    desc:"Perpaduan ukuran jumbo dan detail brukat mewah, nyaman dipakai tanpa mengurangi kesan elegan." },
  { id:10, name:"Mukena Bordir Klasik Bag", category:"Travel", price:175000, stock:14,
    colors:[{name:"Sage",hex:"#7c9885"},{name:"Abu",hex:"#9aa39c"}],
    sizes:["All Size"], img:"MukenaBordir.jpeg",
    desc:"Tas kemasan waterproof menjaga mukena tetap bersih dan kering selama perjalanan jauh." },
  { id:11, name:"Mukena Sutra Import Eksklusif", category:"Premium", price:385000, stock:5,
    colors:[{name:"Gold",hex:"#b6924f"},{name:"Cream",hex:"#f2ece0"}],
    sizes:["All Size"], img:"MukenaImpor.jpeg",
    desc:"Sutra import dengan tekstur lembut istimewa, dirancang untuk kenyamanan maksimal dan tampilan mewah." },
  { id:12, name:"Mukena Anak Set Ceria", category:"Anak", price:110000, stock:16,
    colors:[{name:"Pink",hex:"#d9b8b0"},{name:"Sage",hex:"#7c9885"}],
    sizes:["S","M","L"], img:"MukenaAnakSet.jpeg",
    desc:"Set lengkap atasan dan bawahan dengan warna ceria, mendorong semangat si kecil menjalankan ibadah." },
 ];

let CART = JSON.parse(localStorage.getItem('mukenaria_cart') || '[]');
let REVIEWS = JSON.parse(localStorage.getItem('mukenaria_reviews') || 'null') || [
  { name:"Siti Rahma", rating:5, text:"Bahannya adem banget dan jahitannya rapi. Sudah repeat order 3x!", date:"2 minggu lalu" },
  { name:"Dinda Ayu", rating:5, text:"Pengiriman cepat, mukenanya sesuai foto, warnanya lembut.", date:"1 bulan lalu" },
  { name:"Fitriani", rating:4, text:"Bagus, cuma ukurannya agak besar sedikit untuk saya. Tetap nyaman dipakai.", date:"1 bulan lalu" }
];
let STOCK = JSON.parse(localStorage.getItem('mukenaria_stock') || 'null');
if(!STOCK){
  STOCK = {};
  PRODUCTS.forEach(p => STOCK[p.id] = p.stock);
  localStorage.setItem('mukenaria_stock', JSON.stringify(STOCK));
}
let currentRating = 0;
let currentPayment = null;
let activeProductSelection = { color:null, size:null, qty:1 };
let currentProduct = null;
let currentCustomer = JSON.parse(localStorage.getItem('mukenaria_customer') || 'null');
let ORDER_COUNT = parseInt(localStorage.getItem('mukenaria_orders') || '0');

/* ================= VISITOR COUNTER ================= */
(function trackVisitor(){
  let v = parseInt(localStorage.getItem('mukenaria_visitors') || '0');
  if(!sessionStorage.getItem('mukenaria_session_counted')){
    v += 1;
    localStorage.setItem('mukenaria_visitors', v);
    sessionStorage.setItem('mukenaria_session_counted', '1');
  }
})();

/* ================= UTIL ================= */
function formatRp(num){
  return "Rp " + num.toLocaleString('id-ID');
}
function showToast(msg, duration){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(()=> t.classList.remove('show'), duration || 2800);
}
function toggleMenu(){
  document.getElementById('navLinks').classList.toggle('open');
}
function closeMenu(){
  document.getElementById('navLinks').classList.remove('open');
}
function toggleDropdown(e){
  if(window.innerWidth <= 768){
    e.preventDefault();
    e.currentTarget.classList.toggle('open');
  }
}
function openModal(id){ document.getElementById(id).classList.add('show'); }
function closeModal(id){ document.getElementById(id).classList.remove('show'); }

/* ================= CATALOG RENDER ================= */
function populateCategoryFilter(){
  const cats = [...new Set(PRODUCTS.map(p=>p.category))];
  const sel = document.getElementById('filterCategory');
  cats.forEach(c=>{
    const opt = document.createElement('option');
    opt.value = c; opt.textContent = c;
    sel.appendChild(opt);
  });
  const panel = document.getElementById('dropdownPanel');
  cats.forEach(c=>{
    const a = document.createElement('a');
    a.href = "#katalog";
    a.textContent = c;
    a.onclick = ()=>{ document.getElementById('filterCategory').value = c; renderCatalog(); closeMenu(); };
    panel.appendChild(a);
  });
}

function renderCatalog(){
  const cat = document.getElementById('filterCategory').value;
  const sort = document.getElementById('filterSort').value;
  const maxPrice = parseFloat(document.getElementById('filterMaxPrice').value);
  const search = document.getElementById('filterSearch').value.toLowerCase();

  let list = PRODUCTS.filter(p=>{
    if(cat !== 'all' && p.category !== cat) return false;
    if(!isNaN(maxPrice) && maxPrice > 0 && p.price > maxPrice) return false;
    if(search && !p.name.toLowerCase().includes(search)) return false;
    return true;
  });
  if(sort === 'asc') list.sort((a,b)=>a.price-b.price);
  if(sort === 'desc') list.sort((a,b)=>b.price-a.price);

  const grid = document.getElementById('catalogGrid');
  grid.innerHTML = '';
  if(list.length === 0){
    grid.innerHTML = '<p style="grid-column:1/-1; text-align:center; color:#888;">Produk tidak ditemukan.</p>';
    return;
  }
  list.forEach(p=>{
    const stock = STOCK[p.id];
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = ()=> openProductDetail(p.id);
    card.innerHTML = `
      <div class="img-wrap"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
      <div class="info">
        <span class="cat-tag">${p.category}</span>
        <h3>${p.name}</h3>
        <span class="price">${formatRp(p.price)}</span>
        <span class="stock-tag">${stock > 0 ? 'Stok: ' + stock : 'Stok habis'}</span>
      </div>`;
    grid.appendChild(card);
  });
}

/* ================= PRODUCT DETAIL ================= */
function openProductDetail(id){
  const p = PRODUCTS.find(x=>x.id===id);
  currentProduct = p;
  activeProductSelection = { color: p.colors[0].name, size: p.sizes[0], qty: 1 };

  const content = document.getElementById('productDetailContent');
  content.innerHTML = `
    <div class="pd-img"><img src="${p.img}" alt="${p.name}"></div>
    <div class="pd-info">
      <span class="cat-tag">${p.category}</span>
      <h2>${p.name}</h2>
      <div class="pd-price">${formatRp(p.price)}</div>
      <p>${p.desc}</p>

      <div class="option-row">
        <label>Pilih Warna</label>
        <div class="swatches" id="colorSwatches">
          ${p.colors.map((c,i)=>`<div class="swatch ${i===0?'active':''}" style="background:${c.hex};" title="${c.name}" onclick="selectColor('${c.name}', this)"></div>`).join('')}
        </div>
      </div>

      <div class="option-row">
        <label>Pilih Ukuran</label>
        <div id="sizeButtons">
          ${p.sizes.map((s,i)=>`<button class="size-btn ${i===0?'active':''}" onclick="selectSize('${s}', this)">${s}</button>`).join('')}
        </div>
      </div>

      <div class="option-row">
        <label>Jumlah</label>
        <div class="qty-control">
          <button onclick="changeQty(-1)">−</button>
          <span id="qtyDisplay">1</span>
          <button onclick="changeQty(1)">+</button>
        </div>
      </div>

      <button class="btn" style="margin-top:20px; width:100%;" onclick="addToCart()">Tambah ke Keranjang</button>
    </div>`;
  openModal('productOverlay');
}
function selectColor(name, el){
  activeProductSelection.color = name;
  document.querySelectorAll('#colorSwatches .swatch').forEach(s=>s.classList.remove('active'));
  el.classList.add('active');
}
function selectSize(size, el){
  activeProductSelection.size = size;
  document.querySelectorAll('#sizeButtons .size-btn').forEach(s=>s.classList.remove('active'));
  el.classList.add('active');
}
function changeQty(delta){
  activeProductSelection.qty = Math.max(1, activeProductSelection.qty + delta);
  document.getElementById('qtyDisplay').textContent = activeProductSelection.qty;
}

/* ================= CART ================= */
function saveCart(){
  localStorage.setItem('mukenaria_cart', JSON.stringify(CART));
  updateCartUI();
}
function addToCart(){
  const p = currentProduct;
  const sel = activeProductSelection;
  const existing = CART.find(c=>c.id===p.id && c.color===sel.color && c.size===sel.size);
  if(existing){
    existing.qty += sel.qty;
  } else {
    CART.push({ id:p.id, name:p.name, price:p.price, img:p.img, color:sel.color, size:sel.size, qty:sel.qty });
  }
  saveCart();
  closeModal('productOverlay');
  showToast(`Terima kasih! Produk "${p.name}" (${sel.qty}x) berhasil ditambahkan ke keranjang.`, 3000);
  openCart();
}
function updateCartQty(index, delta){
  CART[index].qty += delta;
  const removedName = CART[index].name;
  if(CART[index].qty <= 0){
    CART.splice(index,1);
    showToast(`Produk "${removedName}" berhasil dikurangi dari keranjang.`, 2500);
  } else {
    showToast(`Jumlah "${removedName}" diperbarui menjadi ${CART[index].qty}.`, 2200);
  }
  saveCart();
}
function removeCartItem(index){
  const name = CART[index].name;
  CART.splice(index,1);
  saveCart();
  showToast(`Terima kasih, produk "${name}" berhasil dihapus dari keranjang.`, 2500);
}
function updateCartUI(){
  const count = CART.reduce((s,c)=>s+c.qty,0);
  document.getElementById('cartCount').textContent = count;
  const list = document.getElementById('cartItemsList');
  list.innerHTML = '';
  let total = 0;
  if(CART.length===0){
    list.innerHTML = '<p style="color:#888; text-align:center; margin-top:30px;">Keranjang masih kosong.</p>';
  }
  CART.forEach((item, idx)=>{
    total += item.price * item.qty;
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="ci-info">
        <h4>${item.name}</h4>
        <div class="ci-meta">Warna: ${item.color} • Ukuran: ${item.size}</div>
        <div class="ci-meta">${formatRp(item.price)}</div>
        <div class="ci-qty">
          <button onclick="updateCartQty(${idx},-1)">−</button>
          <span>${item.qty}</span>
          <button onclick="updateCartQty(${idx},1)">+</button>
          <button onclick="removeCartItem(${idx})" style="margin-left:auto; color:#a94442; border:none; background:none;">Hapus</button>
        </div>
      </div>`;
    list.appendChild(row);
  });
  document.getElementById('cartTotal').textContent = formatRp(total);
}
function openCart(){ document.getElementById('cartPanel').classList.add('open'); }
function closeCart(){ document.getElementById('cartPanel').classList.remove('open'); }

/* ================= CHECKOUT ================= */
let promoDiscount = 0;
let promoLabel = '';

function openCheckout(){
  if(CART.length===0){ showToast('Keranjang kamu masih kosong. Silakan tambahkan produk terlebih dahulu.'); return; }
  closeCart();
  if(currentCustomer){
    document.getElementById('coName').value = currentCustomer.name || '';
    document.getElementById('coEmail').value = currentCustomer.email || '';
  }
  updateSummary();
  openModal('checkoutOverlay');
}
function selectPayment(method){
  currentPayment = method;
  document.querySelectorAll('.pay-method').forEach(el=>el.classList.remove('active'));
  document.querySelector(`.pay-method[data-method="${method}"]`).classList.add('active');
  document.querySelectorAll('.pay-detail').forEach(el=>el.classList.remove('show'));
  document.getElementById('detail-'+method).classList.add('show');
}
function applyPromo(){
  const code = document.getElementById('promoCode').value.trim().toUpperCase();
  const subtotal = CART.reduce((s,c)=>s+c.price*c.qty,0);
  promoDiscount = 0; promoLabel='';
  if(code === 'MAHASISWA10'){
    promoDiscount = subtotal * 0.10;
    promoLabel = 'Diskon Mahasiswa 10%';
    showToast('Kode promo mahasiswa berhasil diterapkan! Diskon 10%.');
  } else if(code === ''){
    showToast('Masukkan kode promo terlebih dahulu.');
  } else {
    showToast('Kode promo tidak ditemukan.');
  }
  updateSummary();
}
function updateSummary(){
  const subtotal = CART.reduce((s,c)=>s+c.price*c.qty,0);
  let discount = promoDiscount;
  let minPurchaseLabel = '';
  if(subtotal >= 500000){
    const minDiscount = subtotal * 0.15;
    if(minDiscount > discount){ discount = minDiscount; minPurchaseLabel = ' + Diskon Belanja Min. Rp500rb (15%)'; }
  }
  const total = Math.max(0, subtotal - discount);
  document.getElementById('sumSubtotal').textContent = formatRp(subtotal);
  document.getElementById('sumDiscount').textContent = '- ' + formatRp(discount) + (promoLabel? ' ('+promoLabel+minPurchaseLabel+')' : (minPurchaseLabel? ' ('+minPurchaseLabel.replace(' + ','')+')':''));
  document.getElementById('sumTotal').textContent = formatRp(total);
}

function submitOrder(){
  const name = document.getElementById('coName').value.trim();
  const phone = document.getElementById('coPhone').value.trim();
  const email = document.getElementById('coEmail').value.trim();
  const address = document.getElementById('coAddress').value.trim();

  if(!name || !phone || !email || !address){
    showToast('Mohon lengkapi nama, nomor telepon, email, dan alamat terlebih dahulu.');
    return;
  }
  if(!currentPayment){
    showToast('Silakan pilih metode pembayaran terlebih dahulu.');
    return;
  }

  const subtotal = CART.reduce((s,c)=>s+c.price*c.qty,0);
  let discount = promoDiscount;
  if(subtotal >= 500000){
    const minDiscount = subtotal * 0.15;
    if(minDiscount > discount) discount = minDiscount;
  }
  const total = Math.max(0, subtotal - discount);

  let paymentDetail = '';
  if(currentPayment === 'qris') paymentDetail = 'QRIS';
  if(currentPayment === 'cod') paymentDetail = 'COD (Bayar di Tempat)';
  if(currentPayment === 'bank'){
    const bank = document.getElementById('bankSelect').value;
    const acc = document.getElementById('bankAccount').value.trim();
    paymentDetail = `Transfer Bank ${bank}${acc? ' (No. Rek Pembeli: '+acc+')':''}`;
  }
  if(currentPayment === 'ewallet'){
    const ew = document.getElementById('ewalletSelect').value;
    const acc = document.getElementById('ewalletAccount').value.trim();
    paymentDetail = `E-Wallet ${ew}${acc? ' (No. HP: '+acc+')':''}`;
  }

  const itemsText = CART.map(c=>`- ${c.name} (${c.color}, ${c.size}) x${c.qty} = ${formatRp(c.price*c.qty)}`).join('%0A');

  const message =
`*PESANAN BARU - MUKENARIA*%0A%0A`+
`Nama: ${encodeURIComponent(name)}%0A`+
`No. HP: ${encodeURIComponent(phone)}%0A`+
`Email: ${encodeURIComponent(email)}%0A`+
`Alamat: ${encodeURIComponent(address)}%0A%0A`+
`*Detail Pesanan:*%0A${itemsText}%0A%0A`+
`Subtotal: ${formatRp(subtotal)}%0A`+
`Diskon: ${formatRp(discount)}%0A`+
`*Total: ${formatRp(total)}*%0A%0A`+
`Metode Pembayaran: ${encodeURIComponent(paymentDetail)}`;

  // Kirim ke WhatsApp pemilik untuk konfirmasi
  const waLink = `https://wa.me/${OWNER_WHATSAPP}?text=${message}`;
  window.open(waLink, '_blank');

  // Simulasi pengiriman otomatis ke email pemilik
  const mailBody = `Nama: ${name}%0ATelepon: ${phone}%0AEmail: ${email}%0AAlamat: ${address}%0A%0APesanan:%0A${itemsText.replace(/%0A/g,'%0A')}%0A%0ATotal: ${formatRp(total)}%0APembayaran: ${paymentDetail}`;
  const mailLink = `mailto:${OWNER_EMAIL}?subject=Pesanan Baru Mukenaria dari ${encodeURIComponent(name)}&body=${mailBody}`;

  // update stock
  CART.forEach(item=>{
    STOCK[item.id] = Math.max(0, (STOCK[item.id]||0) - item.qty);
  });
  localStorage.setItem('mukenaria_stock', JSON.stringify(STOCK));

  ORDER_COUNT += 1;
  localStorage.setItem('mukenaria_orders', ORDER_COUNT);

  CART = [];
  saveCart();
  closeModal('checkoutOverlay');
  renderCatalog();
  showToast(`Terima kasih ${name}! Pesanan kamu berhasil dikirim. Silakan lanjutkan konfirmasi di WhatsApp yang baru terbuka.`, 4500);
}

/* ================= REVIEWS ================= */
function setRating(n){
  currentRating = n;
  document.querySelectorAll('#starInput span').forEach((s,i)=>{
    s.classList.toggle('active', i < n);
  });
}
function submitReview(){
  const name = document.getElementById('revName').value.trim();
  const text = document.getElementById('revText').value.trim();
  if(!name || !text || currentRating===0){
    showToast('Mohon isi nama, ulasan, dan pilih rating bintang terlebih dahulu.');
    return;
  }
  REVIEWS.unshift({ name, rating: currentRating, text, date: 'Baru saja' });
  localStorage.setItem('mukenaria_reviews', JSON.stringify(REVIEWS));
  document.getElementById('revName').value='';
  document.getElementById('revText').value='';
  currentRating = 0;
  document.querySelectorAll('#starInput span').forEach(s=>s.classList.remove('active'));
  renderReviews();
  showToast('Terima kasih atas ulasan kamu!');
}
function renderReviews(){
  const list = document.getElementById('reviewList');
  list.innerHTML = '';
  REVIEWS.forEach(r=>{
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
      <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
      <h4>${r.name}</h4>
      <p style="font-size:.88rem;">${r.text}</p>
      <div class="review-date">${r.date}</div>`;
    list.appendChild(card);
  });
}

/* ================= AUTH ================= */
function openAuthModal(){ openModal('authOverlay'); }
function switchAuthTab(tab){
  document.getElementById('tabCustomer').classList.toggle('active', tab==='customer');
  document.getElementById('tabAdmin').classList.toggle('active', tab==='admin');
  document.getElementById('customerLoginForm').style.display = tab==='customer' ? 'block':'none';
  document.getElementById('adminLoginForm').style.display = tab==='admin' ? 'block':'none';
}
function customerLogin(){
  const name = document.getElementById('custName').value.trim();
  const email = document.getElementById('custEmail').value.trim();
  if(!name || !email){ showToast('Mohon isi nama dan email.'); return; }
  currentCustomer = { name, email };
  localStorage.setItem('mukenaria_customer', JSON.stringify(currentCustomer));
  closeModal('authOverlay');
  showToast(`Selamat datang, ${name}! Kamu berhasil login.`);
}
function adminLogin(){
  const user = document.getElementById('adminUser').value.trim();
  const pass = document.getElementById('adminPass').value.trim();
  if(user === 'admin' && pass === 'mukenaria123'){
    closeModal('authOverlay');
    openAdminPanel();
    showToast('Login admin berhasil.');
  } else {
    showToast('Username atau password admin salah.');
  }
}
function openAdminPanel(){
  const visitors = localStorage.getItem('mukenaria_visitors') || 0;
  document.getElementById('statVisitors').textContent = visitors;
  document.getElementById('statOrders').textContent = ORDER_COUNT;
  const totalStock = Object.values(STOCK).reduce((a,b)=>a+b,0);
  document.getElementById('statStock').textContent = totalStock;

  const tbody = document.getElementById('stockTableBody');
  tbody.innerHTML = '';
  PRODUCTS.forEach(p=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${p.name}</td>
      <td>${p.category}</td>
      <td><input type="number" min="0" value="${STOCK[p.id]}" id="stock-${p.id}"></td>
      <td><button class="btn small" onclick="updateStock(${p.id})">Simpan</button></td>`;
    tbody.appendChild(tr);
  });
  openModal('adminOverlay');
}
function updateStock(id){
  const val = parseInt(document.getElementById('stock-'+id).value) || 0;
  STOCK[id] = val;
  localStorage.setItem('mukenaria_stock', JSON.stringify(STOCK));
  showToast('Stok produk berhasil diperbarui.');
  renderCatalog();
  const totalStock = Object.values(STOCK).reduce((a,b)=>a+b,0);
  document.getElementById('statStock').textContent = totalStock;
}

/* ================= CLOSE OVERLAY ON BACKDROP CLICK ================= */
document.querySelectorAll('.overlay').forEach(ov=>{
  ov.addEventListener('click', (e)=>{
    if(e.target === ov) ov.classList.remove('show');
  });
});

/* ================= INIT ================= */
populateCategoryFilter();
renderCatalog();
renderReviews();
updateCartUI();

