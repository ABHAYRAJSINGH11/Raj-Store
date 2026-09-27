// ====================== PRODUCTS DATA (loaded from backend API) ======================
const API_BASE = "https://raj-store-tju8.onrender.com/api";
let products = [];

async function loadProducts() {
  try {
    const res = await fetch(`${API_BASE}/products`);
    if (!res.ok) throw new Error(`API responded with ${res.status}`);
    products = await res.json();
  } catch (err) {
    console.error("Failed to load products from API:", err);
    showToast("Could not reach the store server. Is the backend running?", "error");
    products = [];
  }
}

let cart = [];
let wishlist = [];

// ====================== HELPERS ======================

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= full) html += '<i class="fas fa-star" style="color:#f59e0b;font-size:0.85rem;"></i>';
    else if (i === full + 1 && half) html += '<i class="fas fa-star-half-alt" style="color:#f59e0b;font-size:0.85rem;"></i>';
    else html += '<i class="far fa-star" style="color:#f59e0b;font-size:0.85rem;"></i>';
  }
  return html;
}

function renderReviewStars(stars) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<i class="${i <= stars ? 'fas' : 'far'} fa-star" style="color:#f59e0b;font-size:0.8rem;"></i>`;
  }
  return html;
}

// ====================== SHOW MAIN STORE ======================

async function showMainStore() {
  const clerkScreen = document.getElementById('clerk-auth-screen');
  if (clerkScreen) clerkScreen.style.display = 'none';
  document.getElementById('main-content').classList.remove('hidden');
  await loadProducts();
  renderProducts();
  updateCartCount();
  updateWishlistCount();
  updateNavProfile();
}

// ====================== PRODUCT FUNCTIONS ======================

function renderProducts(filteredProducts = products) {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = '';

  filteredProducts.forEach(product => {
    const isWishlisted = wishlist.some(item => item.id === product.id);
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <i class="fas fa-heart wishlist-heart ${isWishlisted ? 'liked' : ''}" data-id="${product.id}"></i>
      <img src="${product.img}" alt="${product.name}" class="product-img" loading="lazy" onerror="this.src='https://source.unsplash.com/600x600/?'+encodeURIComponent(this.alt)">
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <div class="product-rating" style="margin:6px 0 4px;">
          ${renderStars(product.rating)}
          <span style="font-size:0.82rem;color:#888;margin-left:5px;">(${product.reviewCount})</span>
        </div>
        <p class="price">₹${product.price.toLocaleString('en-IN')}</p>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
      </div>
    `;
    grid.appendChild(card);
  });

  addProductEventListeners();
}

function addProductEventListeners() {
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(parseInt(btn.dataset.id));
    });
  });

  document.querySelectorAll('.product-img, .product-title').forEach(el => {
    el.addEventListener('click', () => {
      const card = el.closest('.product-card');
      const id = parseInt(card.querySelector('.add-to-cart').dataset.id);
      showQuickView(id);
    });
  });

  document.querySelectorAll('.wishlist-heart').forEach(heart => {
    heart.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWishlist(parseInt(heart.dataset.id), heart);
    });
  });
}

// ====================== SEARCH & FILTER ======================

let activeCategory = 'all';

function setCategoryFromDropdown(val) {
  activeCategory = val;
  filterProducts();
}

function clearAllFilters() {
  activeCategory = 'all';
  const els = {
    cat:    document.getElementById('category-select'),
    price:  document.getElementById('price-range-select'),
    rating: document.getElementById('rating-select'),
    sort:   document.getElementById('sort-select'),
    search: document.getElementById('search-input'),
  };
  if (els.cat)    els.cat.value    = 'all';
  if (els.price)  els.price.value  = 'all';
  if (els.rating) els.rating.value = '0';
  if (els.sort)   els.sort.value   = 'default';
  if (els.search) els.search.value = '';
  filterProducts();
}

function filterProducts() {
  const searchTerm = (document.getElementById('search-input')?.value || '').toLowerCase().trim();
  const sortValue  = document.getElementById('sort-select')?.value   || 'default';
  const priceRange = document.getElementById('price-range-select')?.value || 'all';
  const minRating  = parseFloat(document.getElementById('rating-select')?.value || '0');

  let filtered = products.filter(p => {
    // Search match
    const matchSearch = p.name.toLowerCase().includes(searchTerm)
                     || p.description.toLowerCase().includes(searchTerm);

    // Category match
    const matchCat = activeCategory === 'all' || p.category === activeCategory;

    // Price range match
    let matchPrice = true;
    if (priceRange !== 'all') {
      const [lo, hi] = priceRange.split('-').map(Number);
      matchPrice = p.price >= lo && p.price <= hi;
    }

    // Rating match
    const matchRating = p.rating >= minRating;

    return matchSearch && matchCat && matchPrice && matchRating;
  });

  // Sort
  if      (sortValue === 'price-low')  filtered.sort((a, b) => a.price - b.price);
  else if (sortValue === 'price-high') filtered.sort((a, b) => b.price - a.price);
  else if (sortValue === 'name')       filtered.sort((a, b) => a.name.localeCompare(b.name));
  else if (sortValue === 'rating')     filtered.sort((a, b) => b.rating - a.rating);

  // Product count badge
  const countEl = document.getElementById('product-count');
  if (countEl) countEl.textContent = `${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;

  renderProducts(filtered);
}

// ====================== CART FUNCTIONS ======================

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) existing.quantity += 1;
  else cart.push({ ...product, quantity: 1 });
  updateCartCount();
  showToast(`${product.name} added to cart!`, 'success');
}

function updateCartCount() {
  const count = cart.reduce((acc, item) => acc + item.quantity, 0);
  document.getElementById('cart-count').textContent = count;
}

function renderCart() {
  const container = document.getElementById('cart-items');
  container.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}" onerror="this.src='https://source.unsplash.com/600x600/?'+encodeURIComponent(this.alt)">
      <div class="cart-item-content">
        <h4>${item.name}</h4>
        <p>₹${item.price.toLocaleString('en-IN')} × ${item.quantity}</p>
        <div class="quantity-control">
          <button class="qty-btn minus" data-index="${index}">-</button>
          <span>${item.quantity}</span>
          <button class="qty-btn plus" data-index="${index}">+</button>
        </div>
        <strong>₹${itemTotal.toLocaleString('en-IN')}</strong>
      </div>
      <button class="remove-btn" data-index="${index}" title="Remove">
        <i class="fas fa-trash"></i>
      </button>
    `;
    container.appendChild(div);
  });

  document.getElementById('cart-total').textContent = total.toLocaleString('en-IN');
  document.getElementById('cart-items-count').textContent = cart.length;
  addCartEventListeners();
}

