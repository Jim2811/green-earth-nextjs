# 🌿 Green Earth

**Green Earth** is a fully responsive front‑end web application built with **Next.js App Router (v15/16)**.
It promotes eco‑friendly living by helping users explore and learn about different trees.
The project includes a landing page, mock authentication, public tree listings, and a protected demo cart page — all wrapped in a calming green theme.

---

## 🚀 Setup & Installation

### 1️⃣ Clone the repository

```bash
git https://github.com/Jim2811/green-earth-nextjs.git
cd green-earth
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

Visit: **[http://localhost:3000](http://localhost:3000)**

### 4️⃣ Build for production

```bash
npm run build
npm start
```

---

## 🌍 Route Summary

| Route             | Type      | Description                                                                |
| ----------------- | --------- | -------------------------------------------------------------------------- |
| `/`               | Public    | Landing page with multiple sections (Hero, About, Features, Gallery, etc.) |
| `/about`          | Public    | Shows Green Earth’s mission and core values                                |
| `/all-trees`      | Public    | Displays all trees fetched from an external API                            |
| `/all-trees/[id]` | Public    | Dynamic single tree details page                                           |
| `/login`          | Public    | Mock login page (`demo@postly.com` / `123456`)                            |
| `/contact`        | Public    | Contact form and organization information                                  |

---

## ✨ Implemented Features

### 🌱 Landing Page

* Hero banner
* About section
* Features & categories
* Gallery & testimonials
* Newsletter, CTA, and footer
* Calming green theme
* Fully mobile‑friendly layout

### 🔐 Authentication (Mock Login)

* Hardcoded demo credentials
* Login state stored using cookies
* Logout clears cookies and refreshes the session

### 🛡️ Protected Route (My Cart)

* Route protection using **Next.js middleware**
* Checks authentication cookies before rendering
* Redirects unauthenticated users to `/login`

### 🌳 Tree Listing & Details

* Fetches all trees from:

  ```
  https://openapi.programming-hero.com/api/plants
  ```
* Fetches single tree details from:

  ```
  https://openapi.programming-hero.com/api/plant/{id}
  ```
* Reusable **TreeCard** component for displaying tree items

### 🔔 Toast Notifications

* Implemented using **react-hot-toast**
* Shows success and error messages for login/logout actions

### 🧩 Pages & Components

* Global **Navbar** and **Footer**
* Dedicated **About** and **Contact** pages
* Protected **My Cart** page
* Modular and reusable components

### 📱 Responsive Design

* Built with **Tailwind CSS** (mobile‑first approach)
* Optimized images using **Next.js Image** component

---

## 🧩 Brief Explanation of Core Features

| Feature             | Description                                               |
| ------------------- | --------------------------------------------------------- |
| App Router          | Uses the modern Next.js App Router for structured routing |
| Mock Auth           | Simple cookie‑based authentication for demo purposes      |
| Middleware          | Protects routes by validating cookies before access       |
| API Integration     | Demonstrates real data fetching from public REST APIs     |
| Reusable Components | Navbar, Footer, TreeCard, and landing sections            |
| Responsive UI       | Tailwind CSS ensures smooth experience across devices     |
| Toasts              | Real‑time feedback using react-hot-toast                  |
| Deployment          | Ready for production deployment on Vercel                 |

---

## 🪴 Technologies Used

* **Next.js** (App Router v15/16)
* **React 18**
* **Tailwind CSS**
* **react-hot-toast**
* **Vercel** (Deployment)
* **Public API** (Programming Hero – Plants)

---

## 🚀 Deployment (Vercel)

```bash
vercel login
vercel          # Deploy preview
vercel --prod   # Deploy production
```

---

## 🌍 Live Demo

> https://green-earth-nextjs-6qvzx6b1d-jim2811s-projects.vercel.app/

---

## 💚 Final Note

Developed with care to inspire eco‑friendly living and awareness.
Let’s grow a greener world together — **Green Earth 🌱**
