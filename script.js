// Products Data
const products = [
  { 
    id: 1, 
    name: "Violet Dream Hoodie", 
    price: 2499, 
    img: "https://picsum.photos/id/1015/600/600",
    category: "fashion",
    description: "Premium quality oversized hoodie with soft fleece lining. Perfect for casual wear."
  },
  { 
    id: 2, 
    name: "Amethyst Wireless Earbuds", 
    price: 3299, 
    img: "https://picsum.photos/id/201/600/600",
    category: "electronics",
    description: "High-fidelity sound with active noise cancellation and 30-hour battery life."
  },
  { 
    id: 3, 
    name: "Lunar Purple Sneakers", 
    price: 3899, 
    img: "https://picsum.photos/id/106/600/600",
    category: "fashion",
    description: "Stylish and comfortable sneakers with premium cushioning and breathable mesh."
  },
  { 
    id: 4, 
    name: "Crystal Glow Smartwatch", 
    price: 5299, 
    img: "https://picsum.photos/id/367/600/600",
    category: "electronics",
    description: "Advanced fitness tracking, heart rate monitor, and beautiful AMOLED display."
  },
  { 
    id: 5, 
    name: "Midnight Velvet Jacket", 
    price: 4199, 
    img: "https://picsum.photos/id/669/600/600",
    category: "fashion",
    description: "Elegant velvet jacket with premium finish and comfortable fit."
  },
  { 
    id: 6, 
    name: "Aura LED Lamp", 
    price: 1799, 
    img: "https://picsum.photos/id/1060/600/600",
    category: "lifestyle",
    description: "Smart mood lighting with 16 million colors and app control."
  }
];

let cart = [];
let wishlist = [];

// Show Main Store
function showMainStore() {
  document.getElementById('login-modal').style.display = 'none';
  document.getElementById('main-content').classList.remove('hidden');
  renderProducts();
  updateCartCount();
  updateWishlistCount();
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
      <img src="${product.img}" alt="${product.name}" class="product-img">
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <p class="price">₹${product.price}</p>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
      </div>
    `;
    grid.appendChild(card);
  });

  // Add event listeners
  addProductEventListeners();
}

function addProductEventListeners() {
  // Add to Cart
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      addToCart(id);
    });
  });

  // Quick View
  document.querySelectorAll('.product-img, .product-title').forEach(el => {
    el.addEventListener('click', (e) => {
      const card = el.closest('.product-card');
      const id = parseInt(card.querySelector('.add-to-cart').dataset.id);
      showQuickView(id);
    });
  });

  // Wishlist Heart
  document.querySelectorAll('.wishlist-heart').forEach(heart => {
    heart.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(heart.dataset.id);
      toggleWishlist(id, heart);
    });
  });
}

// ====================== SEARCH & FILTER ======================

document.getElementById('search-input').addEventListener('input', filterProducts);
document.getElementById('sort-select').addEventListener('change', filterProducts);

function filterProducts() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
  const sortValue = document.getElementById('sort-select').value;

  let filtered = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm)
  );

  // Sort
  if (sortValue === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortValue === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  renderProducts(filtered);
}

// ====================== CART FUNCTIONS ======================

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

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
      <img src="${item.img}" alt="${item.name}">
      <div class="cart-item-content">
        <h4>${item.name}</h4>
        <p>₹${item.price} × ${item.quantity}</p>
        <div class="quantity-control">
          <button class="qty-btn minus" data-index="${index}">-</button>
          <span>${item.quantity}</span>
          <button class="qty-btn plus" data-index="${index}">+</button>
        </div>
        <strong>₹${itemTotal}</strong>
      </div>
      <button class="remove-btn" data-index="${index}" title="Remove">
        <i class="fas fa-trash"></i>
      </button>
    `;
    container.appendChild(div);
  });

  document.getElementById('cart-total').textContent = total;
  document.getElementById('cart-items-count').textContent = cart.length;

  addCartEventListeners();
}

function addCartEventListeners() {
  // Quantity buttons
  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.dataset.index);
      const isPlus = btn.classList.contains('plus');
      
      if (isPlus) {
        cart[index].quantity += 1;
      } else if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      } else {
        cart.splice(index, 1);
      }
      
      updateCartCount();
      renderCart();
    });
  });

  // Remove buttons
  document.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.dataset.index);
      const productName = cart[index].name;
      cart.splice(index, 1);
      updateCartCount();
      renderCart();
      showToast(`${productName} removed from cart`, 'info');
    });
  });
}