function addCartEventListeners() {
  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.dataset.index);
      if (btn.classList.contains('plus')) cart[index].quantity += 1;
      else if (cart[index].quantity > 1) cart[index].quantity -= 1;
      else cart.splice(index, 1);
      updateCartCount();
      renderCart();
    });
  });

  document.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.dataset.index);
      const name = cart[index].name;
      cart.splice(index, 1);
      updateCartCount();
      renderCart();
      showToast(`${name} removed from cart`, 'info');
    });
  });
}



// ====================== WISHLIST FUNCTIONS ======================

function toggleWishlist(id, heartElement) {
  const product = products.find(p => p.id === id);
  const index = wishlist.findIndex(item => item.id === id);
  if (index === -1) {
    wishlist.push(product);
    heartElement.classList.add('liked');
    showToast(`${product.name} added to wishlist ❤️`, 'success');
  } else {
    wishlist.splice(index, 1);
    heartElement.classList.remove('liked');
    showToast(`${product.name} removed from wishlist`, 'info');
  }
  updateWishlistCount();
  saveWishlistForUser(); // persist per-user
}

function updateWishlistCount() {
  const count = wishlist.length;
  document.getElementById('wishlist-count').textContent = count;
  const navBadge = document.getElementById('wishlist-nav-count');
  if (navBadge) {
    navBadge.textContent = count;
    navBadge.style.display = count > 0 ? 'block' : 'none';
  }
}

