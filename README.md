# 🎨 Color Changer

A sleek, interactive background color changer built with **React** and **Tailwind CSS v4**. Click a color button and watch the entire page smoothly transition to that color — complete with glassmorphic UI, micro-animations, and a fully responsive layout.

---

## ✨ Features

- **7 vibrant color options** — Red, Green, Yellow, Blue, Purple, Violet, and Pink
- **Smooth color transitions** — 700ms ease-in-out background blend on every click
- **Glassmorphic button bar** — Frosted glass panel with `backdrop-blur`, semi-transparent background, and subtle border
- **Hover & active animations** — Buttons scale up with a colored glow on hover and press down on click
- **Fully responsive** — Adapts seamlessly from 320px phones to ultra-wide desktops
- **Modern typography** — Uses [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 19.x | UI library |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Utility-first styling |
| [Vite](https://vite.dev) | 8.x | Build tool & dev server |
| [pnpm](https://pnpm.io) | — | Package manager |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **pnpm** (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/color-changer.git
cd color-changer

# Install dependencies
pnpm install

# Start the development server
pnpm run dev
```

The app will be running at `http://localhost:5173` (or the port shown in your terminal).

### Build for Production

```bash
pnpm run build
pnpm run preview
```

---

## 📁 Project Structure

```
project-01/
├── index.html            # Entry HTML file
├── package.json          # Dependencies & scripts
├── vite.config.js        # Vite configuration
├── public/               # Static assets
└── src/
    ├── main.jsx          # React entry point
    ├── index.css         # Tailwind imports & base styles
    ├── App.jsx           # Main app component (color logic + UI)
    └── assets/           # Static assets (images, icons, etc.)
```

---

## 📱 Responsive Breakpoints

The button bar adapts its layout across screen sizes:

| Screen Size | Layout | Details |
|---|---|---|
| **< 640px** (mobile) | 3-column grid | Compact buttons, edge-to-edge bar |
| **640–768px** (tablet) | 4-column grid | Medium padding, centered bar |
| **≥ 768px** (desktop) | Horizontal flex row | Full-width pill buttons in a single row |

---

## 🎯 How It Works

The app uses a single `useState` hook to manage the current background color:

```jsx
const [color, setColor] = useState("black")
```

Each button calls `setColor()` with its respective color value. The background `<div>` applies the color via inline `style` and uses Tailwind's `transition-colors duration-700` for the smooth animated transition.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/new-color`)
3. Commit your changes (`git commit -m 'Add new color option'`)
4. Push to the branch (`git push origin feature/new-color`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ using React + Tailwind CSS
</p>
