import { useEffect, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Lenis from 'lenis'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import SocialProof from './components/sections/SocialProof'
import WhyJoin from './components/sections/WhyJoin'
import WhatThisIs from './components/sections/WhatThisIs'
import PricingTiers from './components/sections/PricingTiers'
import About from './components/sections/About'
import FormSection from './components/sections/FormSection'

function App() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: undefined,
    offset: ['start start', 'end end'],
  })

  // Initialize Lenis smooth scroll (optional; fail silently on unsupported envs)
  useEffect(() => {
    let lenis
    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      })
      document.documentElement.classList.add('lenis', 'lenis-smooth')
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
      return () => {
        lenis.destroy()
        document.documentElement.classList.remove('lenis', 'lenis-smooth')
      }
    } catch (_) {
      return () => {}
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen" style={{ backgroundColor: '#FBF8EF' }}>
      <Header />
      <main role="main">
        <Hero />
        <SocialProof />
        <WhyJoin />
        <WhatThisIs />
        <PricingTiers />
        <About />
        <FormSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