function renderWishlist() {
  const container = document.getElementById('wishlist-items');
  container.innerHTML = '';
  if (wishlist.length === 0) {
    container.innerHTML = '<p style="text-align:center; padding:2rem; color:#888;">Your wishlist is empty</p>';
    return;
  }
  wishlist.forEach((product, index) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <div class="cart-item-content">
        <h4>${product.name}</h4>
        <p class="price">₹${product.price.toLocaleString('en-IN')}</p>
        <button class="wishlist-add-cart-btn" data-id="${product.id}"
                style="margin-top:8px; padding:8px 14px; font-size:0.85rem; font-weight:600;
                       background: linear-gradient(135deg,#7c3aed,#c026d3); color:white;
                       border:none; border-radius:8px; cursor:pointer;">
          <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
      <button class="remove-btn" data-index="${index}" title="Remove">
        <i class="fas fa-trash"></i>
      </button>
    `;
    container.appendChild(div);
  });

  document.querySelectorAll('#wishlist-items .wishlist-add-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => addToCart(parseInt(btn.dataset.id)));
  });

  document.querySelectorAll('#wishlist-items .remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.dataset.index);
      const name = wishlist[index].name;
      wishlist.splice(index, 1);
      updateWishlistCount();
      renderWishlist();
      renderProducts();
      showToast(`${name} removed from wishlist`, 'info');
    });
  });
}



// ====================== QUICK VIEW MODAL ======================

function showQuickView(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const modal = document.getElementById('quick-view-modal');
  const content = document.getElementById('quick-view-content');
  const isWishlisted = wishlist.some(item => item.id === product.id);

  const reviewsHTML = product.reviews.map(r => `
    <div style="padding:10px 0; border-bottom:1px solid #f0e6ff;">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
        <strong style="color:#4c1d95;font-size:0.9rem;">${r.author}</strong>
        <span>${renderReviewStars(r.stars)}</span>
      </div>
      <p style="font-size:0.85rem;color:#555;line-height:1.5;">${r.text}</p>
    </div>
  `).join('');

  content.innerHTML = `
    <div style="flex:1;min-width:220px;">
      <img src="${product.img}" alt="${product.name}" style="width:100%;border-radius:16px;object-fit:cover;max-height:300px;" onerror="this.src='https://source.unsplash.com/600x600/?'+encodeURIComponent(this.alt)">
    </div>
    <div class="quick-view-info" style="flex:1;min-width:220px;">
      <h2 style="color:#4c1d95;margin-bottom:6px;">${product.name}</h2>
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:10px;">
        ${renderStars(product.rating)}
        <span style="font-size:0.85rem;color:#888;">${product.rating} (${product.reviewCount} reviews)</span>
      </div>
      <p class="price" style="font-size:1.9rem;font-weight:700;color:#7c3aed;">₹${product.price.toLocaleString('en-IN')}</p>
      <p style="margin:12px 0;line-height:1.65;color:#444;font-size:0.95rem;">${product.description}</p>
      <span style="display:inline-block;padding:4px 12px;background:#f3e8ff;color:#7c3aed;border-radius:20px;font-size:0.8rem;font-weight:600;text-transform:capitalize;margin-bottom:16px;">${product.category}</span>
      <button class="add-to-cart" data-id="${product.id}"
              style="width:100%;margin-top:4px;padding:14px;font-size:1rem;">
        <i class="fas fa-shopping-cart"></i> Add to Cart
      </button>
      <button class="qv-wishlist-btn" data-id="${product.id}"
              style="width:100%;margin-top:10px;padding:13px;font-size:0.95rem;font-weight:600;
                     border-radius:12px;cursor:pointer;transition:0.3s;
                     border:2px solid ${isWishlisted ? '#e74c3c' : '#e0bbff'};
                     background:${isWishlisted ? '#fff0f0' : 'white'};
                     color:${isWishlisted ? '#e74c3c' : '#7c3aed'};">
        <i class="fas fa-heart"></i> ${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
      </button>

      <div style="margin-top:20px;">
        <h4 style="color:#4c1d95;margin-bottom:8px;font-size:1rem;">Customer Reviews</h4>
        ${reviewsHTML}
      </div>
    </div>
  `;

  modal.style.display = 'flex';

  content.querySelector('.add-to-cart').addEventListener('click', () => addToCart(product.id));

  content.querySelector('.qv-wishlist-btn').addEventListener('click', (e) => {
    const btn = e.currentTarget;
    const idx = wishlist.findIndex(item => item.id === product.id);
    if (idx === -1) {
      wishlist.push(product);
      btn.style.cssText += 'border:2px solid #e74c3c;background:#fff0f0;color:#e74c3c;';
      btn.innerHTML = '<i class="fas fa-heart"></i> Remove from Wishlist';
      showToast(`${product.name} added to wishlist ❤️`, 'success');
    } else {
      wishlist.splice(idx, 1);
      btn.style.cssText += 'border:2px solid #e0bbff;background:white;color:#7c3aed;';
      btn.innerHTML = '<i class="fas fa-heart"></i> Add to Wishlist';
      showToast(`${product.name} removed from wishlist`, 'info');
    }
    updateWishlistCount();
    renderProducts();
  });
}



// ====================== TOAST NOTIFICATIONS ======================

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span style="font-size:1.4rem;">${type === 'info' ? 'ℹ' : '✓'}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ====================== USER / PROFILE SYSTEM (Clerk-powered) ======================
//
// Orders and per-user data are stored in localStorage keyed by the Clerk userId.
// This means each Google account (or email account) gets its own isolated
// order history, wishlist, addresses, and preferences — even on the same device.
//
// Storage key pattern:
//   rajs_orders_{userId}        → array of orders
//   rajs_addresses_{userId}     → array of saved addresses
//   rajs_prefs_{userId}         → preferences object
//   rajs_wishlist_{userId}      → array of wished product ids
//
// For guests (no Clerk session) we use key suffix "guest".

let currentUser = null;
// Shape: { id, name, email, avatar, loginMethod, joinedDate }

// ── Key helpers ────────────────────────────────────────────────
function userKey(suffix) {
  const uid = (currentUser && currentUser.id) ? currentUser.id : 'guest';
  return `rajs_${suffix}_${uid}`;
}

// ── User session ───────────────────────────────────────────────
function loadUser() {
  // Clerk sets currentUser before calling this via initClerkAuth().
  // For guest sessions we check the old guest flag.
  if (!currentUser) {
    const guestFlag = sessionStorage.getItem('rajs_guest_session');
    if (guestFlag === 'true') currentUser = null; // explicit guest
  }
}

function saveUser() {
  // With Clerk, the session is managed by Clerk itself.
  // We only need to persist the guest flag for the current tab session.
  if (!currentUser) {
    sessionStorage.setItem('rajs_guest_session', 'true');
  } else {
    sessionStorage.removeItem('rajs_guest_session');
  }
}

// ── Orders (per-user) ──────────────────────────────────────────
function loadOrders() {
  const key = userKey('orders');
  const saved = localStorage.getItem(key);
  if (saved) {
    try { return JSON.parse(saved); } catch(e) { return []; }
  }
  return [];
}

function saveOrder(orderItems, total) {
  const orders = loadOrders();
  const order = {
    id: 'RJ' + Date.now().toString().slice(-8),
    date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    items: orderItems.map(i => ({ id: i.id, name: i.name, price: i.price, quantity: i.quantity, img: i.img })),
    total,
    status: 'Processing'
  };
  orders.unshift(order);
  localStorage.setItem(userKey('orders'), JSON.stringify(orders.slice(0, 50)));
  return order;
}

// ── Wishlist (per-user) override ───────────────────────────────
// The existing wishlist array is loaded on init; we reload it after login.
function loadWishlistForUser() {
  const saved = localStorage.getItem(userKey('wishlist'));
  if (saved) {
    try { wishlist = JSON.parse(saved); } catch(e) { wishlist = []; }
  } else {
    wishlist = [];
  }
  updateWishlistCount();
}

function saveWishlistForUser() {
  localStorage.setItem(userKey('wishlist'), JSON.stringify(wishlist));
}

function getInitials(name) {
  if (!name) return '?';
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

function updateNavProfile() {
  const mini = document.getElementById('profile-avatar-mini');
  if (!mini) return;
  if (currentUser) {
    if (currentUser.avatar) {
      mini.innerHTML = `<img src="${currentUser.avatar}" alt="${currentUser.name}">`;
    } else {
      mini.innerHTML = getInitials(currentUser.name);
      mini.style.fontSize = '0.85rem';
    }
  } else {
    mini.innerHTML = '<i class="fas fa-user"></i>';
    mini.style.fontSize = '';
  }
}

// ====================== CLERK AUTH INTEGRATION ======================

let _clerkStoreReady = false;   // true once we've shown the main store
let _clerkLastUserId = null;    // tracks last seen user id to avoid duplicate triggers
let _clerkSignInMounted = false; // ensures mountSignIn is only called once

async function initClerkAuth() {
  await window.Clerk.load();

  const clerkScreen = document.getElementById('clerk-auth-screen');
  const skipBtn = document.getElementById('skip-login');

  function showAuthScreen() {
    _clerkStoreReady = false;
    currentUser = null;
    wishlist = [];
    updateWishlistCount();
    updateNavProfile();
    if (clerkScreen) clerkScreen.style.display = 'flex';
    document.getElementById('main-content').classList.add('hidden');

    // Mount Clerk sign-in only once
    if (!_clerkSignInMounted) {
      _clerkSignInMounted = true;
      const container = document.getElementById('clerk-sign-in-container');
      if (container && window.Clerk.mountSignIn) {
        window.Clerk.mountSignIn(container, {
          appearance: {
            variables: {
              colorPrimary: '#7c3aed',
              colorBackground: '#ffffff',
              colorText: '#1f1f2e',
              borderRadius: '12px',
              fontFamily: "'Segoe UI', system-ui, sans-serif",
            }
          }
        });
      }
    }
  }

  function handleSignedIn(clerkUser) {
    // Guard: skip if this user is already loaded and store is showing
    if (_clerkStoreReady && _clerkLastUserId === clerkUser.id) return;

    const primaryEmail = clerkUser.primaryEmailAddress?.emailAddress || '';
    const fullName = clerkUser.fullName || clerkUser.firstName || primaryEmail.split('@')[0] || 'Member';

    const isNewUser = _clerkLastUserId !== clerkUser.id;
    _clerkLastUserId = clerkUser.id;

    currentUser = {
      id: clerkUser.id,
      name: fullName,
      email: primaryEmail,
      avatar: clerkUser.imageUrl || null,
      loginMethod: clerkUser.externalAccounts?.length ? 'google' : 'email',
      joinedDate: new Date(clerkUser.createdAt).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })
    };

    sessionStorage.removeItem('rajs_guest_session');
    loadWishlistForUser();

    if (clerkScreen) clerkScreen.style.display = 'none';

    if (!_clerkStoreReady) {
      _clerkStoreReady = true;
      showMainStore();
    }

    updateNavProfile();

    // Only toast on fresh sign-in, not on every page load
    if (isNewUser) {
      showToast(`Welcome, ${currentUser.name}! 👋`, 'success');
    }
  }

  // Listen to Clerk auth state changes
  window.Clerk.addListener(({ user }) => {
    if (user) {
      handleSignedIn(user);
    } else {
      const isGuest = sessionStorage.getItem('rajs_guest_session') === 'true';
      if (!isGuest && _clerkStoreReady) {
        // User actively signed out
        _clerkStoreReady = false;
        _clerkLastUserId = null;
        showAuthScreen();
      }
    }
  });

  // Initial state on page load
  if (window.Clerk.user) {
    handleSignedIn(window.Clerk.user);
  } else {
    const isGuest = sessionStorage.getItem('rajs_guest_session') === 'true';
    if (isGuest) {
      _clerkStoreReady = true;
      showMainStore();
    } else {
      showAuthScreen();
    }
  }

  // Guest / skip button
  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      sessionStorage.setItem('rajs_guest_session', 'true');
      currentUser = null;
      wishlist = [];
      updateWishlistCount();
      if (clerkScreen) clerkScreen.style.display = 'none';
      _clerkStoreReady = true;
      showMainStore();
      updateNavProfile();
    });
  }
}

// ====================== LOGIN ======================

function initLoginHandlers() {
  // With Clerk, actual auth is handled by initClerkAuth() above.
  // This function is kept so the DOMContentLoaded flow still calls it,
  // but the real work happens in initClerkAuth().
  initCheckout();

  // Clerk SDK is loaded via <script> tag with the async attribute.
  // We wait for the window.Clerk object to be ready.
  function tryInitClerk() {
    if (window.Clerk) {
      initClerkAuth();
    } else {
      // Retry until Clerk script finishes loading (usually < 300ms)
      setTimeout(tryInitClerk, 100);
    }
  }
  tryInitClerk();
}

// ====================== PROFILE SIDEBAR ======================

function renderProfileSidebar() {
  const content = document.getElementById('profile-sidebar-content');
  if (!content) return;

  if (!currentUser) {
    content.innerHTML = `
      <div class="profile-guest-state">
        <div class="profile-avatar-large" style="margin:0 auto 12px;"><i class="fas fa-user"></i></div>
        <h4>You're browsing as a guest</h4>
        <p>Sign in to track orders, save your wishlist, and get personalised recommendations.</p>
        <button class="profile-signin-now-btn" onclick="showLoginFromProfile()">
          <i class="fas fa-sign-in-alt"></i> Sign In / Create Account
        </button>
      </div>
    `;
    return;
  }

  const orders = loadOrders();
  const totalSpent = orders.reduce((s, o) => s + o.total, 0);
  const wishCount = wishlist.length;

  const avatarHTML = currentUser.avatar
    ? `<img src="${currentUser.avatar}" alt="${currentUser.name}">`
    : getInitials(currentUser.name);

  const googleBadge = currentUser.loginMethod === 'google'
    ? `<div class="google-linked-badge"><svg width="12" height="12" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.34-8.16 2.34-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg> Google Account</div>`
    : '';

  content.innerHTML = `
    <div class="profile-card">
      <div class="profile-avatar-large">${avatarHTML}</div>
      <div class="profile-name">${currentUser.name}</div>
      <div class="profile-email">${currentUser.email}</div>
      ${googleBadge}
      <div class="profile-badge"><i class="fas fa-star"></i> Member since ${currentUser.joinedDate}</div>
    </div>

    <div class="profile-stats">
      <div class="profile-stat">
        <div class="profile-stat-num">${orders.length}</div>
        <div class="profile-stat-label">Orders</div>
      </div>
      <div class="profile-stat">
        <div class="profile-stat-num">${wishCount}</div>
        <div class="profile-stat-label">Wishlist</div>
      </div>
      <div class="profile-stat">
        <div class="profile-stat-num">₹${Math.round(totalSpent / 1000) || 0}k</div>
        <div class="profile-stat-label">Spent</div>
      </div>
    </div>

    <div class="profile-menu">
      <button class="profile-menu-item" onclick="openProfilePanel('orders')">
        <i class="fas fa-box"></i>
        <span class="menu-label">My Orders</span>
        ${orders.length > 0 ? `<span class="menu-badge">${orders.length}</span>` : ''}
        <i class="fas fa-chevron-right menu-arrow"></i>
      </button>
      <button class="profile-menu-item" onclick="openProfilePanel('edit')">
        <i class="fas fa-user-edit"></i>
        <span class="menu-label">Edit Profile</span>
        <i class="fas fa-chevron-right menu-arrow"></i>
      </button>
      <button class="profile-menu-item" onclick="openProfilePanel('addresses')">
        <i class="fas fa-map-marker-alt"></i>
        <span class="menu-label">Saved Addresses</span>
        <i class="fas fa-chevron-right menu-arrow"></i>
      </button>
      <button class="profile-menu-item" onclick="openProfilePanel('settings')">
        <i class="fas fa-cog"></i>
        <span class="menu-label">Preferences</span>
        <i class="fas fa-chevron-right menu-arrow"></i>
      </button>
    </div>

    <button class="profile-logout-btn" onclick="logoutUser()">
      <i class="fas fa-sign-out-alt"></i> Sign Out
    </button>
  `;
}

function showLoginFromProfile() {
  document.getElementById('profile-sidebar').classList.remove('open');
  // Clear guest flag so Clerk auth screen shows properly
  sessionStorage.removeItem('rajs_guest_session');
  currentUser = null;
  document.getElementById('main-content').classList.add('hidden');
  document.getElementById('clerk-auth-screen').style.display = 'flex';
}

async function logoutUser() {
  document.getElementById('profile-sidebar').classList.remove('open');
  showToast("Signing you out… See you soon! 👋", 'info');

  if (window.Clerk && window.Clerk.signOut) {
    // Clerk handles session invalidation and redirects auth state change listener
    await window.Clerk.signOut();
    // The Clerk listener in initClerkAuth will fire and show the auth screen
  } else {
    // Fallback for guest mode
    currentUser = null;
    sessionStorage.removeItem('rajs_guest_session');
    wishlist = [];
    updateWishlistCount();
    updateNavProfile();
    document.getElementById('clerk-auth-screen').style.display = 'flex';
    document.getElementById('main-content').classList.add('hidden');
  }
}

// ====================== PROFILE PANELS ======================

function openProfilePanel(section) {
  document.getElementById('profile-sidebar').classList.remove('open');
  const overlay = document.getElementById('profile-panel-overlay');
  const title = document.getElementById('profile-panel-title');
  const body = document.getElementById('profile-panel-body');

  overlay.classList.remove('hidden');

  if (section === 'orders') {
    title.textContent = 'My Orders';
    renderOrdersPanel(body);
  } else if (section === 'edit') {
    title.textContent = 'Edit Profile';
    renderEditProfilePanel(body);
  } else if (section === 'addresses') {
    title.textContent = 'Saved Addresses';
    renderAddressesPanel(body);
  } else if (section === 'settings') {
    title.textContent = 'Preferences';
    renderSettingsPanel(body);
  }
}

function renderOrdersPanel(body) {
  const orders = loadOrders();
  if (orders.length === 0) {
    body.innerHTML = `
      <div class="orders-empty">
        <i class="fas fa-box-open"></i>
        <h4>No orders yet</h4>
        <p>Your order history will appear here once you make a purchase.</p>
      </div>
    `;
    return;
  }

  const statusClass = { 'Delivered': 'status-delivered', 'Processing': 'status-processing', 'Shipped': 'status-shipped' };

  body.innerHTML = orders.map(order => `
    <div class="order-card">
      <div class="order-card-header">
        <div>
          <div class="order-id">#${order.id}</div>
          <div class="order-date">${order.date}</div>
        </div>
        <span class="order-status ${statusClass[order.status] || 'status-processing'}">${order.status}</span>
      </div>
      <div class="order-items-list">
        ${order.items.map(item => `
          <div class="order-item-row">
            <img class="order-item-img" src="${item.img}" alt="${item.name}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=f3e8ff&color=7c3aed'">
            <div class="order-item-info">
              <div class="order-item-name">${item.name}</div>
              <div class="order-item-qty">Qty: ${item.quantity}</div>
            </div>
            <div class="order-item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
          </div>
        `).join('')}
      </div>
      <div class="order-card-footer">
        <span class="order-total-label">${order.items.reduce((s,i) => s + i.quantity, 0)} item${order.items.length !== 1 ? 's' : ''}</span>
        <span class="order-total-amount">₹${order.total.toLocaleString('en-IN')}</span>
      </div>
    </div>
  `).join('');
}

function renderEditProfilePanel(body) {
  const u = currentUser;
  body.innerHTML = `
    <div class="edit-profile-form">
      <div style="text-align:center;margin-bottom:8px;">
        <div class="profile-avatar-large" style="margin:0 auto 8px;">
          ${u.avatar ? `<img src="${u.avatar}" alt="${u.name}">` : getInitials(u.name)}
        </div>
        <div style="font-size:0.8rem;color:#9061f9;">Profile photo from ${u.loginMethod === 'google' ? 'Google' : 'initials'}</div>
      </div>
      <div class="form-row">
        <label class="form-label">Full Name</label>
        <input class="form-input" id="edit-name" type="text" value="${u.name}" placeholder="Your full name">
      </div>
      <div class="form-row">
        <label class="form-label">Email</label>
        <input class="form-input" id="edit-email" type="email" value="${u.email}" placeholder="Email address">
      </div>
      <div class="form-row">
        <label class="form-label">Phone</label>
        <input class="form-input" id="edit-phone" type="tel" value="${u.phone || ''}" placeholder="+91 XXXXX XXXXX">
      </div>
      <div class="form-row">
        <label class="form-label">Date of Birth</label>
        <input class="form-input" id="edit-dob" type="date" value="${u.dob || ''}">
      </div>
      <button class="save-profile-btn" onclick="saveProfileEdits()">
        <i class="fas fa-save"></i> Save Changes
      </button>
    </div>
  `;
}

function saveProfileEdits() {
  const name = document.getElementById('edit-name').value.trim();
  const email = document.getElementById('edit-email').value.trim();
  const phone = document.getElementById('edit-phone').value.trim();
  const dob = document.getElementById('edit-dob').value;

  if (!name || !email) { showToast('Name and email are required', 'info'); return; }
  currentUser.name = name;
  currentUser.email = email;
  currentUser.phone = phone;
  currentUser.dob = dob;
  if (currentUser.loginMethod !== 'google') {
    currentUser.avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=7c3aed&color=fff&size=128`;
  }
  saveUser();
  updateNavProfile();
  showToast('Profile updated successfully! ✅', 'success');
  document.getElementById('profile-panel-overlay').classList.add('hidden');
}

function renderAddressesPanel(body) {
  const addrs = JSON.parse(localStorage.getItem(userKey('addresses')) || '[]');
  body.innerHTML = `
    <div style="margin-bottom:20px;">
      ${addrs.length === 0 ? `
        <div class="orders-empty">
          <i class="fas fa-map-marker-alt"></i>
          <h4>No saved addresses</h4>
          <p>Add a delivery address for faster checkout.</p>
        </div>
      ` : addrs.map((a, i) => `
        <div class="order-card" style="margin-bottom:12px;">
          <div style="padding:14px 18px;display:flex;justify-content:space-between;align-items:flex-start;gap:12px;">
            <div>
              <div style="font-weight:700;color:#4c1d95;margin-bottom:2px;">${a.label || 'Address'}</div>
              <div style="font-size:0.88rem;color:#555;line-height:1.6;">${a.line1}, ${a.city}, ${a.state} - ${a.pin}</div>
            </div>
            <button onclick="deleteAddress(${i})" style="background:#fff0f0;border:1.5px solid #fca5a5;color:#dc2626;border-radius:8px;padding:6px 10px;cursor:pointer;font-size:0.8rem;white-space:nowrap;font-family:inherit;">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="edit-profile-form" style="border-top:1px solid #f0e6ff;padding-top:20px;">
      <div style="font-weight:700;color:#4c1d95;margin-bottom:12px;font-size:1rem;">+ Add New Address</div>
      <div class="form-row">
        <label class="form-label">Label (Home / Work)</label>
        <input class="form-input" id="addr-label" placeholder="Home">
      </div>
      <div class="form-row">
        <label class="form-label">Address Line</label>
        <input class="form-input" id="addr-line1" placeholder="Flat no, Street, Area">
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
        <div class="form-row">
          <label class="form-label">City</label>
          <input class="form-input" id="addr-city" placeholder="Mumbai">
        </div>
        <div class="form-row">
          <label class="form-label">State</label>
          <input class="form-input" id="addr-state" placeholder="Maharashtra">
        </div>
      </div>
      <div class="form-row">
        <label class="form-label">PIN Code</label>
        <input class="form-input" id="addr-pin" placeholder="400001" maxlength="6">
      </div>
      <button class="save-profile-btn" onclick="saveAddress()">
        <i class="fas fa-plus"></i> Add Address
      </button>
    </div>
  `;
}

function saveAddress() {
  const addr = {
    label: document.getElementById('addr-label').value.trim() || 'Home',
    line1: document.getElementById('addr-line1').value.trim(),
    city: document.getElementById('addr-city').value.trim(),
    state: document.getElementById('addr-state').value.trim(),
    pin: document.getElementById('addr-pin').value.trim()
  };
  if (!addr.line1 || !addr.city || !addr.pin) { showToast('Please fill all required fields', 'info'); return; }
  const addrs = JSON.parse(localStorage.getItem(userKey('addresses')) || '[]');
  addrs.push(addr);
  localStorage.setItem(userKey('addresses'), JSON.stringify(addrs));
  showToast('Address saved! 📍', 'success');
  renderAddressesPanel(document.getElementById('profile-panel-body'));
}

function deleteAddress(index) {
  const addrs = JSON.parse(localStorage.getItem(userKey('addresses')) || '[]');
  addrs.splice(index, 1);
  localStorage.setItem(userKey('addresses'), JSON.stringify(addrs));
  renderAddressesPanel(document.getElementById('profile-panel-body'));
  showToast('Address removed', 'info');
}

function renderSettingsPanel(body) {
  const prefs = JSON.parse(localStorage.getItem(userKey('prefs')) || '{"newsletter":true,"smsAlerts":false,"darkMode":false}');
  body.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:0;">
      ${[
        { key:'newsletter', icon:'fas fa-envelope', label:'Email Newsletter', desc:'Deals, new arrivals, and offers' },
        { key:'smsAlerts', icon:'fas fa-sms', label:'SMS Order Alerts', desc:'Track your orders via SMS' },
        { key:'darkMode', icon:'fas fa-moon', label:'Dark Mode (Beta)', desc:'Easy on your eyes at night' },
      ].map(s => `
        <div style="display:flex;align-items:center;gap:16px;padding:18px 0;border-bottom:1px solid #f9f5ff;">
          <div style="width:42px;height:42px;border-radius:12px;background:#f3e8ff;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <i class="${s.icon}" style="color:#7c3aed;font-size:1rem;"></i>
          </div>
          <div style="flex:1;">
            <div style="font-weight:600;color:#333;font-size:0.95rem;">${s.label}</div>
            <div style="font-size:0.8rem;color:#888;">${s.desc}</div>
          </div>
          <label style="position:relative;display:inline-block;width:44px;height:24px;flex-shrink:0;">
            <input type="checkbox" ${prefs[s.key] ? 'checked' : ''} onchange="togglePref('${s.key}', this.checked)"
              style="opacity:0;width:0;height:0;position:absolute;">
            <span style="position:absolute;cursor:pointer;inset:0;background:${prefs[s.key] ? '#7c3aed' : '#ccc'};border-radius:24px;transition:0.3s;"></span>
            <span style="position:absolute;height:18px;width:18px;left:${prefs[s.key] ? '23px' : '3px'};bottom:3px;background:white;border-radius:50%;transition:0.3s;"></span>
          </label>
        </div>
      `).join('')}
    </div>
  `;
}

function togglePref(key, value) {
  const prefs = JSON.parse(localStorage.getItem(userKey('prefs')) || '{}');
  prefs[key] = value;
  localStorage.setItem(userKey('prefs'), JSON.stringify(prefs));
  showToast(`${key === 'newsletter' ? 'Newsletter' : key === 'smsAlerts' ? 'SMS alerts' : 'Dark mode'} ${value ? 'enabled' : 'disabled'}`, 'info');
  // Re-render to update toggle visuals
  renderSettingsPanel(document.getElementById('profile-panel-body'));
}

// ====================== CHECKOUT ======================

function initCheckout() {
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) { showToast("Your cart is empty!", "info"); return; }
    
    if (!currentUser) {
      showToast("Please sign in to checkout 🔐", "info");
      document.getElementById('cart-sidebar').classList.remove('open');
      document.getElementById('profile-sidebar').classList.add('open');
      renderProfileSidebar();
      return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    saveOrder(cart, total);

    showToast(`🎉 Order placed! Total: ₹${total.toLocaleString('en-IN')}`, "success");
    cart = [];
    updateCartCount();
    document.getElementById('cart-sidebar').classList.remove('open');
  });
}

