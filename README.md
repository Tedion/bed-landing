# Open Beds - Modern React Landing Page

A beautiful, modern React landing page built with Vite, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, clean design with glassmorphism effects
- ⚡ Fast development with Vite
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive design
- ⏱️ Live countdown timer
- 🎯 Interactive waitlist form
- 🌈 Gradient text effects
- ✨ Parallax scrolling effects

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **PostCSS** - CSS processing

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Hero section with main heading
│   │   ├── CountdownTimer.jsx # Live countdown timer
│   │   ├── Features.jsx      # Features grid
│   │   ├── WaitlistForm.jsx  # Email signup form
│   │   └── Footer.jsx        # Footer component
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Customization

- Update the countdown launch date in `src/components/CountdownTimer.jsx`
- Modify colors in `tailwind.config.js`
- Edit content in respective component files
- Adjust animations in component files using Framer Motion props

## License

MIT
