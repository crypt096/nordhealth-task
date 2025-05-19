# 🐾 NordHealth Task

A client-side-only Nuxt 3 application built using the [Provet Cloud Design System](https://www.nordhealth.design/), implementing a fully functional signup flow with validation, theming, and user state persistence.

## ✨ Features

- 🔒 **Signup Form**
    - Email, password, and confirm password fields
    - Real-time validation using `vee-validate` and `yup`
    - Newsletter opt-in checkbox
    - Loading and error handling
    - Success redirect and persistent user state (via `localStorage`)

- 🎨 **Theming**
    - Toggle between `light`, `dark`, `lightHighContrast`, and `darkHighContrast` modes
    - Theme preference stored in `localStorage` using `color-mode`

- 🧩 **Reusable Components**
    - `EmailField`, `PasswordField`, `CheckboxField`, and more
    - Fully accessible and built with Provet Cloud Web Components

- 🧭 **Layout**
    - Responsive header and footer
    - GitHub repo link in the footer
    - User dropdown shown when signed up

- 🧪 **E2E Testing with Cypress**
    - Full test coverage for signup flow, validation, theme toggling, and layout rendering

## 📸 Preview

> Coming soon: screenshots or live link

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
npm install
npm run dev