// ====================== AI PERSONAL SHOPPER CHATBOT ======================

const CHATBOT_SYSTEM_PROMPT = `You are Raj's Store personal shopping assistant — a friendly, knowledgeable, and enthusiastic AI stylist. You help customers discover the perfect products from the store's catalogue.

STORE CATALOGUE (56 products across Fashion, Electronics, Lifestyle):

FASHION:
1. Violet Dream Hoodie — ₹2,499 | Oversized fleece hoodie
2. Lunar Purple Sneakers — ₹3,899 | Premium cushioned sneakers
3. Midnight Velvet Jacket — ₹4,199 | Elegant velvet jacket
4. Sunset Linen Shirt — ₹1,899 | Breathable summer linen shirt
5. Urban Cargo Pants — ₹2,799 | Streetwear cargo pants
6. Rose Gold Silk Scarf — ₹1,299 | Luxurious silk scarf
7. Classic Leather Belt — ₹999 | Genuine leather belt
8. Denim Trucker Jacket — ₹3,499 | Classic slim-fit denim jacket
9. Boho Floral Maxi Dress — ₹2,199 | Flowy boho maxi dress
10. Olive Green Bomber — ₹3,999 | Stylish bomber jacket
11. White Cotton Kurta — ₹1,499 | Elegant ethnic kurta
12. Sporty Track Set — ₹2,299 | Athleisure track set
13. Tortoiseshell Sunglasses — ₹1,599 | UV400 polarised sunglasses
14. Cashmere Blend Sweater — ₹3,299 | Ultra-soft premium sweater
15. Slim Fit Chinos — ₹1,999 | Smart casual chinos
16. Boho Beaded Bracelet Set — ₹699 | Set of 5 bracelets
17. Pastel Graphic Tee — ₹899 | Artistic pastel tee
18. Leather Crossbody Bag — ₹2,699 | Genuine leather bag
19. Embroidered Kurti — ₹1,699 | Floral embroidered kurti
20. Running Shorts Pro — ₹1,199 | Moisture-wicking shorts

ELECTRONICS:
21. Amethyst Wireless Earbuds — ₹3,299 | ANC, 30-hr battery
22. Crystal Glow Smartwatch — ₹5,299 | AMOLED fitness tracker
23. ProSound Headphones — ₹6,499 | Hi-Res over-ear headphones
24. Nano Bluetooth Speaker — ₹2,199 | Waterproof 360° speaker
25. Power Bank 20000mAh — ₹1,899 | 65W fast charge power bank
26. 4K Action Camera — ₹8,999 | Waterproof adventure camera
27. Smart Ring Doorbell — ₹4,499 | HD video doorbell
28. Mechanical Keyboard RGB — ₹5,299 | TKL mechanical keyboard
29. Wireless Charging Pad — ₹1,299 | 15W Qi wireless charger
30. Smart LED Strip 5M — ₹1,599 | RGB music sync LED strip
31. Noise-Cancelling Buds Pro — ₹4,799 | Adaptive ANC spatial audio
32. Portable Mini Projector — ₹9,999 | Full HD mini projector
33. Smart Fitness Band — ₹2,799 | SpO2 sleep tracker band
34. USB-C Hub 9-in-1 — ₹3,499 | 4K HDMI hub
35. Gaming Mouse Pro — ₹3,999 | 25600 DPI RGB gaming mouse
36. Portable SSD 1TB — ₹7,499 | 1050 MB/s portable SSD
37. Smart Air Purifier — ₹6,999 | HEPA H13 smart purifier
38. Webcam 4K Pro — ₹5,999 | 4K AI autofocus webcam
39. Foldable Drone 4K — ₹12,999 | GPS drone with 4K camera
40. Aura LED Lamp — ₹1,799 | Smart 16M colour mood lamp

LIFESTYLE:
41. Himalayan Pink Salt Lamp — ₹1,299 | Warm ambient salt lamp
42. Bamboo Yoga Mat — ₹1,999 | Eco-friendly non-slip yoga mat
43. French Press Coffee Maker — ₹1,799 | Premium coffee brewer
44. Succulent Terrarium Kit — ₹1,499 | DIY terrarium with plants
45. Scented Soy Candle Set — ₹999 | 3 soy wax candles set
46. Leather Journal Planner — ₹849 | Hand-stitched leather journal
47. Copper Water Bottle — ₹1,199 | Ayurvedic copper bottle
48. Chess Board Wooden — ₹2,499 | Handcrafted walnut chess set
49. Hammock Camping Chair — ₹3,299 | Ultralight portable hammock
50. Aromatherapy Diffuser — ₹1,699 | 7-colour LED oil diffuser
51. Insulated Lunch Box — ₹799 | Hot-for-6hr steel lunch box
52. Desk Plant Pot Set — ₹1,099 | 3-piece ceramic plant pots
53. Natural Loofah Gift Set — ₹599 | Organic self-care loofah set
54. Macramé Wall Hanging — ₹1,799 | Boho handmade wall art
55. Mini Desktop Vacuum — ₹699 | USB desk vacuum cleaner
56. Crystal Singing Bowl — ₹4,299 | Quartz meditation bowl

YOUR ROLE:
- Give short, warm, personalised recommendations (budget, occasion, style, recipient).
- When recommending, mention name in **bold** with price.
- Keep responses to 2–4 sentences unless listing multiple products.
- Be enthusiastic and human. Use emojis naturally but sparingly.
- Never make up products outside this catalogue.`;

