# 🐾 NordHealth Task

A client-side-only Nuxt 3 application built using the [Provet Cloud Design System](https://www.nordhealth.design/), implementing a fully functional signup flow with validation, theming, and user state persistence.

---

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

- 🧪 **Testing**
    - Unit tests using Vitest
    - End-to-end tests with Cypress covering signup flow, validation, theming, and layout

---

## 📸 Preview

> Coming soon: screenshots or live demo link

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)

### Setup

```bash
npm install
npm run dev
```

## 🧪 Running Tests

Unit Tests
- Run all unit tests once:
```aiignore
npm run test:unit
```

End-to-End (E2E) Tests with Cypress
- Open Cypress interactive test runner:
```aiignore
npm run test:e2e
```

## 👤 Author

**Aleksandar Cvjetan**

- GitHub: [crypt096](https://github.com/crypt096)
- LinkedIn: [linkedin.com/in/acvjetan](https://www.linkedin.com/in/acvjetan)