// Cart Sidebar Controls
document.getElementById('cart-btn').addEventListener('click', () => {
  document.getElementById('cart-sidebar').classList.add('open');
  renderCart();
});

document.getElementById('close-cart').addEventListener('click', () => {
  document.getElementById('cart-sidebar').classList.remove('open');
});

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
        <p class="price">₹${product.price}</p>
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

  // Add to cart from wishlist
  document.querySelectorAll('#wishlist-items .wishlist-add-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      addToCart(id);
    });
  });

  // Add remove listeners
  document.querySelectorAll('#wishlist-items .remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.dataset.index);
      const productName = wishlist[index].name;
      wishlist.splice(index, 1);
      updateWishlistCount();
      renderWishlist();
      renderProducts(); // Refresh hearts
      showToast(`${productName} removed from wishlist`, 'info');
    });
  });
}

// Wishlist Sidebar
document.getElementById('wishlist-btn').addEventListener('click', () => {
  document.getElementById('wishlist-sidebar').classList.add('open');
  renderWishlist();
});

document.getElementById('close-wishlist').addEventListener('click', () => {
  document.getElementById('wishlist-sidebar').classList.remove('open');
});

// ====================== QUICK VIEW MODAL ======================

function showQuickView(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const modal = document.getElementById('quick-view-modal');
  const content = document.getElementById('quick-view-content');

  const isWishlisted = wishlist.some(item => item.id === product.id);

  content.innerHTML = `
    <div style="flex: 1;">
      <img src="${product.img}" alt="${product.name}">
    </div>
    <div class="quick-view-info" style="flex: 1;">
      <h2>${product.name}</h2>
      <p class="price">₹${product.price}</p>
      <p style="margin: 15px 0; line-height: 1.6;">${product.description}</p>
      
      <button class="add-to-cart" data-id="${product.id}" 
              style="width: 100%; margin-top: 20px; padding: 16px; font-size: 1.1rem;">
        <i class="fas fa-shopping-cart"></i> Add to Cart
      </button>
      <button class="qv-wishlist-btn" data-id="${product.id}"
              style="width:100%; margin-top:12px; padding:14px; font-size:1rem; font-weight:600;
                     border-radius:12px; cursor:pointer; transition:0.3s;
                     border: 2px solid ${isWishlisted ? '#e74c3c' : '#e0bbff'};
                     background: ${isWishlisted ? '#fff0f0' : 'white'};
                     color: ${isWishlisted ? '#e74c3c' : '#7c3aed'};">
        <i class="fas fa-heart"></i> ${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
      </button>
    </div>
  `;

  modal.style.display = 'flex';

  // Add to cart from modal
  content.querySelector('.add-to-cart').addEventListener('click', () => {
    addToCart(product.id);
  });

  // Wishlist toggle from modal
  content.querySelector('.qv-wishlist-btn').addEventListener('click', (e) => {
    const btn = e.currentTarget;
    const idx = wishlist.findIndex(item => item.id === product.id);
    if (idx === -1) {
      wishlist.push(product);
      btn.style.border = '2px solid #e74c3c';
      btn.style.background = '#fff0f0';
      btn.style.color = '#e74c3c';
      btn.innerHTML = '<i class="fas fa-heart"></i> Remove from Wishlist';
      showToast(`${product.name} added to wishlist ❤️`, 'success');
    } else {
      wishlist.splice(idx, 1);
      btn.style.border = '2px solid #e0bbff';
      btn.style.background = 'white';
      btn.style.color = '#7c3aed';
      btn.innerHTML = '<i class="fas fa-heart"></i> Add to Wishlist';
      showToast(`${product.name} removed from wishlist`, 'info');
    }
    updateWishlistCount();
    renderProducts(); // sync hearts on cards
  });
}

document.getElementById('close-quick-view').addEventListener('click', () => {
  document.getElementById('quick-view-modal').style.display = 'none';
});

// Close modal when clicking outside
document.getElementById('quick-view-modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('quick-view-modal')) {
    document.getElementById('quick-view-modal').style.display = 'none';
  }
});

