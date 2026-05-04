// ====================== PRODUCTS DATA ======================
const products = [
  // ---- ORIGINAL 6 ----
  {
    id: 1, name: "Violet Dream Hoodie", price: 2499,
    img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=600&fit=crop",
    category: "fashion",
    description: "Premium quality oversized hoodie with soft fleece lining. Perfect for casual wear.",
    rating: 4.5, reviewCount: 128,
    reviews: [
      { author: "Priya S.", stars: 5, text: "Super cozy and fits perfectly! Love the colour." },
      { author: "Arjun M.", stars: 4, text: "Great quality, a bit oversized but that's the style." },
      { author: "Neha K.", stars: 5, text: "Best hoodie I've ever owned. Warm and stylish!" }
    ]
  },
  {
    id: 2, name: "Amethyst Wireless Earbuds", price: 3299,
    img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop",
    category: "electronics",
    description: "High-fidelity sound with active noise cancellation and 30-hour battery life.",
    rating: 4.7, reviewCount: 214,
    reviews: [
      { author: "Rohit T.", stars: 5, text: "Incredible sound quality. Worth every rupee!" },
      { author: "Simran B.", stars: 5, text: "ANC is amazing, blocks out all office noise." },
      { author: "Vikram N.", stars: 4, text: "Great earbuds, slightly tight fit but sound is phenomenal." }
    ]
  },
  {
    id: 3, name: "Lunar Purple Sneakers", price: 3899,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
    category: "shoes",
    description: "Stylish and comfortable sneakers with premium cushioning and breathable mesh.",
    rating: 4.4, reviewCount: 97,
    reviews: [
      { author: "Kavya R.", stars: 5, text: "So comfortable for all-day wear. Love the design!" },
      { author: "Aditya P.", stars: 4, text: "Great sneakers, true to size." },
      { author: "Mehul D.", stars: 4, text: "Trendy look, very lightweight." }
    ]
  },
  {
    id: 4, name: "Crystal Glow Smartwatch", price: 5299,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
    category: "electronics",
    description: "Advanced fitness tracking, heart rate monitor, and beautiful AMOLED display.",
    rating: 4.8, reviewCount: 342,
    reviews: [
      { author: "Ananya J.", stars: 5, text: "The display is gorgeous. Tracks everything perfectly." },
      { author: "Karan V.", stars: 5, text: "Best smartwatch under ₹6000. Battery lasts 5 days!" },
      { author: "Divya S.", stars: 4, text: "Very accurate health tracking, sleek design." }
    ]
  },
  {
    id: 5, name: "Midnight Velvet Jacket", price: 4199,
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=600&fit=crop",
    category: "fashion",
    description: "Elegant velvet jacket with premium finish and comfortable fit.",
    rating: 4.3, reviewCount: 75,
    reviews: [
      { author: "Shreya P.", stars: 5, text: "Looks absolutely stunning for evening outings!" },
      { author: "Rahul G.", stars: 4, text: "Premium feel, very elegant." },
      { author: "Pooja M.", stars: 4, text: "Great quality velvet, got so many compliments." }
    ]
  },
  {
    id: 6, name: "Aura LED Lamp", price: 1799,
    img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2MDAnIGhlaWdodD0nNjAwJyB2aWV3Qm94PScwIDAgNjAwIDYwMCc+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSdnbCcgY3g9JzUwJScgY3k9JzQwJScgcj0nNTAlJz48c3RvcCBvZmZzZXQ9JzAlJyBzdG9wLWNvbG9yPScjZmZmOWM0Jy8+PHN0b3Agb2Zmc2V0PSc2MCUnIHN0b3AtY29sb3I9JyNmZmQ1NGYnLz48c3RvcCBvZmZzZXQ9JzEwMCUnIHN0b3AtY29sb3I9JyNmZjZmMDAnLz48L3JhZGlhbEdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBpZD0nYmcnIGN4PSc1MCUnIGN5PSc1MCUnIHI9JzcwJSc+PHN0b3Agb2Zmc2V0PScwJScgc3RvcC1jb2xvcj0nIzFhMGEyZScvPjxzdG9wIG9mZnNldD0nMTAwJScgc3RvcC1jb2xvcj0nIzBkMDExOCcvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSc2MDAnIGhlaWdodD0nNjAwJyBmaWxsPSd1cmwoI2JnKScvPjxlbGxpcHNlIGN4PSczMDAnIGN5PScyNzAnIHJ4PScxMzAnIHJ5PScxMDAnIGZpbGw9J3VybCgjZ2wpJyBvcGFjaXR5PScwLjQnLz48ZWxsaXBzZSBjeD0nMzAwJyBjeT0nMTgwJyByeD0nODAnIHJ5PScyMCcgZmlsbD0nI2ZmZDU0Zicgb3BhY2l0eT0nMC45Jy8+PHBhdGggZD0nTTIzMCAxODAgUTIyMCAyNjAgMjYwIDMwMCBMMzQwIDMwMCBRMzgwIDI2MCAzNzAgMTgwIFonIGZpbGw9JyNmZmUwODInLz48cmVjdCB4PScyODUnIHk9JzMwMCcgd2lkdGg9JzMwJyBoZWlnaHQ9JzEyMCcgcng9JzYnIGZpbGw9JyNiZGJkYmQnLz48ZWxsaXBzZSBjeD0nMzAwJyBjeT0nNDMwJyByeD0nNjAnIHJ5PScxMicgZmlsbD0nIzc1NzU3NScvPjxsaW5lIHgxPSczMDAnIHkxPScxODAnIHgyPScxODAnIHkyPSc4MCcgc3Ryb2tlPScjZmZkNTRmJyBzdHJva2Utd2lkdGg9JzInIG9wYWNpdHk9JzAuNCcvPjxsaW5lIHgxPSczMDAnIHkxPScxODAnIHgyPSc0MjAnIHkyPSc4MCcgc3Ryb2tlPScjZmZkNTRmJyBzdHJva2Utd2lkdGg9JzInIG9wYWNpdHk9JzAuNCcvPjxsaW5lIHgxPSczMDAnIHkxPScxODAnIHgyPScxNDAnIHkyPScyMDAnIHN0cm9rZT0nI2ZmZDU0Zicgc3Ryb2tlLXdpZHRoPScyJyBvcGFjaXR5PScwLjQnLz48bGluZSB4MT0nMzAwJyB5MT0nMTgwJyB4Mj0nNDYwJyB5Mj0nMjAwJyBzdHJva2U9JyNmZmQ1NGYnIHN0cm9rZS13aWR0aD0nMicgb3BhY2l0eT0nMC40Jy8+PHRleHQgeD0nMzAwJyB5PSc1MTAnIHRleHQtYW5jaG9yPSdtaWRkbGUnIGZvbnQtZmFtaWx5PSdBcmlhbCcgZm9udC1zaXplPScyNicgZmlsbD0nI2ZmZDU0ZicgZm9udC13ZWlnaHQ9J2JvbGQnPkF1cmEgTEVEIExhbXA8L3RleHQ+PHRleHQgeD0nMzAwJyB5PSc1NDgnIHRleHQtYW5jaG9yPSdtaWRkbGUnIGZvbnQtZmFtaWx5PSdBcmlhbCcgZm9udC1zaXplPScxNicgZmlsbD0nI2ZmZjU5ZCc+MTZNIENvbG9ycyDigKIgU21hcnQgQ29udHJvbDwvdGV4dD48L3N2Zz4=",
    category: "lifestyle",
    description: "Smart mood lighting with 16 million colors and app control.",
    rating: 4.6, reviewCount: 189,
    reviews: [
      { author: "Tanvi K.", stars: 5, text: "Completely transformed my room's ambiance. Love it!" },
      { author: "Nikhil S.", stars: 5, text: "App control works flawlessly. Great gift idea." },
      { author: "Riya B.", stars: 4, text: "Beautiful colors, app can be a bit slow sometimes." }
    ]
  },

  // ---- 50 NEW PRODUCTS ----

  // FASHION (17)
  {
    id: 7, name: "Sunset Linen Shirt", price: 1899,
    img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=600&fit=crop",
    category: "fashion",
    description: "Breathable linen shirt in warm sunset tones. Perfect for summer days.",
    rating: 4.4, reviewCount: 88,
    reviews: [
      { author: "Aryan K.", stars: 5, text: "Perfect summer shirt. Very breathable fabric!" },
      { author: "Meera T.", stars: 4, text: "Great fit and colour is exactly as shown." },
      { author: "Siddharth N.", stars: 4, text: "Lightweight and comfortable for hot weather." }
    ]
  },
  {
    id: 8, name: "Urban Cargo Pants", price: 2799,
    img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=600&fit=crop",
    category: "fashion",
    description: "Functional cargo pants with multiple pockets. Streetwear ready.",
    rating: 4.5, reviewCount: 112,
    reviews: [
      { author: "Dev P.", stars: 5, text: "Super stylish, all the pockets are so useful!" },
      { author: "Aisha R.", stars: 4, text: "Great streetwear look, very comfortable." },
      { author: "Jay M.", stars: 5, text: "Perfect fit and the fabric quality is excellent." }
    ]
  },
  {
    id: 9, name: "Rose Gold Silk Scarf", price: 1299,
    img: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&h=600&fit=crop",
    category: "fashion",
    description: "Luxurious silk scarf with delicate rose gold sheen. Versatile accessory.",
    rating: 4.7, reviewCount: 64,
    reviews: [
      { author: "Preethi A.", stars: 5, text: "Absolutely gorgeous! Elevates any outfit instantly." },
      { author: "Naina S.", stars: 5, text: "The silk quality is top notch, very smooth." },
      { author: "Deepa R.", stars: 4, text: "Beautiful scarf, great as a gift." }
    ]
  },
  {
    id: 10, name: "Classic Leather Belt", price: 999,
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    category: "fashion",
    description: "Genuine leather belt with a brushed metal buckle. Timeless style.",
    rating: 4.3, reviewCount: 145,
    reviews: [
      { author: "Amit B.", stars: 4, text: "Solid quality leather. Durable and stylish." },
      { author: "Ravi P.", stars: 5, text: "Exactly what I needed. Great value!" },
      { author: "Sunita K.", stars: 4, text: "Good quality, fits as expected." }
    ]
  },
  {
    id: 11, name: "Denim Trucker Jacket", price: 3499,
    img: "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?w=600&h=600&fit=crop",
    category: "fashion",
    description: "Classic denim jacket with a modern slim fit. A wardrobe staple.",
    rating: 4.6, reviewCount: 203,
    reviews: [
      { author: "Kabir M.", stars: 5, text: "Perfect denim jacket. Fits like a dream!" },
      { author: "Zara A.", stars: 5, text: "Great quality denim, very sturdy stitching." },
      { author: "Rohan T.", stars: 4, text: "Stylish and versatile, goes with everything." }
    ]
  },
  {
    id: 12, name: "Boho Floral Maxi Dress", price: 2199,
    img: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=600&h=600&fit=crop",
    category: "fashion",
    description: "Flowy boho maxi dress with vibrant floral print. Free-spirited elegance.",
    rating: 4.5, reviewCount: 91,
    reviews: [
      { author: "Pallavi S.", stars: 5, text: "So pretty! Perfect for beach vacations." },
      { author: "Diya K.", stars: 4, text: "Beautiful print, flows beautifully when you walk." },
      { author: "Anushka R.", stars: 5, text: "Got so many compliments! Highly recommend." }
    ]
  },
  {
    id: 13, name: "Olive Green Bomber", price: 3999,
    img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=600&fit=crop",
    category: "fashion",
    description: "Stylish olive green bomber jacket with ribbed cuffs. Urban essential.",
    rating: 4.6, reviewCount: 167,
    reviews: [
      { author: "Samir G.", stars: 5, text: "The colour is exactly right, looks so cool!" },
      { author: "Tanya N.", stars: 5, text: "Great fit, very warm yet lightweight." },
      { author: "Vishal K.", stars: 4, text: "Solid bomber jacket, great for autumn." }
    ]
  },
  {
    id: 14, name: "White Cotton Kurta", price: 1499,
    img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2MDAnIGhlaWdodD0nNjAwJyB2aWV3Qm94PScwIDAgNjAwIDYwMCc+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSdiZycgeDE9JzAlJyB5MT0nMCUnIHgyPScxMDAlJyB5Mj0nMTAwJSc+PHN0b3Agb2Zmc2V0PScwJScgc3RvcC1jb2xvcj0nI2YzZThmZicvPjxzdG9wIG9mZnNldD0nMTAwJScgc3RvcC1jb2xvcj0nI2UwZTdmZicvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSc2MDAnIGhlaWdodD0nNjAwJyBmaWxsPSd1cmwoI2JnKScvPjxwYXRoIGQ9J00yMDAgODAgTDE3NSAxNDUgTDEzNSAxNjIgTDE1OCAyMDIgTDIwMCAxODIgTDIwMCA0ODAgTDQwMCA0ODAgTDQwMCAxODIgTDQ0MiAyMDIgTDQ2NSAxNjIgTDQyNSAxNDUgTDQwMCA4MCBRMzUwIDEwMiAzMDAgMTAyIFEyNTAgMTAyIDIwMCA4MFonIGZpbGw9J3doaXRlJyBzdHJva2U9JyNlMGQwZjAnIHN0cm9rZS13aWR0aD0nMicvPjxwYXRoIGQ9J00yNTggODAgUTMwMCAxMjIgMzQyIDgwJyBmaWxsPSdub25lJyBzdHJva2U9JyNjNGI1ZDQnIHN0cm9rZS13aWR0aD0nMycvPjxwYXRoIGQ9J00yNjggOTAgUTMwMCAxMTggMzMyIDkwJyBmaWxsPSdub25lJyBzdHJva2U9JyNhNzhiZGEnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWRhc2hhcnJheT0nNCwzJy8+PGNpcmNsZSBjeD0nMzAwJyBjeT0nMTU4JyByPSc2JyBmaWxsPScjZDRiNWU4Jy8+PGNpcmNsZSBjeD0nMzAwJyBjeT0nMTk4JyByPSc2JyBmaWxsPScjZDRiNWU4Jy8+PGNpcmNsZSBjeD0nMzAwJyBjeT0nMjM4JyByPSc2JyBmaWxsPScjZDRiNWU4Jy8+PHBhdGggZD0nTTIwMCA0NDUgUTI1MCA0MjUgMzAwIDQ0NSBRMzUwIDQ2NSA0MDAgNDQ1JyBmaWxsPSdub25lJyBzdHJva2U9JyNhNzhiZGEnIHN0cm9rZS13aWR0aD0nMycvPjxwYXRoIGQ9J00yMDAgNDYwIFEyNTAgNDQwIDMwMCA0NjAgUTM1MCA0ODAgNDAwIDQ2MCcgZmlsbD0nbm9uZScgc3Ryb2tlPScjYzRiNWQ0JyBzdHJva2Utd2lkdGg9JzInLz48dGV4dCB4PSczMDAnIHk9JzUyOCcgdGV4dC1hbmNob3I9J21pZGRsZScgZm9udC1mYW1pbHk9J0FyaWFsJyBmb250LXNpemU9JzI0JyBmaWxsPScjNmQyOGQ5JyBmb250LXdlaWdodD0nYm9sZCc+V2hpdGUgQ290dG9uIEt1cnRhPC90ZXh0Pjx0ZXh0IHg9JzMwMCcgeT0nNTYyJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZvbnQtc2l6ZT0nMTUnIGZpbGw9JyM5MzMzZWEnPlByZW1pdW0gQ290dG9uIOKAoiBFdGhuaWMgRWxlZ2FuY2U8L3RleHQ+PC9zdmc+",
    category: "fashion",
    description: "Crisp white cotton kurta with minimal embroidery. Elegant ethnic wear.",
    rating: 4.4, reviewCount: 78,
    reviews: [
      { author: "Suresh P.", stars: 4, text: "Clean, minimal design. Perfect for festivals." },
      { author: "Mukesh D.", stars: 5, text: "Excellent cotton quality, very comfortable." },
      { author: "Asha T.", stars: 4, text: "Great for pujas and family gatherings." }
    ]
  },
  {
    id: 15, name: "Sporty Track Set", price: 2299,
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
    category: "fashion",
    description: "Matching track jacket and pants set. Comfort meets athleisure style.",
    rating: 4.5, reviewCount: 134,
    reviews: [
      { author: "Deepak R.", stars: 5, text: "Super comfortable. Wear it for gym and daily use!" },
      { author: "Pooja V.", stars: 4, text: "Nice set, fabric is soft and stretchy." },
      { author: "Yash S.", stars: 5, text: "Best athleisure set I own. Great value." }
    ]
  },
  {
    id: 16, name: "Tortoiseshell Sunglasses", price: 1599,
    img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop",
    category: "fashion",
    description: "Classic tortoiseshell acetate frames with UV400 polarised lenses.",
    rating: 4.3, reviewCount: 99,
    reviews: [
      { author: "Isha M.", stars: 5, text: "Great quality frames, polarised lenses are excellent!" },
      { author: "Gaurav S.", stars: 4, text: "Stylish and lightweight. Fits perfectly." },
      { author: "Rhea K.", stars: 4, text: "Love the tortoiseshell pattern, very chic." }
    ]
  },
  {
    id: 17, name: "Cashmere Blend Sweater", price: 3299,
    img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop",
    category: "fashion",
    description: "Ultra-soft cashmere blend sweater. Winter luxury at its best.",
    rating: 4.8, reviewCount: 156,
    reviews: [
      { author: "Kritika B.", stars: 5, text: "Incredibly soft, like wearing a cloud!" },
      { author: "Shaan T.", stars: 5, text: "Premium quality, stays warm without being bulky." },
      { author: "Leena D.", stars: 4, text: "Beautiful sweater, great colour options." }
    ]
  },
  {
    id: 18, name: "Slim Fit Chinos", price: 1999,
    img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=600&fit=crop",
    category: "fashion",
    description: "Tailored slim-fit chinos in a rich khaki tone. Smart casual perfect.",
    rating: 4.4, reviewCount: 188,
    reviews: [
      { author: "Neeraj A.", stars: 4, text: "Great fit, very presentable for office wear." },
      { author: "Ritu S.", stars: 5, text: "Comfortable and smart. Love the colour!" },
      { author: "Ashish M.", stars: 4, text: "Good quality fabric, holds its shape well." }
    ]
  },
  {
    id: 19, name: "Boho Beaded Bracelet Set", price: 699,
    img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop",
    category: "fashion",
    description: "Set of 5 handcrafted beaded bracelets. Stackable bohemian style.",
    rating: 4.6, reviewCount: 220,
    reviews: [
      { author: "Anjali P.", stars: 5, text: "Beautiful set! They stack so nicely." },
      { author: "Shruti N.", stars: 5, text: "Great quality beads, haven't broken at all." },
      { author: "Prachi K.", stars: 4, text: "Very pretty, perfect gift for friends!" }
    ]
  },
  {
    id: 20, name: "Pastel Graphic Tee", price: 899,
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
    category: "fashion",
    description: "Soft pastel graphic tee with artistic print. Casual and expressive.",
    rating: 4.3, reviewCount: 175,
    reviews: [
      { author: "Divyesh R.", stars: 4, text: "Great casual tee, the print looks amazing in person." },
      { author: "Kriti S.", stars: 5, text: "Super soft fabric, fits well. Love it!" },
      { author: "Manav B.", stars: 4, text: "Good quality for the price." }
    ]
  },
  {
    id: 21, name: "Leather Crossbody Bag", price: 2699,
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop",
    category: "fashion",
    description: "Compact genuine leather crossbody bag with adjustable strap.",
    rating: 4.7, reviewCount: 143,
    reviews: [
      { author: "Sonal G.", stars: 5, text: "Beautiful bag, leather quality is superb!" },
      { author: "Vandana T.", stars: 5, text: "Compact but fits everything I need." },
      { author: "Hina K.", stars: 4, text: "Great for everyday use, very stylish." }
    ]
  },
  {
    id: 22, name: "Embroidered Kurti", price: 1699,
    img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2MDAnIGhlaWdodD0nNjAwJyB2aWV3Qm94PScwIDAgNjAwIDYwMCc+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSdiZycgeDE9JzAlJyB5MT0nMCUnIHgyPScxMDAlJyB5Mj0nMTAwJSc+PHN0b3Agb2Zmc2V0PScwJScgc3RvcC1jb2xvcj0nI2ZkZjJmOCcvPjxzdG9wIG9mZnNldD0nMTAwJScgc3RvcC1jb2xvcj0nI2ZjZTdmMycvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSc2MDAnIGhlaWdodD0nNjAwJyBmaWxsPSd1cmwoI2JnKScvPjxwYXRoIGQ9J00xOTUgNzUgTDE3MCAxNDAgTDEzNSAxNTggTDE1OCAxOTggTDE5NSAxNzggTDE5NSA0NzAgTDQwNSA0NzAgTDQwNSAxNzggTDQ0MiAxOTggTDQ2NSAxNTggTDQzMCAxNDAgTDQwNSA3NSBRMzUyIDk4IDMwMCA5OCBRMjQ4IDk4IDE5NSA3NVonIGZpbGw9JyNlOTFlOGMnIG9wYWNpdHk9JzAuODUnLz48cGF0aCBkPSdNMjU1IDc2IFEzMDAgMTE4IDM0NSA3NicgZmlsbD0nbm9uZScgc3Ryb2tlPScjYWQxNDU3JyBzdHJva2Utd2lkdGg9JzMnLz48Y2lyY2xlIGN4PSczMDAnIGN5PScxNzgnIHI9JzIwJyBmaWxsPSdub25lJyBzdHJva2U9JyNmZmQ3MDAnIHN0cm9rZS13aWR0aD0nMycvPjxjaXJjbGUgY3g9JzMwMCcgY3k9JzE3OCcgcj0nMTAnIGZpbGw9JyNmZmQ3MDAnLz48Y2lyY2xlIGN4PScyNjgnIGN5PScyMTgnIHI9JzEzJyBmaWxsPSdub25lJyBzdHJva2U9JyNmZmQ3MDAnIHN0cm9rZS13aWR0aD0nMicvPjxjaXJjbGUgY3g9JzI2OCcgY3k9JzIxOCcgcj0nNicgZmlsbD0nI2ZmZDcwMCcvPjxjaXJjbGUgY3g9JzMzMicgY3k9JzIxOCcgcj0nMTMnIGZpbGw9J25vbmUnIHN0cm9rZT0nI2ZmZDcwMCcgc3Ryb2tlLXdpZHRoPScyJy8+PGNpcmNsZSBjeD0nMzMyJyBjeT0nMjE4JyByPSc2JyBmaWxsPScjZmZkNzAwJy8+PGVsbGlwc2UgY3g9JzI0OCcgY3k9JzE5Mycgcng9JzE2JyByeT0nNycgZmlsbD0nIzRjYWY1MCcgb3BhY2l0eT0nMC45JyB0cmFuc2Zvcm09J3JvdGF0ZSgtMzAgMjQ4IDE5MyknLz48ZWxsaXBzZSBjeD0nMzUyJyBjeT0nMTkzJyByeD0nMTYnIHJ5PSc3JyBmaWxsPScjNGNhZjUwJyBvcGFjaXR5PScwLjknIHRyYW5zZm9ybT0ncm90YXRlKDMwIDM1MiAxOTMpJy8+PGNpcmNsZSBjeD0nMjM2JyBjeT0nMjU4JyByPSc5JyBmaWxsPSdub25lJyBzdHJva2U9JyNmZmYnIHN0cm9rZS13aWR0aD0nMicvPjxjaXJjbGUgY3g9JzM2NCcgY3k9JzI1OCcgcj0nOScgZmlsbD0nbm9uZScgc3Ryb2tlPScjZmZmJyBzdHJva2Utd2lkdGg9JzInLz48Y2lyY2xlIGN4PSczMDAnIGN5PScyNjgnIHI9JzknIGZpbGw9J25vbmUnIHN0cm9rZT0nI2ZmZicgc3Ryb2tlLXdpZHRoPScyJy8+PHJlY3QgeD0nMTk1JyB5PSc0MzAnIHdpZHRoPScyMTAnIGhlaWdodD0nOCcgcng9JzMnIGZpbGw9JyNmZmQ3MDAnIG9wYWNpdHk9JzAuOCcvPjxwYXRoIGQ9J00xOTUgNDIwIFEyNDAgNDA1IDI4NSA0MjAgUTMzMCA0MzUgMzc1IDQyMCBMNDA1IDQyMCcgZmlsbD0nbm9uZScgc3Ryb2tlPScjZmZkNzAwJyBzdHJva2Utd2lkdGg9JzMnLz48dGV4dCB4PSczMDAnIHk9JzUyOCcgdGV4dC1hbmNob3I9J21pZGRsZScgZm9udC1mYW1pbHk9J0FyaWFsJyBmb250LXNpemU9JzIyJyBmaWxsPScjOWMyN2IwJyBmb250LXdlaWdodD0nYm9sZCc+RW1icm9pZGVyZWQgS3VydGk8L3RleHQ+PHRleHQgeD0nMzAwJyB5PSc1NjInIHRleHQtYW5jaG9yPSdtaWRkbGUnIGZvbnQtZmFtaWx5PSdBcmlhbCcgZm9udC1zaXplPScxNCcgZmlsbD0nI2U5MWU4Yyc+RmxvcmFsIEVtYnJvaWRlcnkg4oCiIFZpYnJhbnQgQ29sb3JzPC90ZXh0Pjwvc3ZnPg==",
    category: "fashion",
    description: "Vibrant cotton kurti with intricate floral embroidery. Ethnic chic.",
    rating: 4.5, reviewCount: 109,
    reviews: [
      { author: "Sunanda P.", stars: 5, text: "The embroidery is so detailed and beautiful!" },
      { author: "Kavita R.", stars: 4, text: "Great quality fabric, colours are vibrant." },
      { author: "Manisha T.", stars: 5, text: "Perfect for festivals and family events." }
    ]
  },
  {
    id: 23, name: "Running Shorts Pro", price: 1199,
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop",
    category: "fashion",
    description: "Lightweight moisture-wicking running shorts with built-in liner.",
    rating: 4.4, reviewCount: 87,
    reviews: [
      { author: "Pranav S.", stars: 4, text: "Great for running, very comfortable." },
      { author: "Akash M.", stars: 5, text: "Lightweight and the liner is a great addition." },
      { author: "Hemant B.", stars: 4, text: "Good quality for the price, fast drying." }
    ]
  },

  // ELECTRONICS (17)
  {
    id: 24, name: "ProSound Headphones", price: 6499,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    category: "electronics",
    description: "Over-ear headphones with Hi-Res Audio and 40-hour playback. Studio quality.",
    rating: 4.8, reviewCount: 287,
    reviews: [
      { author: "Varun N.", stars: 5, text: "Absolutely studio-quality sound. Mind blowing!" },
      { author: "Sanjay T.", stars: 5, text: "Comfortable for long sessions, bass is incredible." },
      { author: "Punit D.", stars: 4, text: "Great headphones, slightly heavy but worth it." }
    ]
  },
  {
    id: 25, name: "Nano Bluetooth Speaker", price: 2199,
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
    category: "electronics",
    description: "Compact waterproof Bluetooth speaker with 360° surround sound.",
    rating: 4.5, reviewCount: 198,
    reviews: [
      { author: "Chetan R.", stars: 5, text: "Amazing sound for its tiny size! Waterproof is a bonus." },
      { author: "Sachin K.", stars: 4, text: "Great for outdoor use, battery life is impressive." },
      { author: "Bhavesh M.", stars: 5, text: "Best portable speaker I've used. Crystal clear audio." }
    ]
  },
  {
    id: 26, name: "Power Bank 20000mAh", price: 1899,
    img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop",
    category: "electronics",
    description: "High-capacity 20000mAh power bank with 65W fast charging.",
    rating: 4.6, reviewCount: 412,
    reviews: [
      { author: "Saurabh P.", stars: 5, text: "Charges my laptop and phone easily. Great value!" },
      { author: "Tejas S.", stars: 5, text: "65W fast charging is genuinely fast. Love it." },
      { author: "Dhruv K.", stars: 4, text: "Great capacity, only slightly heavy but worth it." }
    ]
  },
  {
    id: 27, name: "4K Action Camera", price: 8999,
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=600&fit=crop",
    category: "electronics",
    description: "Waterproof 4K action camera with image stabilisation. For adventurers.",
    rating: 4.7, reviewCount: 163,
    reviews: [
      { author: "Rahul V.", stars: 5, text: "Incredible video quality. Perfect for travel vlogs!" },
      { author: "Nitin S.", stars: 4, text: "Great stabilisation, waterproofing works amazingly." },
      { author: "Arun T.", stars: 5, text: "Best action camera in this price range." }
    ]
  },
  {
    id: 28, name: "Smart Ring Doorbell", price: 4499,
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=600&fit=crop",
    category: "electronics",
    description: "HD video doorbell with night vision and two-way audio. Smart home essential.",
    rating: 4.4, reviewCount: 134,
    reviews: [
      { author: "Manoj K.", stars: 5, text: "Night vision is excellent. Great for security." },
      { author: "Lokesh B.", stars: 4, text: "Easy installation, works perfectly with the app." },
      { author: "Rajesh N.", stars: 4, text: "Good quality video, two-way audio is clear." }
    ]
  },
  {
    id: 29, name: "Mechanical Keyboard RGB", price: 5299,
    img: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=600&fit=crop",
    category: "electronics",
    description: "Compact TKL mechanical keyboard with RGB backlight and tactile switches.",
    rating: 4.8, reviewCount: 256,
    reviews: [
      { author: "Pratik S.", stars: 5, text: "The switches feel amazing. RGB is gorgeous!" },
      { author: "Harsh D.", stars: 5, text: "Best typing experience I've ever had." },
      { author: "Ronak M.", stars: 4, text: "Premium feel, build quality is excellent." }
    ]
  },
  {
    id: 30, name: "Wireless Charging Pad", price: 1299,
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop",
    category: "electronics",
    description: "Fast 15W wireless charging pad compatible with all Qi devices.",
    rating: 4.5, reviewCount: 321,
    reviews: [
      { author: "Vivek K.", stars: 5, text: "Charges super fast. Clean minimal design!" },
      { author: "Ankur S.", stars: 4, text: "Works with my phone and earbuds simultaneously." },
      { author: "Harsh T.", stars: 5, text: "Great quality, no heat issues at all." }
    ]
  },
  {
    id: 31, name: "Smart LED Strip 5M", price: 1599,
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=600&fit=crop",
    category: "electronics",
    description: "App-controlled 5M RGB LED strip. Sync with music for immersive lighting.",
    rating: 4.4, reviewCount: 278,
    reviews: [
      { author: "Kunal P.", stars: 5, text: "Music sync feature is insane! Room looks amazing." },
      { author: "Shreyash B.", stars: 4, text: "Very easy to install, app works smoothly." },
      { author: "Parth N.", stars: 4, text: "Great for gaming setup or bedroom ambiance." }
    ]
  },
  {
    id: 32, name: "Noise-Cancelling Buds Pro", price: 4799,
    img: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&h=600&fit=crop",
    category: "electronics",
    description: "Premium true wireless earbuds with adaptive ANC and spatial audio.",
    rating: 4.9, reviewCount: 389,
    reviews: [
      { author: "Siddharth T.", stars: 5, text: "Spatial audio is next level. Best earbuds ever!" },
      { author: "Nikhil B.", stars: 5, text: "ANC is so good you forget the world exists." },
      { author: "Ayaan M.", stars: 5, text: "Worth every single rupee. Absolutely perfect." }
    ]
  },
  {
    id: 33, name: "Portable Mini Projector", price: 9999,
    img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2MDAnIGhlaWdodD0nNjAwJyB2aWV3Qm94PScwIDAgNjAwIDYwMCc+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSdiZycgeDE9JzAlJyB5MT0nMCUnIHgyPScxMDAlJyB5Mj0nMTAwJSc+PHN0b3Agb2Zmc2V0PScwJScgc3RvcC1jb2xvcj0nIzBmMTcyYScvPjxzdG9wIG9mZnNldD0nMTAwJScgc3RvcC1jb2xvcj0nIzFlMWI0YicvPjwvbGluZWFyR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGlkPSdiZWFtJyBjeD0nMjUlJyBjeT0nNTAlJyByPSc3NSUnPjxzdG9wIG9mZnNldD0nMCUnIHN0b3AtY29sb3I9JyNlMGYyZmUnIHN0b3Atb3BhY2l0eT0nMC41Jy8+PHN0b3Agb2Zmc2V0PScxMDAlJyBzdG9wLWNvbG9yPScjMGVhNWU5JyBzdG9wLW9wYWNpdHk9JzAnLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0nNjAwJyBoZWlnaHQ9JzYwMCcgZmlsbD0ndXJsKCNiZyknLz48cGF0aCBkPSdNMjEwIDI3NSBMNTMwIDE0NSBMNTMwIDM5MCBaJyBmaWxsPSd1cmwoI2JlYW0pJy8+PHJlY3QgeD0nNDkwJyB5PScxNTgnIHdpZHRoPSc5MCcgaGVpZ2h0PScyMjAnIHJ4PSc1JyBmaWxsPScjMWU0MGFmJyBvcGFjaXR5PScwLjcnLz48cmVjdCB4PSc0OTgnIHk9JzE3MCcgd2lkdGg9Jzc0JyBoZWlnaHQ9JzUwJyByeD0nMycgZmlsbD0nIzNiODJmNicgb3BhY2l0eT0nMC45Jy8+PHJlY3QgeD0nNDk4JyB5PScyMzAnIHdpZHRoPSc1MCcgaGVpZ2h0PSc3JyByeD0nMicgZmlsbD0nIzkzYzVmZCcgb3BhY2l0eT0nMC44Jy8+PHJlY3QgeD0nNDk4JyB5PScyNDUnIHdpZHRoPSc2NScgaGVpZ2h0PSc3JyByeD0nMicgZmlsbD0nIzkzYzVmZCcgb3BhY2l0eT0nMC41Jy8+PHJlY3QgeD0nNDk4JyB5PScyNjAnIHdpZHRoPSc0MCcgaGVpZ2h0PSc3JyByeD0nMicgZmlsbD0nIzkzYzVmZCcgb3BhY2l0eT0nMC41Jy8+PHJlY3QgeD0nOTAnIHk9JzIzMicgd2lkdGg9JzE2NScgaGVpZ2h0PScxMDUnIHJ4PScxNCcgZmlsbD0nIzM3NDE1MScvPjxyZWN0IHg9JzEwMCcgeT0nMjQyJyB3aWR0aD0nMTQ1JyBoZWlnaHQ9Jzg1JyByeD0nOScgZmlsbD0nIzFmMjkzNycvPjxjaXJjbGUgY3g9JzIxNScgY3k9JzI4NCcgcj0nMzQnIGZpbGw9JyMxMTE4MjcnLz48Y2lyY2xlIGN4PScyMTUnIGN5PScyODQnIHI9JzI1JyBmaWxsPScjMWU0MGFmJy8+PGNpcmNsZSBjeD0nMjE1JyBjeT0nMjg0JyByPScxNicgZmlsbD0nIzNiODJmNicvPjxjaXJjbGUgY3g9JzIwOCcgY3k9JzI3Nycgcj0nNicgZmlsbD0nIzkzYzVmZCcgb3BhY2l0eT0nMC43Jy8+PGxpbmUgeDE9JzExMicgeTE9JzI1OCcgeDI9JzExMicgeTI9JzMxMCcgc3Ryb2tlPScjNGI1NTYzJyBzdHJva2Utd2lkdGg9JzInLz48bGluZSB4MT0nMTIxJyB5MT0nMjU4JyB4Mj0nMTIxJyB5Mj0nMzEwJyBzdHJva2U9JyM0YjU1NjMnIHN0cm9rZS13aWR0aD0nMicvPjxsaW5lIHgxPScxMzAnIHkxPScyNTgnIHgyPScxMzAnIHkyPSczMTAnIHN0cm9rZT0nIzRiNTU2Mycgc3Ryb2tlLXdpZHRoPScyJy8+PGNpcmNsZSBjeD0nMTQ4JyBjeT0nMzI4JyByPSc2JyBmaWxsPScjMjJjNTVlJy8+PHRleHQgeD0nMzAwJyB5PSc1MjgnIHRleHQtYW5jaG9yPSdtaWRkbGUnIGZvbnQtZmFtaWx5PSdBcmlhbCcgZm9udC1zaXplPScyMicgZmlsbD0nIzYwYTVmYScgZm9udC13ZWlnaHQ9J2JvbGQnPlBvcnRhYmxlIE1pbmkgUHJvamVjdG9yPC90ZXh0Pjx0ZXh0IHg9JzMwMCcgeT0nNTYyJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZvbnQtc2l6ZT0nMTQnIGZpbGw9JyM5M2M1ZmQnPkZ1bGwgSEQg4oCiIDIwMC1pbmNoIFRocm93PC90ZXh0Pjwvc3ZnPg==",
    category: "electronics",
    description: "Full HD mini projector with 200-inch throw and built-in speakers.",
    rating: 4.6, reviewCount: 98,
    reviews: [
      { author: "Vipul K.", stars: 5, text: "Movie nights are transformed. Brilliant picture!" },
      { author: "Chirag S.", stars: 4, text: "Great for home theatre. Easy setup." },
      { author: "Mihir P.", stars: 5, text: "Compact but powerful. Really impressed." }
    ]
  },
  {
    id: 34, name: "Smart Fitness Band", price: 2799,
    img: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&h=600&fit=crop",
    category: "electronics",
    description: "Slim fitness band with SpO2 monitor, sleep tracking and 14-day battery.",
    rating: 4.5, reviewCount: 445,
    reviews: [
      { author: "Swati N.", stars: 5, text: "Sleep tracking is incredibly accurate!" },
      { author: "Jatin K.", stars: 4, text: "14 day battery is no joke. Really impressed." },
      { author: "Prateek M.", stars: 5, text: "Lightweight and packed with features. Great buy." }
    ]
  },
  {
    id: 35, name: "USB-C Hub 9-in-1", price: 3499,
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop",
    category: "electronics",
    description: "9-in-1 USB-C hub with 4K HDMI, 100W PD, SD card, and USB 3.0 ports.",
    rating: 4.7, reviewCount: 212,
    reviews: [
      { author: "Kiran B.", stars: 5, text: "Solves all my port problems. Build quality is great!" },
      { author: "Dhawal S.", stars: 4, text: "Works perfectly with my laptop, no drivers needed." },
      { author: "Rishit P.", stars: 5, text: "4K HDMI is flawless. Best hub available." }
    ]
  },
  {
    id: 36, name: "Gaming Mouse Pro", price: 3999,
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&h=600&fit=crop",
    category: "electronics",
    description: "25600 DPI optical gaming mouse with RGB lighting and 7 programmable buttons.",
    rating: 4.8, reviewCount: 334,
    reviews: [
      { author: "Kartikeya S.", stars: 5, text: "Precision is insane! Dominates every game." },
      { author: "Aditya B.", stars: 5, text: "Comfortable grip, RGB looks amazing in dark." },
      { author: "Lakshay M.", stars: 4, text: "Great for FPS games, very responsive." }
    ]
  },
  {
    id: 37, name: "Portable SSD 1TB", price: 7499,
    img: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&h=600&fit=crop",
    category: "electronics",
    description: "Ultra-fast 1TB portable SSD with 1050 MB/s read speed. Drop-proof design.",
    rating: 4.9, reviewCount: 178,
    reviews: [
      { author: "Piyush K.", stars: 5, text: "Transfer speeds are blazing fast. Tiny and sturdy!" },
      { author: "Naman S.", stars: 5, text: "Drop-proof casing actually works. Great product." },
      { author: "Ankit T.", stars: 5, text: "Best external SSD I've used. Totally reliable." }
    ]
  },
  {
    id: 38, name: "Smart Air Purifier", price: 6999,
    img: "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?w=600&h=600&fit=crop",
    category: "electronics",
    description: "HEPA H13 smart air purifier covering 500 sq ft. Auto mode and AQI display.",
    rating: 4.7, reviewCount: 124,
    reviews: [
      { author: "Anil S.", stars: 5, text: "Air quality improved noticeably from day 1!" },
      { author: "Rekha N.", stars: 5, text: "Auto mode works brilliantly, very quiet." },
      { author: "Sunil P.", stars: 4, text: "Great for Delhi winters. Highly recommended." }
    ]
  },
  {
    id: 39, name: "Webcam 4K Pro", price: 5999,
    img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=600&fit=crop",
    category: "electronics",
    description: "4K streaming webcam with AI auto-focus and built-in noise-cancelling mic.",
    rating: 4.6, reviewCount: 167,
    reviews: [
      { author: "Hitesh R.", stars: 5, text: "Video calls look like I'm in a studio. Superb!" },
      { author: "Vinod K.", stars: 4, text: "AI autofocus is genuinely impressive." },
      { author: "Manish S.", stars: 5, text: "Perfect for remote work. No more blurry calls!" }
    ]
  },
  {
    id: 40, name: "Foldable Drone 4K", price: 12999,
    img: "https://images.unsplash.com/photo-1506947411487-a56738267384?w=600&h=600&fit=crop",
    category: "electronics",
    description: "Compact foldable drone with 4K camera, 30-min flight time, GPS return.",
    rating: 4.7, reviewCount: 89,
    reviews: [
      { author: "Utsav M.", stars: 5, text: "Aerial footage is breathtaking. So easy to fly!" },
      { author: "Yuvraj S.", stars: 5, text: "GPS return feature saved my drone already!" },
      { author: "Ishaan K.", stars: 4, text: "Great drone, video stabilisation is impressive." }
    ]
  },

  // LIFESTYLE (16)
  {
    id: 41, name: "Himalayan Pink Salt Lamp", price: 1299,
    img: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=600&h=600&fit=crop",
    category: "lifestyle",
    description: "Authentic Himalayan pink salt lamp with dimmer switch. Warm ambient glow.",
    rating: 4.5, reviewCount: 298,
    reviews: [
      { author: "Sweta B.", stars: 5, text: "Love the warm glow! Creates such a cozy atmosphere." },
      { author: "Priya N.", stars: 5, text: "Beautiful lamp, perfect for meditation space." },
      { author: "Varsha K.", stars: 4, text: "Looks exactly like the photo, very calming." }
    ]
  },
  {
    id: 42, name: "Bamboo Yoga Mat", price: 1999,
    img: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=600&h=600&fit=crop",
    category: "lifestyle",
    description: "Eco-friendly bamboo fibre yoga mat with superior grip and alignment lines.",
    rating: 4.6, reviewCount: 187,
    reviews: [
      { author: "Raksha P.", stars: 5, text: "Best yoga mat I've tried. Non-slip is excellent!" },
      { author: "Sunita M.", stars: 5, text: "Eco-friendly and durable. Love the alignment lines." },
      { author: "Krupa S.", stars: 4, text: "Great thickness and grip, easy to clean." }
    ]
  },
  {
    id: 43, name: "French Press Coffee Maker", price: 1799,
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop",
    category: "lifestyle",
    description: "Premium stainless steel French press. Brews rich, aromatic coffee.",
    rating: 4.7, reviewCount: 243,
    reviews: [
      { author: "Rajiv T.", stars: 5, text: "Coffee tastes so much better from this. Love it!" },
      { author: "Sneha P.", stars: 5, text: "Easy to use and clean. Great coffee every time." },
      { author: "Nitin K.", stars: 4, text: "Sturdy build, keeps coffee warm for long." }
    ]
  },
  {
    id: 44, name: "Succulent Terrarium Kit", price: 1499,
    img: "https://images.unsplash.com/photo-1463320898484-cdee8141c787?w=600&h=600&fit=crop",
    category: "lifestyle",
    description: "DIY succulent terrarium kit with glass bowl, stones, soil and 3 plants.",
    rating: 4.4, reviewCount: 156,
    reviews: [
      { author: "Ritika S.", stars: 5, text: "Such a fun activity! Looks beautiful on my desk." },
      { author: "Neetu B.", stars: 4, text: "Plants arrived healthy, instructions were clear." },
      { author: "Harsha N.", stars: 5, text: "Perfect gift idea. Everyone loved it!" }
    ]
  },
  {
    id: 45, name: "Scented Soy Candle Set", price: 999,
    img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&h=600&fit=crop",
    category: "lifestyle",
    description: "Set of 3 hand-poured soy wax candles in lavender, vanilla and sandalwood.",
    rating: 4.8, reviewCount: 334,
    reviews: [
      { author: "Amrita K.", stars: 5, text: "The lavender scent is divine! Burns evenly." },
      { author: "Nalini P.", stars: 5, text: "All three scents are lovely. Perfect for gifting!" },
      { author: "Sumana B.", stars: 5, text: "Long lasting and fills the room beautifully." }
    ]
  },
  {
    id: 46, name: "Leather Journal Planner", price: 849,
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=600&fit=crop",
    category: "lifestyle",
    description: "Hand-stitched leather journal with dot grid pages. For thinkers and dreamers.",
    rating: 4.6, reviewCount: 211,
    reviews: [
      { author: "Aditi R.", stars: 5, text: "Beautiful journal! The leather quality is amazing." },
      { author: "Meghna S.", stars: 5, text: "Perfect for bullet journaling. Pages are thick." },
      { author: "Neha T.", stars: 4, text: "Great quality, makes writing feel luxurious." }
    ]
  },
  {
    id: 47, name: "Copper Water Bottle", price: 1199,
    img: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=600&h=600&fit=crop",
    category: "lifestyle",
    description: "Pure copper water bottle with Ayurvedic benefits. Leak-proof seal.",
    rating: 4.5, reviewCount: 178,
    reviews: [
      { author: "Geeta S.", stars: 5, text: "Genuine copper, feels great. Very well crafted." },
      { author: "Bindu T.", stars: 4, text: "No leaking at all, good weight and quality." },
      { author: "Mala R.", stars: 5, text: "Love the Ayurvedic benefits. Very satisfied!" }
    ]
  },
  {
    id: 48, name: "Chess Board Wooden", price: 2499,
    img: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&h=600&fit=crop",
    category: "lifestyle",
    description: "Handcrafted walnut and maple chess board with weighted pieces. Collector's edition.",
    rating: 4.9, reviewCount: 87,
    reviews: [
      { author: "Vijay K.", stars: 5, text: "Absolutely stunning board. Heirloom quality!" },
      { author: "Ramesh N.", stars: 5, text: "Pieces are heavy and satisfying. Brilliant craftsmanship." },
      { author: "Dinesh P.", stars: 5, text: "Best chess set I've ever owned. Worth every rupee." }
    ]
  },
  {
    id: 49, name: "Hammock Camping Chair", price: 3299,
    img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=600&fit=crop",
    category: "lifestyle",
    description: "Ultralight portable hammock. Sets up in 2 minutes between any two trees.",
    rating: 4.5, reviewCount: 112,
    reviews: [
      { author: "Tarun S.", stars: 5, text: "So relaxing! Setup really is as fast as advertised." },
      { author: "Gaurang B.", stars: 4, text: "Lightweight and strong. Great for hiking trips." },
      { author: "Aman K.", stars: 5, text: "Best outdoor purchase I've made this year." }
    ]
  },
  {
    id: 50, name: "Aromatherapy Diffuser", price: 1699,
    img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=600&fit=crop",
    category: "lifestyle",
    description: "Ultrasonic essential oil diffuser with 7-colour LED and timer settings.",
    rating: 4.6, reviewCount: 267,
    reviews: [
      { author: "Varsha P.", stars: 5, text: "Fills the room with fragrance beautifully." },
      { author: "Padma S.", stars: 5, text: "LED colours are gorgeous. Very soothing." },
      { author: "Lalitha N.", stars: 4, text: "Works perfectly, timer feature is very handy." }
    ]
  },
  {
    id: 51, name: "Insulated Lunch Box", price: 799,
    img: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&h=600&fit=crop",
    category: "lifestyle",
    description: "Stainless steel insulated lunch box. Keeps food hot for 6 hours.",
    rating: 4.4, reviewCount: 389,
    reviews: [
      { author: "Anupama R.", stars: 5, text: "Food stays hot till lunchtime! Excellent quality." },
      { author: "Pushpa N.", stars: 4, text: "Great seal, no leaks at all. Easy to clean." },
      { author: "Sudha K.", stars: 4, text: "Perfect for office use. Good size and quality." }
    ]
  },
  {
    id: 52, name: "Desk Plant Pot Set", price: 1099,
    img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop",
    category: "lifestyle",
    description: "Set of 3 minimalist ceramic plant pots with bamboo trays. Perfect desk decor.",
    rating: 4.7, reviewCount: 143,
    reviews: [
      { author: "Shraddha P.", stars: 5, text: "So pretty on my desk! Great quality ceramics." },
      { author: "Jayanti S.", stars: 5, text: "Bamboo trays are a thoughtful touch. Beautiful set." },
      { author: "Mamta K.", stars: 4, text: "Great size for small succulents and cacti." }
    ]
  },
  {
    id: 53, name: "Natural Loofah Gift Set", price: 599,
    img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=600&fit=crop",
    category: "lifestyle",
    description: "Organic natural loofah set with exfoliating pads and mesh bag. Self-care essential.",
    rating: 4.3, reviewCount: 198,
    reviews: [
      { author: "Divya N.", stars: 4, text: "Natural and eco-friendly. Great for skin." },
      { author: "Nita S.", stars: 5, text: "Perfect gift for someone who loves self-care!" },
      { author: "Pallavi K.", stars: 4, text: "Good quality, skin feels so smooth after use." }
    ]
  },
  {
    id: 54, name: "Macramé Wall Hanging", price: 1799,
    img: "https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?w=600&h=600&fit=crop",
    category: "lifestyle",
    description: "Handmade boho macramé wall hanging with driftwood rod. 60cm wide.",
    rating: 4.8, reviewCount: 167,
    reviews: [
      { author: "Sonali T.", stars: 5, text: "Transforms my living room completely. So beautiful!" },
      { author: "Payal R.", stars: 5, text: "Handmade quality is evident. Perfectly crafted." },
      { author: "Rashmi N.", stars: 4, text: "Love the boho vibe, exactly as pictured." }
    ]
  },
  {
    id: 55, name: "Mini Desktop Vacuum", price: 699,
    img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2MDAnIGhlaWdodD0nNjAwJyB2aWV3Qm94PScwIDAgNjAwIDYwMCc+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSdiZycgeDE9JzAlJyB5MT0nMCUnIHgyPScxMDAlJyB5Mj0nMTAwJSc+PHN0b3Agb2Zmc2V0PScwJScgc3RvcC1jb2xvcj0nI2YwZmRmNCcvPjxzdG9wIG9mZnNldD0nMTAwJScgc3RvcC1jb2xvcj0nI2RjZmNlNycvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSdib2R5JyB4MT0nMCUnIHkxPScwJScgeDI9JzEwMCUnIHkyPScxMDAlJz48c3RvcCBvZmZzZXQ9JzAlJyBzdG9wLWNvbG9yPScjN2MzYWVkJy8+PHN0b3Agb2Zmc2V0PScxMDAlJyBzdG9wLWNvbG9yPScjNWIyMWI2Jy8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9JzYwMCcgaGVpZ2h0PSc2MDAnIGZpbGw9J3VybCgjYmcpJy8+PHJlY3QgeD0nMTUwJyB5PScyMDUnIHdpZHRoPScyOTAnIGhlaWdodD0nMTU1JyByeD0nNzgnIGZpbGw9J3VybCgjYm9keSknLz48ZWxsaXBzZSBjeD0nMjc1JyBjeT0nMjI1JyByeD0nODUnIHJ5PScyMicgZmlsbD0nd2hpdGUnIG9wYWNpdHk9JzAuMTInLz48cmVjdCB4PSc0MDUnIHk9JzI2MCcgd2lkdGg9JzEwNScgaGVpZ2h0PSc0Micgcng9JzknIGZpbGw9JyM0YzFkOTUnLz48ZWxsaXBzZSBjeD0nNTEwJyBjeT0nMjgxJyByeD0nMTgnIHJ5PScyMScgZmlsbD0nIzNiMDc2NCcvPjxyZWN0IHg9JzEzMCcgeT0nMjY3JyB3aWR0aD0nMjgnIGhlaWdodD0nMjQnIHJ4PSc1JyBmaWxsPScjMzc0MTUxJy8+PHJlY3QgeD0nMTM2JyB5PScyNzMnIHdpZHRoPScxNicgaGVpZ2h0PScxMicgcng9JzInIGZpbGw9JyMxZjI5MzcnLz48cmVjdCB4PScyMjUnIHk9JzIyOCcgd2lkdGg9JzExNScgaGVpZ2h0PSc5Nicgcng9JzExJyBmaWxsPScjOGI1Y2Y2JyBvcGFjaXR5PScwLjQ1Jy8+PGNpcmNsZSBjeD0nMzQ4JyBjeT0nMjgyJyByPScyNicgZmlsbD0nIzZkMjhkOScvPjxjaXJjbGUgY3g9JzM0OCcgY3k9JzI4Micgcj0nMTgnIGZpbGw9JyM0YzFkOTUnLz48cGF0aCBkPSdNMzQ4IDI2OSBMMzQ4IDI3OCcgc3Ryb2tlPSd3aGl0ZScgc3Ryb2tlLXdpZHRoPSczLjUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcvPjxwYXRoIGQ9J00zMzcgMjczIFEzMjkgMjgyIDMzMyAyOTIgUTMzOSAzMDEgMzQ4IDMwMSBRMzU3IDMwMSAzNjMgMjkyIFEzNjcgMjgyIDM1OSAyNzMnIGZpbGw9J25vbmUnIHN0cm9rZT0nd2hpdGUnIHN0cm9rZS13aWR0aD0nMi41Jy8+PHBhdGggZD0nTTEzMCAyODEgUTY4IDI4MSA2OCAzMjggUTY4IDM2OCAxMTIgMzY4JyBmaWxsPSdub25lJyBzdHJva2U9JyM2YjcyODAnIHN0cm9rZS13aWR0aD0nOScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJy8+PHJlY3QgeD0nMTAwJyB5PSczNTUnIHdpZHRoPScyNicgaGVpZ2h0PScxOCcgcng9JzQnIGZpbGw9JyMzNzQxNTEnLz48dGV4dCB4PSczMDAnIHk9JzUyOCcgdGV4dC1hbmNob3I9J21pZGRsZScgZm9udC1mYW1pbHk9J0FyaWFsJyBmb250LXNpemU9JzIyJyBmaWxsPScjNWIyMWI2JyBmb250LXdlaWdodD0nYm9sZCc+TWluaSBEZXNrdG9wIFZhY3V1bTwvdGV4dD48dGV4dCB4PSczMDAnIHk9JzU2MicgdGV4dC1hbmNob3I9J21pZGRsZScgZm9udC1mYW1pbHk9J0FyaWFsJyBmb250LXNpemU9JzE0JyBmaWxsPScjN2MzYWVkJz5VU0IgUG93ZXJlZCDigKIgQ29tcGFjdCBEZXNpZ248L3RleHQ+PC9zdmc+",
    category: "lifestyle",
    description: "Compact USB-powered desktop vacuum for keyboard and desk cleaning.",
    rating: 4.2, reviewCount: 234,
    reviews: [
      { author: "Gaurav T.", stars: 4, text: "Surprisingly powerful for its size! Very handy." },
      { author: "Rajan S.", stars: 4, text: "Great for cleaning keyboard crumbs. Simple and effective." },
      { author: "Vikash B.", stars: 5, text: "Best desk accessory. Works perfectly." }
    ]
  },
  {
    id: 56, name: "Crystal Singing Bowl", price: 4299,
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
    category: "lifestyle",
    description: "Frosted quartz crystal singing bowl for meditation and sound healing.",
    rating: 4.9, reviewCount: 78,
    reviews: [
      { author: "Yoga Studio", stars: 5, text: "Incredible resonance. Our students are mesmerised." },
      { author: "Priyamvada S.", stars: 5, text: "The tone is pure and healing. Life changing!" },
      { author: "Mantra T.", stars: 5, text: "Perfect for sound baths. Superb quality." }
    ]
  },

  // SHOES (6)
  {
    id: 57, name: "Classic White Sneakers", price: 2999,
    img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop",
    category: "shoes",
    description: "Clean minimalist white sneakers with cushioned sole. All-day comfort meets timeless style.",
    rating: 4.7, reviewCount: 312,
    reviews: [
      { author: "Tanmay S.", stars: 5, text: "Cleanest white sneakers I've owned. Looks premium!" },
      { author: "Riya M.", stars: 5, text: "So comfortable, wore them all day without any pain." },
      { author: "Vaibhav K.", stars: 4, text: "Great look, goes with literally everything." }
    ]
  },
  {
    id: 58, name: "Chunky Platform Boots", price: 4299,
    img: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&h=600&fit=crop",
    category: "shoes",
    description: "Bold chunky platform boots with faux leather finish. Statement street style.",
    rating: 4.5, reviewCount: 134,
    reviews: [
      { author: "Ishita R.", stars: 5, text: "Makes me 3 inches taller and 10x more confident!" },
      { author: "Zoya N.", stars: 4, text: "Super edgy look, quality is excellent for the price." },
      { author: "Nivedita S.", stars: 5, text: "Best purchase of my life. So many compliments." }
    ]
  },
  {
    id: 59, name: "Kolhapuri Sandals", price: 1399,
    img: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&h=600&fit=crop",
    category: "shoes",
    description: "Authentic handcrafted Kolhapuri chappals in genuine tan leather.",
    rating: 4.6, reviewCount: 198,
    reviews: [
      { author: "Sunita P.", stars: 5, text: "Authentic and comfortable. Perfect with kurtas!" },
      { author: "Rekha B.", stars: 5, text: "Genuine leather, gets better with every wear." },
      { author: "Kaveri T.", stars: 4, text: "Classic style, very well stitched." }
    ]
  },
  {
    id: 60, name: "Running Shoes Air Pro", price: 4999,
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=600&fit=crop",
    category: "shoes",
    description: "Lightweight air-cushioned running shoes with anti-slip grip. Built for performance.",
    rating: 4.8, reviewCount: 267,
    reviews: [
      { author: "Pranav D.", stars: 5, text: "Shaved 2 minutes off my 5K time. Incredible shoes!" },
      { author: "Rohan V.", stars: 5, text: "Feather light and very responsive. Love them." },
      { author: "Kiran S.", stars: 4, text: "Great grip and cushioning for long runs." }
    ]
  },
  {
    id: 61, name: "Leather Oxford Formals", price: 3799,
    img: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=600&h=600&fit=crop",
    category: "shoes",
    description: "Premium full-grain leather Oxford shoes. Polished and professional.",
    rating: 4.7, reviewCount: 156,
    reviews: [
      { author: "Siddharth M.", stars: 5, text: "Looks incredibly premium. Great for interviews." },
      { author: "Arjun T.", stars: 5, text: "Leather quality is top notch. Very comfortable." },
      { author: "Sameer K.", stars: 4, text: "Classic Oxford style, fits true to size." }
    ]
  },
  {
    id: 62, name: "Slip-On Canvas Shoes", price: 1299,
    img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop",
    category: "shoes",
    description: "Casual slip-on canvas shoes with memory foam insole. Easy everyday wear.",
    rating: 4.3, reviewCount: 223,
    reviews: [
      { author: "Deepika R.", stars: 4, text: "Super easy to wear, memory foam is a nice touch." },
      { author: "Neha T.", stars: 4, text: "Comfortable and casual. Great for college." },
      { author: "Megha S.", stars: 5, text: "Best casual shoes for the price. Very happy!" }
    ]
  },

  // COSMETICS (8)
  {
    id: 63, name: "Vitamin C Glow Serum", price: 1499,
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop",
    category: "cosmetics",
    description: "Brightening 20% Vitamin C serum with hyaluronic acid. Fades dark spots in 4 weeks.",
    rating: 4.8, reviewCount: 456,
    reviews: [
      { author: "Priya T.", stars: 5, text: "My skin is glowing! Dark spots visibly reduced." },
      { author: "Anushka M.", stars: 5, text: "Best serum I've tried. Lightweight and fast absorbing." },
      { author: "Kavya S.", stars: 4, text: "Noticed results in 3 weeks. Highly recommend!" }
    ]
  },
  {
    id: 64, name: "Matte Lipstick Set", price: 899,
    img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2MDAnIGhlaWdodD0nNjAwJyB2aWV3Qm94PScwIDAgNjAwIDYwMCc+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSdiZycgeDE9JzAlJyB5MT0nMCUnIHgyPScxMDAlJyB5Mj0nMTAwJSc+PHN0b3Agb2Zmc2V0PScwJScgc3RvcC1jb2xvcj0nI2ZmZjBmMycvPjxzdG9wIG9mZnNldD0nMTAwJScgc3RvcC1jb2xvcj0nI2ZmZTRlOCcvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSc2MDAnIGhlaWdodD0nNjAwJyBmaWxsPSd1cmwoI2JnKScvPjxyZWN0IHg9JzY4JyB5PScyMDUnIHdpZHRoPSc0MCcgaGVpZ2h0PScxNjAnIHJ4PSc2JyBmaWxsPScjYzAzOTJiJy8+PHJlY3QgeD0nNzInIHk9JzE5Nycgd2lkdGg9JzMyJyBoZWlnaHQ9JzIyJyByeD0nNCcgZmlsbD0nI2U3NGMzYycvPjxwYXRoIGQ9J003MiAxOTcgUTg4IDE3MiAxMDQgMTk3JyBmaWxsPScjYzAzOTJiJy8+PHJlY3QgeD0nNjgnIHk9JzM0NScgd2lkdGg9JzQwJyBoZWlnaHQ9JzI4JyByeD0nNCcgZmlsbD0nIzkyMmIyMScvPjxyZWN0IHg9JzEyOCcgeT0nMTkzJyB3aWR0aD0nNDAnIGhlaWdodD0nMTcyJyByeD0nNicgZmlsbD0nI2Q4MWI2MCcvPjxyZWN0IHg9JzEzMicgeT0nMTg1JyB3aWR0aD0nMzInIGhlaWdodD0nMjInIHJ4PSc0JyBmaWxsPScjZjA2MjkyJy8+PHBhdGggZD0nTTEzMiAxODUgUTE0OCAxNjAgMTY0IDE4NScgZmlsbD0nI2Q4MWI2MCcvPjxyZWN0IHg9JzEyOCcgeT0nMzM1JyB3aWR0aD0nNDAnIGhlaWdodD0nMzAnIHJ4PSc0JyBmaWxsPScjODgwZTRmJy8+PHJlY3QgeD0nMTg4JyB5PScyMTAnIHdpZHRoPSc0MCcgaGVpZ2h0PScxNTUnIHJ4PSc2JyBmaWxsPScjYzI4NTZhJy8+PHJlY3QgeD0nMTkyJyB5PScyMDInIHdpZHRoPSczMicgaGVpZ2h0PScyMicgcng9JzQnIGZpbGw9JyNkNGE1NzQnLz48cGF0aCBkPSdNMTkyIDIwMiBRMjA4IDE3NyAyMjQgMjAyJyBmaWxsPScjYzI4NTZhJy8+PHJlY3QgeD0nMTg4JyB5PSczNDAnIHdpZHRoPSc0MCcgaGVpZ2h0PScyNScgcng9JzQnIGZpbGw9JyNhMDUyMmQnLz48cmVjdCB4PScyNDgnIHk9JzE5OCcgd2lkdGg9JzQwJyBoZWlnaHQ9JzE2Nycgcng9JzYnIGZpbGw9JyM3YjFmYTInLz48cmVjdCB4PScyNTInIHk9JzE5MCcgd2lkdGg9JzMyJyBoZWlnaHQ9JzIyJyByeD0nNCcgZmlsbD0nI2FiNDdiYycvPjxwYXRoIGQ9J00yNTIgMTkwIFEyNjggMTY1IDI4NCAxOTAnIGZpbGw9JyM3YjFmYTInLz48cmVjdCB4PScyNDgnIHk9JzMzOCcgd2lkdGg9JzQwJyBoZWlnaHQ9JzI3JyByeD0nNCcgZmlsbD0nIzRhMTQ4YycvPjxyZWN0IHg9JzMwOCcgeT0nMjA1JyB3aWR0aD0nNDAnIGhlaWdodD0nMTYwJyByeD0nNicgZmlsbD0nI2U2NGExOScvPjxyZWN0IHg9JzMxMicgeT0nMTk3JyB3aWR0aD0nMzInIGhlaWdodD0nMjInIHJ4PSc0JyBmaWxsPScjZmY3MDQzJy8+PHBhdGggZD0nTTMxMiAxOTcgUTMyOCAxNzIgMzQ0IDE5NycgZmlsbD0nI2U2NGExOScvPjxyZWN0IHg9JzMwOCcgeT0nMzQ1JyB3aWR0aD0nNDAnIGhlaWdodD0nMjAnIHJ4PSc0JyBmaWxsPScjYmYzNjBjJy8+PHJlY3QgeD0nMzY4JyB5PScyMTUnIHdpZHRoPSc0MCcgaGVpZ2h0PScxNTAnIHJ4PSc2JyBmaWxsPScjNmExYjlhJy8+PHJlY3QgeD0nMzcyJyB5PScyMDcnIHdpZHRoPSczMicgaGVpZ2h0PScyMicgcng9JzQnIGZpbGw9JyM5YzI3YjAnLz48cGF0aCBkPSdNMzcyIDIwNyBRMzg4IDE4MiA0MDQgMjA3JyBmaWxsPScjNmExYjlhJy8+PHJlY3QgeD0nMzY4JyB5PSczNDUnIHdpZHRoPSc0MCcgaGVpZ2h0PScyMCcgcng9JzQnIGZpbGw9JyM0YTE0OGMnLz48cmVjdCB4PSc0MjgnIHk9JzIwMCcgd2lkdGg9JzQwJyBoZWlnaHQ9JzE2NScgcng9JzYnIGZpbGw9JyNjNjI4MjgnLz48cmVjdCB4PSc0MzInIHk9JzE5Micgd2lkdGg9JzMyJyBoZWlnaHQ9JzIyJyByeD0nNCcgZmlsbD0nI2VmNTM1MCcvPjxwYXRoIGQ9J000MzIgMTkyIFE0NDggMTY3IDQ2NCAxOTInIGZpbGw9JyNjNjI4MjgnLz48cmVjdCB4PSc0MjgnIHk9JzM0MCcgd2lkdGg9JzQwJyBoZWlnaHQ9JzI1JyByeD0nNCcgZmlsbD0nI2I3MWMxYycvPjx0ZXh0IHg9JzMwMCcgeT0nNTI4JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZvbnQtc2l6ZT0nMjInIGZpbGw9JyM4ODBlNGYnIGZvbnQtd2VpZ2h0PSdib2xkJz5NYXR0ZSBMaXBzdGljayBTZXQ8L3RleHQ+PHRleHQgeD0nMzAwJyB5PSc1NjInIHRleHQtYW5jaG9yPSdtaWRkbGUnIGZvbnQtZmFtaWx5PSdBcmlhbCcgZm9udC1zaXplPScxNCcgZmlsbD0nI2U5MWU4Yyc+NyBTaGFkZXMg4oCiIExvbmctV2VhciBGb3JtdWxhPC90ZXh0Pjwvc3ZnPg==",
    category: "cosmetics",
    description: "Set of 6 long-wear matte lipsticks in Indian-friendly nude and bold shades.",
    rating: 4.7, reviewCount: 534,
    reviews: [
      { author: "Ritu S.", stars: 5, text: "Stays on all day without drying lips. Perfect shades!" },
      { author: "Nisha K.", stars: 5, text: "All 6 shades are gorgeous. Great value set!" },
      { author: "Pooja B.", stars: 4, text: "Love the formula. Comfortable matte finish." }
    ]
  },
  {
    id: 65, name: "Rose Clay Face Mask", price: 799,
    img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=600&fit=crop",
    category: "cosmetics",
    description: "Deep cleansing rose kaolin clay mask with niacinamide. Reduces pores visibly.",
    rating: 4.6, reviewCount: 289,
    reviews: [
      { author: "Sneha R.", stars: 5, text: "My pores look so much smaller after just 3 uses!" },
      { author: "Tanya P.", stars: 4, text: "Great clay mask, rose scent is very soothing." },
      { author: "Archana K.", stars: 5, text: "Skin feels incredibly smooth and clean after." }
    ]
  },
  {
    id: 66, name: "Kajal Kohl Eyeliner", price: 299,
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop",
    category: "cosmetics",
    description: "Intense black kajal with smudge-proof formula. Long-lasting 18-hour wear.",
    rating: 4.9, reviewCount: 812,
    reviews: [
      { author: "Meera D.", stars: 5, text: "Best kajal ever. Doesn't smudge or fade at all!" },
      { author: "Aarti B.", stars: 5, text: "Dark black, applies smoothly. Love it!" },
      { author: "Shweta N.", stars: 5, text: "Worth every rupee. My holy grail kajal." }
    ]
  },
  {
    id: 67, name: "Sunscreen SPF 50 PA+++", price: 699,
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop",
    category: "cosmetics",
    description: "Lightweight SPF 50 PA+++ sunscreen with no white cast. Water-resistant formula.",
    rating: 4.7, reviewCount: 678,
    reviews: [
      { author: "Divya M.", stars: 5, text: "Finally a sunscreen with no white cast! Perfect." },
      { author: "Sahana T.", stars: 5, text: "Non-greasy and absorbs fast. Use it daily!" },
      { author: "Preeti K.", stars: 4, text: "Great for Indian skin tone. No flashback in photos." }
    ]
  },
  {
    id: 68, name: "Hydrating Face Moisturiser", price: 999,
    img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop",
    category: "cosmetics",
    description: "Gel-cream moisturiser with ceramides and peptides. 72-hour deep hydration.",
    rating: 4.6, reviewCount: 345,
    reviews: [
      { author: "Leena S.", stars: 5, text: "My skin stays hydrated all day. Amazing formula!" },
      { author: "Pallavi N.", stars: 4, text: "Lightweight and non-sticky. Perfect for humid weather." },
      { author: "Shruti M.", stars: 5, text: "Best moisturiser for combination skin. Love it!" }
    ]
  },
  {
    id: 69, name: "Eyeshadow Palette 12 Pan", price: 1299,
    img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=600&fit=crop",
    category: "cosmetics",
    description: "12-shade neutral to smokey eyeshadow palette with blendable pigments.",
    rating: 4.5, reviewCount: 267,
    reviews: [
      { author: "Radha P.", stars: 5, text: "Pigmentation is incredible! Lasts all day." },
      { author: "Simran T.", stars: 4, text: "Beautiful shades, very blendable. Great for beginners." },
      { author: "Chitra B.", stars: 5, text: "So many looks possible with this palette. Love it!" }
    ]
  },
  {
    id: 70, name: "Natural Lip Balm Set", price: 499,
    img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2MDAnIGhlaWdodD0nNjAwJyB2aWV3Qm94PScwIDAgNjAwIDYwMCc+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSdiZycgeDE9JzAlJyB5MT0nMCUnIHgyPScxMDAlJyB5Mj0nMTAwJSc+PHN0b3Agb2Zmc2V0PScwJScgc3RvcC1jb2xvcj0nI2ZlZmNlOCcvPjxzdG9wIG9mZnNldD0nMTAwJScgc3RvcC1jb2xvcj0nI2ZlZjNjNycvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSc2MDAnIGhlaWdodD0nNjAwJyBmaWxsPSd1cmwoI2JnKScvPjxlbGxpcHNlIGN4PScxNzgnIGN5PScyNjUnIHJ4PSc3Micgcnk9JzI0JyBmaWxsPScjYjkxYzFjJy8+PHJlY3QgeD0nMTA2JyB5PScyNDEnIHdpZHRoPScxNDQnIGhlaWdodD0nODInIHJ4PSc5JyBmaWxsPScjZGMyNjI2Jy8+PGVsbGlwc2UgY3g9JzE3OCcgY3k9JzMyMycgcng9JzcyJyByeT0nMjQnIGZpbGw9JyM5OTFiMWInLz48ZWxsaXBzZSBjeD0nMTc4JyBjeT0nMjQxJyByeD0nNzInIHJ5PScyNCcgZmlsbD0nI2VmNDQ0NCcvPjx0ZXh0IHg9JzE3OCcgeT0nMjQ2JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZvbnQtc2l6ZT0nMTQnIGZpbGw9J3doaXRlJyBmb250LXdlaWdodD0nYm9sZCc+U3RyYXdiZXJyeTwvdGV4dD48ZWxsaXBzZSBjeD0nMTc4JyBjeT0nMjg4JyByeD0nMzUnIHJ5PScxMCcgZmlsbD0nd2hpdGUnIG9wYWNpdHk9JzAuMTUnLz48ZWxsaXBzZSBjeD0nMzYwJyBjeT0nMjQ1JyByeD0nNzInIHJ5PScyNCcgZmlsbD0nIzlkMTc0ZCcvPjxyZWN0IHg9JzI4OCcgeT0nMjIxJyB3aWR0aD0nMTQ0JyBoZWlnaHQ9JzgyJyByeD0nOScgZmlsbD0nI2JlMTg1ZCcvPjxlbGxpcHNlIGN4PSczNjAnIGN5PSczMDMnIHJ4PSc3Micgcnk9JzI0JyBmaWxsPScjODMxODQzJy8+PGVsbGlwc2UgY3g9JzM2MCcgY3k9JzIyMScgcng9JzcyJyByeT0nMjQnIGZpbGw9JyNlYzQ4OTknLz48dGV4dCB4PSczNjAnIHk9JzIyNicgdGV4dC1hbmNob3I9J21pZGRsZScgZm9udC1mYW1pbHk9J0FyaWFsJyBmb250LXNpemU9JzE0JyBmaWxsPSd3aGl0ZScgZm9udC13ZWlnaHQ9J2JvbGQnPlJvc2U8L3RleHQ+PGVsbGlwc2UgY3g9JzM2MCcgY3k9JzI2OCcgcng9JzM1JyByeT0nMTAnIGZpbGw9J3doaXRlJyBvcGFjaXR5PScwLjE1Jy8+PGVsbGlwc2UgY3g9JzIwOCcgY3k9JzM3NScgcng9JzcyJyByeT0nMjQnIGZpbGw9JyM5MjQwMGUnLz48cmVjdCB4PScxMzYnIHk9JzM1MScgd2lkdGg9JzE0NCcgaGVpZ2h0PSc4Micgcng9JzknIGZpbGw9JyNkOTc3MDYnLz48ZWxsaXBzZSBjeD0nMjA4JyBjeT0nNDMzJyByeD0nNzInIHJ5PScyNCcgZmlsbD0nIzc4MzUwZicvPjxlbGxpcHNlIGN4PScyMDgnIGN5PSczNTEnIHJ4PSc3Micgcnk9JzI0JyBmaWxsPScjZmJiZjI0Jy8+PHRleHQgeD0nMjA4JyB5PSczNTYnIHRleHQtYW5jaG9yPSdtaWRkbGUnIGZvbnQtZmFtaWx5PSdBcmlhbCcgZm9udC1zaXplPScxNCcgZmlsbD0nd2hpdGUnIGZvbnQtd2VpZ2h0PSdib2xkJz5WYW5pbGxhPC90ZXh0PjxlbGxpcHNlIGN4PScyMDgnIGN5PSczOTgnIHJ4PSczNScgcnk9JzEwJyBmaWxsPSd3aGl0ZScgb3BhY2l0eT0nMC4xNScvPjxlbGxpcHNlIGN4PSczOTUnIGN5PSczNjgnIHJ4PSc3Micgcnk9JzI0JyBmaWxsPScjMDY1ZjQ2Jy8+PHJlY3QgeD0nMzIzJyB5PSczNDQnIHdpZHRoPScxNDQnIGhlaWdodD0nODInIHJ4PSc5JyBmaWxsPScjMDU5NjY5Jy8+PGVsbGlwc2UgY3g9JzM5NScgY3k9JzQyNicgcng9JzcyJyByeT0nMjQnIGZpbGw9JyMwNjRlM2InLz48ZWxsaXBzZSBjeD0nMzk1JyBjeT0nMzQ0JyByeD0nNzInIHJ5PScyNCcgZmlsbD0nIzM0ZDM5OScvPjx0ZXh0IHg9JzM5NScgeT0nMzQ5JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZvbnQtc2l6ZT0nMTQnIGZpbGw9J3doaXRlJyBmb250LXdlaWdodD0nYm9sZCc+TWludDwvdGV4dD48ZWxsaXBzZSBjeD0nMzk1JyBjeT0nMzkxJyByeD0nMzUnIHJ5PScxMCcgZmlsbD0nd2hpdGUnIG9wYWNpdHk9JzAuMTUnLz48dGV4dCB4PSczMDAnIHk9JzUyOCcgdGV4dC1hbmNob3I9J21pZGRsZScgZm9udC1mYW1pbHk9J0FyaWFsJyBmb250LXNpemU9JzIyJyBmaWxsPScjOTI0MDBlJyBmb250LXdlaWdodD0nYm9sZCc+TmF0dXJhbCBMaXAgQmFsbSBTZXQ8L3RleHQ+PHRleHQgeD0nMzAwJyB5PSc1NjInIHRleHQtYW5jaG9yPSdtaWRkbGUnIGZvbnQtZmFtaWx5PSdBcmlhbCcgZm9udC1zaXplPScxNCcgZmlsbD0nI2Q5NzcwNic+NCBGbGF2b3VycyDigKIgU2hlYSBCdXR0ZXIgRm9ybXVsYTwvdGV4dD48L3N2Zz4=",
    category: "cosmetics",
    description: "Set of 4 shea butter lip balms in strawberry, rose, vanilla and mint.",
    rating: 4.4, reviewCount: 423,
    reviews: [
      { author: "Naina K.", stars: 5, text: "Lips are so soft! Love all 4 flavours." },
      { author: "Aditi S.", stars: 4, text: "Natural ingredients, no chemicals. Very nourishing." },
      { author: "Pooja T.", stars: 4, text: "Great gift idea, all scents are lovely." }
    ]
  }
];

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

function showMainStore() {
  const clerkScreen = document.getElementById('clerk-auth-screen');
  if (clerkScreen) clerkScreen.style.display = 'none';
  document.getElementById('main-content').classList.remove('hidden');
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