let chatHistory = [];



function sendChip(btn) {
  document.getElementById('chatbot-input').value = btn.textContent;
  document.querySelectorAll('.quick-chips').forEach(el => el.remove());
  document.querySelectorAll('.quick-chips-label').forEach(el => el.remove());
  sendChatMessage();
}

function appendMessage(role, text) {
  const container = document.getElementById('chatbot-messages');
  const div = document.createElement('div');
  div.className = `chat-bubble ${role === 'user' ? 'user-bubble' : 'bot-bubble'}`;
  if (role === 'assistant') {
    div.innerHTML = `<div class="bubble-avatar">✦</div><div class="bubble-text">${formatBotText(text)}</div>`;
  } else {
    div.innerHTML = `<div class="bubble-text">${escapeHtml(text)}</div>`;
  }
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function formatBotText(text) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
}

function escapeHtml(text) {
  return text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function showTypingIndicator() {
  const container = document.getElementById('chatbot-messages');
  const div = document.createElement('div');
  div.className = 'chat-bubble bot-bubble typing-indicator-bubble';
  div.id = 'typing-indicator';
  div.innerHTML = `<div class="bubble-avatar">✦</div><div class="bubble-text"><span class="typing-dots"><span></span><span></span><span></span></span></div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function removeTypingIndicator() {
  const el = document.getElementById('typing-indicator');
  if (el) el.remove();
}

async function sendChatMessage() {
  const input = document.getElementById('chatbot-input');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  appendMessage('user', text);
  chatHistory.push({ role: 'user', content: text });
  showTypingIndicator();
  await new Promise(r => setTimeout(r, 700 + Math.random() * 600));
  removeTypingIndicator();
  const reply = getSmartReply(text.toLowerCase());
  chatHistory.push({ role: 'assistant', content: reply });
  appendMessage('assistant', reply);
}

function getSmartReply(msg) {
  const greetings = ['hey','hi','hello','heyy','hiii','sup','yo'];
  if (greetings.some(g => msg.includes(g))) {
    return "Hey there! 👋 Welcome to Raj's Store — we now have 56 amazing products across Fashion, Electronics & Lifestyle! Tell me your budget, occasion, or what you need and I'll find the perfect pick for you! 🛍️";
  }

  // Budget filter
  const budgetMatch = msg.match(/under\s*[₹rs]*\s*(\d+)/i) || msg.match(/below\s*[₹rs]*\s*(\d+)/i) || msg.match(/less than\s*[₹rs]*\s*(\d+)/i) || msg.match(/budget.*?(\d{3,5})/i) || msg.match(/(\d{3,5}).*budget/i);
  if (budgetMatch) {
    const budget = parseInt(budgetMatch[1]);
    const affordable = products.filter(p => p.price <= budget).slice(0, 6);
    if (affordable.length === 0) return `Our lowest-priced item starts at ₹599. Could you stretch the budget a little? 😊`;
    const list = affordable.map(p => `• **${p.name}** — ₹${p.price.toLocaleString('en-IN')}`).join('\n');
    return `Great news! Here are some top picks within ₹${budget.toLocaleString('en-IN')}:\n\n${list}\n\nWant details on any of these? 😊`;
  }

  // Electronics
  if (['electronic','electronics','tech','gadget','gadgets','device','speaker','headphone','earbud','camera','keyboard','mouse','laptop','charging','drone'].some(w => msg.includes(w))) {
    return `Our electronics collection is 🔥 Here are top picks:\n\n• **Noise-Cancelling Buds Pro** — ₹4,799 | Spatial audio + ANC\n• **Crystal Glow Smartwatch** — ₹5,299 | AMOLED fitness tracker\n• **ProSound Headphones** — ₹6,499 | Hi-Res studio sound\n• **Mechanical Keyboard RGB** — ₹5,299 | Tactile typing bliss\n\nTell me your use case and I'll narrow it down! 🎧`;
  }

  // Fashion
  if (['fashion','clothes','clothing','outfit','wear','style','dress','shirt','jacket','kurta','sneaker','shoe','jeans','tshirt','bag'].some(w => msg.includes(w))) {
    return `Our fashion picks are trending right now! 🌟\n\n• **Denim Trucker Jacket** — ₹3,499 | Wardrobe staple\n• **Cashmere Blend Sweater** — ₹3,299 | Ultra-luxe warmth\n• **Olive Green Bomber** — ₹3,999 | Urban cool\n• **Boho Floral Maxi Dress** — ₹2,199 | Effortless elegance\n\nAny style preference? Casual, ethnic, or formal? 👗`;
  }

  // Lifestyle
  if (['lifestyle','home','decor','yoga','coffee','candle','gift','plant','room','living','wellness','meditation','kitchen'].some(w => msg.includes(w))) {
    return `Our lifestyle range is perfect for home & self-care! 🏡\n\n• **Scented Soy Candle Set** — ₹999 | 3 gorgeous scents\n• **Bamboo Yoga Mat** — ₹1,999 | Eco non-slip mat\n• **Crystal Singing Bowl** — ₹4,299 | Sound healing bliss\n• **Aromatherapy Diffuser** — ₹1,699 | 7-colour LED\n\nWhat's the vibe you're going for? 🕯️`;
  }

  // Gift
  if (['gift','gifting','birthday','present','someone','friend','surprise','anniversary','bday'].some(w => msg.includes(w))) {
    return `Looking for a gift? Love it! 🎁 Here are crowd-pleasers:\n\n• **Scented Soy Candle Set** — ₹999 | Always appreciated\n• **Noise-Cancelling Buds Pro** — ₹4,799 | Tech lovers dream\n• **Chess Board Wooden** — ₹2,499 | Timeless & premium\n• **Leather Journal** — ₹849 | For the thinker in your life\n\nWho's it for? I'll help pick the perfect one! 😊`;
  }

  // Trending
  if (['trend','trending','popular','best','top','hot','new','recommend'].some(w => msg.includes(w))) {
    return `Here's what's flying off our shelves right now 🔥\n\n• **Noise-Cancelling Buds Pro** — ₹4,799 ⭐ #1 Best Seller\n• **Crystal Glow Smartwatch** — ₹5,299 ⭐ Top Electronics\n• **Cashmere Blend Sweater** — ₹3,299 ⭐ Fashion Favourite\n• **Scented Soy Candle Set** — ₹999 ⭐ Lifestyle Hit\n\nShall I add any to your cart? 🛒`;
  }

  const fallbacks = [
    "I'd love to help! Could you tell me a bit more — fashion, electronics, or lifestyle? Or drop a budget like 'under ₹2000' and I'll find the best picks! 😊",
    "Hmm, not sure what you're after! Try asking about gadgets, fashion, gifts, or say 'under ₹3000' and I'll curate the best for you 🛍️",
    "Let me help you find something perfect! Tell me who you're shopping for, your budget, or the type of product you want 😊"
  ];
  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

// ====================== INITIALIZE ALL ======================
function initEventListeners() {
  // Login
  initLoginHandlers();
  initCheckout();

  // Search & sort & filter dropdowns
  const searchInput = document.getElementById('search-input');
  const sortSelect = document.getElementById('sort-select');
  if (searchInput) searchInput.addEventListener('input', filterProducts);
  if (sortSelect) sortSelect.addEventListener('change', filterProducts);

  // Cart
  const cartBtn = document.getElementById('cart-btn');
  const closeCart = document.getElementById('close-cart');
  if (cartBtn) cartBtn.addEventListener('click', () => {
    document.getElementById('cart-sidebar').classList.add('open');
    renderCart();
  });
  if (closeCart) closeCart.addEventListener('click', () => {
    document.getElementById('cart-sidebar').classList.remove('open');
  });

  // Wishlist
  const wishlistBtn = document.getElementById('wishlist-btn');
  const closeWishlist = document.getElementById('close-wishlist');
  if (wishlistBtn) wishlistBtn.addEventListener('click', () => {
    document.getElementById('wishlist-sidebar').classList.add('open');
    renderWishlist();
  });
  if (closeWishlist) closeWishlist.addEventListener('click', () => {
    document.getElementById('wishlist-sidebar').classList.remove('open');
  });

  // Quick view close
  const closeQV = document.getElementById('close-quick-view');
  const qvModal = document.getElementById('quick-view-modal');
  if (closeQV) closeQV.addEventListener('click', () => { qvModal.style.display = 'none'; });
  if (qvModal) qvModal.addEventListener('click', (e) => {
    if (e.target === qvModal) qvModal.style.display = 'none';
  });

  // Profile
  const profileNavBtn = document.getElementById('profile-nav-btn');
  const closeProfile = document.getElementById('close-profile');
  const profileBackBtn = document.getElementById('profile-back-btn');
  const profilePanelClose = document.getElementById('profile-panel-close');
  const profileOverlay = document.getElementById('profile-panel-overlay');

  if (profileNavBtn) profileNavBtn.addEventListener('click', () => {
    document.getElementById('profile-sidebar').classList.add('open');
    renderProfileSidebar();
  });
  if (closeProfile) closeProfile.addEventListener('click', () => {
    document.getElementById('profile-sidebar').classList.remove('open');
  });
  if (profileBackBtn) profileBackBtn.addEventListener('click', () => {
    document.getElementById('profile-panel-overlay').classList.add('hidden');
    document.getElementById('profile-sidebar').classList.add('open');
    renderProfileSidebar();
  });
  if (profilePanelClose) profilePanelClose.addEventListener('click', () => {
    document.getElementById('profile-panel-overlay').classList.add('hidden');
  });
  if (profileOverlay) profileOverlay.addEventListener('click', (e) => {
    if (e.target === profileOverlay) profileOverlay.classList.add('hidden');
  });

  // Chatbot
  const fab = document.getElementById('chatbot-fab');
  const closeChat = document.getElementById('chatbot-close');
  const chatInput = document.getElementById('chatbot-input');
  const chatSend = document.getElementById('chatbot-send');
  if (fab) fab.addEventListener('click', () => document.getElementById('chatbot-panel').classList.toggle('open'));
  if (closeChat) closeChat.addEventListener('click', () => document.getElementById('chatbot-panel').classList.remove('open'));
  if (chatInput) chatInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendChatMessage(); });
  if (chatSend) chatSend.addEventListener('click', sendChatMessage);
}

document.addEventListener('DOMContentLoaded', initEventListeners);