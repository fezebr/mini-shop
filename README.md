# Mini Shopping App

A modern e-commerce shopping cart application built with Vue 3, TypeScript, and Tailwind CSS. Features a responsive design with product browsing, cart management, and real-time quantity updates.

## ✨ Features

- 🛍️ Product catalog with watch collection
- 🛒 Interactive shopping cart with hover dropdown
- ➕➖ Quantity controls with real-time updates
- 🗑️ Remove items from cart
- 📱 Responsive design for all devices
- 🎨 Modern UI with gradients and animations
- 🔄 State management with Pinia

## 🛠️ Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Pinia** - State management
- **Tailwind CSS** - Utility-first CSS framework

## 🚀 Getting Started


1. Clone the repository
```bash
git clone <repository-url>
cd mini-shop
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Vue components
│   ├── NavBar.vue      # Navigation with cart
│   ├── ProductGrid.vue # Product listing
│   ├── ProductItem.vue # Individual product card
│   └── ShoppingCart.vue# Cart dropdown
├── data/               # Static data
│   └── products.json   # Product catalog
├── store/              # Pinia stores
│   └── cart.store.ts   # Cart state management
├── types/              # TypeScript types
│   ├── Cart.ts         # Cart item types
│   └── Products.ts     # Product types
└── App.vue             # Root component
```
 