// ====================== TOAST NOTIFICATIONS ======================

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  
  const toast = document.createElement('div');
  toast.className = `toast`;
  
  let icon = '✓';
  if (type === 'info') icon = 'ℹ';

  toast.innerHTML = `
    <span style="font-size:1.4rem;">${icon}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Auto remove after 3 seconds
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// ====================== LOGIN ======================

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  showMainStore();
});

document.getElementById('skip-login').addEventListener('click', () => {
  showMainStore();
});

// Checkout Button (Demo)
document.getElementById('checkout-btn').addEventListener('click', () => {
  if (cart.length === 0) {
    showToast("Your cart is empty!", "info");
    return;
  }
  showToast("🎉 Thank you for shopping at Raj's Store! (Demo Checkout)", "success");
  cart = [];
  updateCartCount();
  document.getElementById('cart-sidebar').classList.remove('open');
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Any additional initialization if needed
});

// ====================== AI PERSONAL SHOPPER CHATBOT ======================

const CHATBOT_SYSTEM_PROMPT = `You are Raj's Store personal shopping assistant — a friendly, knowledgeable, and enthusiastic AI stylist. You help customers discover the perfect products from the store's catalogue.

STORE CATALOGUE:
1. Violet Dream Hoodie — ₹2,499 | Category: Fashion | Premium oversized hoodie with soft fleece lining, perfect for casual wear.
2. Amethyst Wireless Earbuds — ₹3,299 | Category: Electronics | High-fidelity sound, active noise cancellation, 30-hour battery life.
3. Lunar Purple Sneakers — ₹3,899 | Category: Fashion | Stylish & comfortable with premium cushioning and breathable mesh.
4. Crystal Glow Smartwatch — ₹5,299 | Category: Electronics | Fitness tracking, heart rate monitor, beautiful AMOLED display.
5. Midnight Velvet Jacket — ₹4,199 | Category: Fashion | Elegant velvet jacket with premium finish and comfortable fit.
6. Aura LED Lamp — ₹1,799 | Category: Lifestyle | Smart mood lighting with 16 million colors and app control.

YOUR ROLE:
- Give short, warm, personalized recommendations based on what the customer tells you (budget, occasion, style, interests, recipient).
- When recommending a product, mention its name (in **bold**) and price.
- Keep responses concise (2–4 sentences max unless listing multiple products).
- Be enthusiastic and human. Use emojis sparingly but naturally.
- If asked about something outside the catalogue, say you only know about Raj's Store products and redirect helpfully.
- Never make up products that don't exist in the catalogue.`;

let chatHistory = [];

// Toggle panel
document.getElementById('chatbot-fab').addEventListener('click', () => {
  document.getElementById('chatbot-panel').classList.toggle('open');
});

document.getElementById('chatbot-close').addEventListener('click', () => {
  document.getElementById('chatbot-panel').classList.remove('open');
});

// Send on Enter
document.getElementById('chatbot-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') sendChatMessage();
});

document.getElementById('chatbot-send').addEventListener('click', sendChatMessage);

function sendChip(btn) {
  const text = btn.textContent;
  document.getElementById('chatbot-input').value = text;
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
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');
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

  // Small delay to feel natural
  await new Promise(r => setTimeout(r, 700 + Math.random() * 600));
  removeTypingIndicator();

  const reply = getSmartReply(text.toLowerCase());
  chatHistory.push({ role: 'assistant', content: reply });
  appendMessage('assistant', reply);
}

