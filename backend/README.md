# Raj's Store — Backend (Products API)

A Node/Express + MongoDB API serving the product catalogue that used to be
hardcoded inside `script.js`. This is step one of moving Raj's Store to a
full-stack app — cart, orders, wishlist and auth can be added the same way
later.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create your `.env` from the example:
   ```
   cp .env.example .env
   ```
   - If you have MongoDB installed locally, the default `MONGO_URI` works as-is.
   - Otherwise, create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
     and paste its connection string into `MONGO_URI`.
   - Set `CLIENT_ORIGIN` to wherever your frontend is served from (e.g. the
     Live Server URL, usually `http://127.0.0.1:5500`).

3. Seed the database with the 70 existing products (extracted from your old
   `script.js`):
   ```
   npm run seed
   ```

4. Start the server:
   ```
   npm run dev
   ```
   The API will be running at `http://localhost:5000`.

## Endpoints

| Method | Route                          | Description                                |
|--------|--------------------------------|---------------------------------------------|
| GET    | `/api/products`                | List products. Query params: `category`, `minPrice`, `maxPrice`, `minRating`, `sort`, `search` |
| GET    | `/api/products/:id`             | Get one product by its numeric `id`        |
| POST   | `/api/products`                 | Create a product                           |
| PUT    | `/api/products/:id`             | Update a product                           |
| DELETE | `/api/products/:id`             | Delete a product                           |
| POST   | `/api/products/:id/reviews`     | Add a review (recalculates rating)         |

## Connecting the frontend

`script.js` now fetches products from `API_BASE` (set to
`http://localhost:5000/api` near the top of the file) instead of using a
hardcoded array. As long as the backend is running before you open
`index.html`, the store will load products from MongoDB automatically.

## What's next

Cart, wishlist, orders and addresses are still in `localStorage` on the
frontend. The natural next steps, in order of value:

1. **Auth** — replace Clerk with your own `User` model + JWT (recommended,
   since it's the standard MERN interview skill and removes a third-party
   dependency), or keep Clerk and just verify its JWT on protected routes.
2. **Cart & Orders** — a `Cart` and `Order` model tied to a user ID, with
   routes mirroring the pattern in `routes/products.js`.
3. **Admin routes** — protect the existing POST/PUT/DELETE product routes
   so only an admin user can manage the catalogue.

Say the word whenever you're ready for one of these and it can be built the
same way.
