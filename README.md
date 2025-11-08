# E-Commerce Cart

A small e-commerce cart demo with a Node/Express backend and a React (Vite) frontend.

This repository contains two main parts:

- `backend/` — Express API that serves product data and provides simple in-memory cart endpoints.
- `frontend/` — Vite + React app that consumes the API and provides product listing, cart, and receipt pages.

## Quick summary

- Backend: Node + Express (dev script uses `nodemon`)
- Frontend: Vite + React (dev script uses `vite`)
- Default backend port: 3000
- API base path: `/api/product`

## Folder structure

```
backend/
  index.js                 # Express app entry
  controller/
    productController.js   # handlers for products / cart
  routes/
    productsRoute.js       # product-related routes
frontend/
  src/                     # React source
  public/                  # static assets
  package.json             # vite scripts & deps
```

## API endpoints (backend)

All endpoints are mounted under `/api/product` (full URLs assume backend runs on `http://localhost:3000`):

- GET `/api/product/getProducts` — returns the product list (sample product objects with id, name, price)
- POST `/api/product/addTOCart` — body: `{ productId, quantity }` to add an item to server-side in-memory cart
- GET `/api/product/getCartItem` — returns the current in-memory cart array
- POST `/api/product/removeItem` — body: `{ newCart }` to replace the cart with `newCart`

Notes: The backend currently stores cart data in-memory (server process). It's fine for demo and local development but not persistent.

## Prerequisites

- Node.js (v16+ recommended) and npm installed
- PowerShell (instructions below are for PowerShell on Windows; use bash/zsh on macOS/Linux by translating the commands)

## Setup & run (PowerShell)

1) Start the backend

Open a PowerShell terminal at the repo root and run:

```powershell
# install backend deps
cd backend
npm install

# run dev server (nodemon watches changes)
npm run dev
```

The backend runs on http://localhost:3000 and exposes the endpoints listed above.

2) Start the frontend

Open a new PowerShell terminal at the repo root and run:

```powershell
cd frontend
npm install

# start Vite dev server
npm run dev
```

Vite will start and serve the frontend (typically at http://localhost:5173). The frontend expects the backend at `http://localhost:3000` by default.

If ports differ or you want to run backend on another host/port, update the frontend API base URL in `src` where the calls are made (look for axios/fetch usage in `src/context/ProductContext.jsx` or components).

## Example usage (fetching products)

Example GET using Postman (or use your browser):

```postman
postman http://localhost:3000/api/product/getProducts
```

Example POST to add to cart (postman):

```postman
postman -Method POST -Uri http://localhost:3000/api/product/addTOCart -Body (@{ productId = 1; quantity = 2 } | ConvertTo-Json) -ContentType 'application/json'
```

(You can also call these from the frontend; the project already contains axios usage.)

## Screenshots


## What the app does (brief)

- The frontend lists products fetched from the backend.
- Users can add items to a cart; the frontend maintains cart state and uses the backend cart endpoints for persistence in the demo.
- A receipt page displays the selected items and totals.

## Development notes & tips

- Backend: changes to `backend/index.js`, `backend/routes/*`, or `backend/controller/*` are hot-reloaded by nodemon when running `npm run dev` in `backend/`.
- Frontend: Vite provides instant reloads when editing React components.
- Cart is stored in-memory on the backend; restarting the backend will reset the cart.

## Useful commands

From repo root (PowerShell):

```powershell
# Start backend
cd backend; npm install; npm run dev

# Start frontend (in another terminal)
cd frontend; npm install; npm run dev
```

Build frontend for production:

```powershell
cd frontend
npm run build
```

Preview production build locally:

```powershell
npm run preview
```