function getSmartReply(msg) {
  const catalogue = [
    { name: 'Violet Dream Hoodie', price: '₹2,499', cat: 'fashion', tags: ['hoodie','clothes','fashion','casual','wear','jacket','top','outfit','cold','winter','cozy'] },
    { name: 'Amethyst Wireless Earbuds', price: '₹3,299', cat: 'electronics', tags: ['earbuds','earphones','headphones','music','sound','audio','wireless','electronics','ear'] },
    { name: 'Lunar Purple Sneakers', price: '₹3,899', cat: 'fashion', tags: ['sneakers','shoes','footwear','fashion','casual','walk','sport','feet'] },
    { name: 'Crystal Glow Smartwatch', price: '₹5,299', cat: 'electronics', tags: ['smartwatch','watch','fitness','tracker','health','heart','electronics','wrist','time'] },
    { name: 'Midnight Velvet Jacket', price: '₹4,199', cat: 'fashion', tags: ['jacket','fashion','clothes','outfit','style','party','evening','formal','velvet'] },
    { name: 'Aura LED Lamp', price: '₹1,799', cat: 'lifestyle', tags: ['lamp','light','led','room','decor','home','lifestyle','mood','desk','gift'] },
  ];

  const greetings = ['hey','hi','hello','heyy','hiii','sup','yo'];
  if (greetings.some(g => msg.includes(g))) {
    return "Hey there! 👋 Welcome to Raj's Store! I'm your personal shopping assistant. Tell me your budget, occasion, or what you're looking for and I'll find the perfect pick for you! 🛍️";
  }

  // Budget filter
  const budgetMatch = msg.match(/under\s*[₹rs]*\s*(\d+)/i) || msg.match(/below\s*[₹rs]*\s*(\d+)/i) || msg.match(/less than\s*[₹rs]*\s*(\d+)/i) || msg.match(/budget.*?(\d{3,5})/i) || msg.match(/(\d{3,5}).*budget/i);
  if (budgetMatch) {
    const budget = parseInt(budgetMatch[1]);
    const affordable = catalogue.filter(p => parseInt(p.price.replace(/[^0-9]/g,'')) <= budget);
    if (affordable.length === 0) return `Hmm, our lowest-priced item starts at ₹1,799. Could you stretch the budget a little? 😊`;
    const list = affordable.map(p => `• **${p.name}** — ${p.price}`).join('\n');
    return `Great news! Here's what fits your budget of ${budget > 999 ? '₹' + budget.toLocaleString('en-IN') : '₹' + budget}:\n\n${list}\n\nWant more details on any of these? 😊`;
  }

  // Category: electronics
  if (['electronic','electronics','tech','gadget','gadgets','device'].some(w => msg.includes(w))) {
    return `Here are our top electronics picks! 🎧\n\n• **Amethyst Wireless Earbuds** — ₹3,299 | Active noise cancellation, 30-hr battery\n• **Crystal Glow Smartwatch** — ₹5,299 | Fitness tracker, AMOLED display\n\nWhich one catches your eye?`;
  }

  // Category: fashion
  if (['fashion','clothes','clothing','outfit','wear','style','dress'].some(w => msg.includes(w))) {
    return `Our fashion collection is 🔥\n\n• **Violet Dream Hoodie** — ₹2,499 | Cozy oversized fleece\n• **Lunar Purple Sneakers** — ₹3,899 | Premium cushioned sneakers\n• **Midnight Velvet Jacket** — ₹4,199 | Elegant velvet finish\n\nAny of these speak to you?`;
  }

  // Trending / popular
  if (['trend','trending','popular','best','top','hot','new'].some(w => msg.includes(w))) {
    return `Here's what's flying off the shelves right now 🔥\n\n• **Crystal Glow Smartwatch** — ₹5,299 ⭐ Most popular\n• **Amethyst Wireless Earbuds** — ₹3,299 ⭐ Customer favourite\n• **Midnight Velvet Jacket** — ₹4,199 ⭐ Trending in fashion\n\nShall I add any of these to your cart?`;
  }

  // Gift
  if (['gift','gifting','birthday','present','someone','friend','surprise'].some(w => msg.includes(w))) {
    return `Looking for a gift? Great choice! 🎁 Here are some crowd-pleasers:\n\n• **Aura LED Lamp** — ₹1,799 | Perfect mood gift for any room\n• **Amethyst Wireless Earbuds** — ₹3,299 | Everyone loves great audio!\n• **Crystal Glow Smartwatch** — ₹5,299 | Premium & impressive\n\nWho's it for? I can help narrow it down! 😊`;
  }

  // Specific product keyword matching
  for (const item of catalogue) {
    if (item.tags.some(tag => msg.includes(tag))) {
      const price = item.price;
      const descriptions = {
        'Violet Dream Hoodie': 'Premium oversized hoodie with soft fleece lining — perfect for casual cozy days! 🧥',
        'Amethyst Wireless Earbuds': 'High-fidelity sound, active noise cancellation, and 30 hours of battery life! 🎧',
        'Lunar Purple Sneakers': 'Stylish sneakers with premium cushioning and breathable mesh — all-day comfort! 👟',
        'Crystal Glow Smartwatch': 'Advanced fitness tracking, heart rate monitor, and a stunning AMOLED display! ⌚',
        'Midnight Velvet Jacket': 'Elegant velvet jacket with a premium finish — perfect for evenings out! 🧣',
        'Aura LED Lamp': 'Smart mood lighting with 16 million colors and app control — transforms any room! 💡',
      };
      return `Great taste! 😍 Check out the **${item.name}** at ${price}.\n\n${descriptions[item.name]}\n\nWant to add it to your cart?`;
    }
  }

  // Fallback
  const fallbacks = [
    "I'd love to help! Could you tell me a bit more — are you looking for fashion, electronics, or lifestyle products? Or do you have a budget in mind? 😊",
    "Hmm, I'm not sure what you're looking for! Try asking about electronics, fashion, gifts, or say something like 'under ₹3000' and I'll find the best picks! 🛍️",
    "Let me help you find the perfect product! Tell me your budget, the occasion, or the type of product you want. 😊"
  ];
  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}