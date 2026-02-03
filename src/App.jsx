import { useEffect, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Lenis from 'lenis'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import SocialProof from './components/sections/SocialProof'
import WhatThisIs from './components/sections/WhatThisIs'
import PricingTiers from './components/sections/PricingTiers'
import WhyJoin from './components/sections/WhyJoin'
import FormSection from './components/sections/FormSection'

function App() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    // Add lenis class to html
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
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FFF5EB]">
      {/* Scroll progress bar with vibrant gradient */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B35] via-[#FF8C5A] to-[#FF6B35] origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />
      
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <WhatThisIs />
        <PricingTiers />
        <WhyJoin />
        <FormSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
