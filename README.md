# Luxury Travel & Tourism Platform

This project is a high-end, international-standard travel booking platform consisting of two independent applications.

## Project Structure

- **`website/`**: The public-facing luxury travel website (Next.js).
- **`admin/`**: The private, dark-themed SaaS admin panel (Next.js).

## Tech Stack

- **Frontend:** Next.js 15, TypeScript
- **Styling:** Tailwind CSS (Custom Luxury Theme)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Charts:** Recharts (Admin)

## Getting Started

### 1. Installation
Install dependencies for both projects:
```bash
npm run install:all
```

### 2. Running Locally
Run the client website (Port 3000):
```bash
npm run dev:website
```

Run the admin dashboard (Port 3001):
```bash
npm run dev:admin
```

## Live URLs (GitHub Pages)

- **Main Website:** [https://mrizwanshaheen.github.io/travelandtourismcompany/](https://mrizwanshaheen.github.io/travelandtourismcompany/)
- **Admin Panel:** [https://mrizwanshaheen.github.io/travelandtourismcompany/admin/](https://mrizwanshaheen.github.io/travelandtourismcompany/admin/)

## Deployment Configuration

The project is configured for **Static Export** (`output: 'export'`) to support GitHub Pages.
- Both apps use `basePath` to handle subdirectory routing.
- Deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`).

## Features

### Website
- Cinematic Hero & Modern Search
- Grid-based Destinations with Hover Effects
- Detailed Tour Pages with Booking Summary
- Multi-step Checkout UI
- Animated Success Page

### Admin Panel
- Dark SaaS Luxury Theme
- Revenue & Booking Analytics
- Real-time Status Management
- Tour & Inventory Management
