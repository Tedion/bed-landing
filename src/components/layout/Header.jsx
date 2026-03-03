import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  
  // Logo fades in as hero logo fades out
  const logoOpacity = useTransform(scrollY, [100, 200], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight || 800
      setScrolled(window.scrollY > viewportHeight * 0.15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToForm = () => {
    const form = document.getElementById('signup-form')
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(175, 191, 190, 0.2)' : 'none',
        boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.04)' : 'none',
      }}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-8 h-20 md:h-24 flex items-center justify-between" aria-label="Main navigation">
        
        {/* Logo - matches brand: terracotta circle + OB monogram */}
        <motion.button 
          onClick={scrollToTop}
          className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#DE6E27]/50 rounded-lg"
          style={{ opacity: logoOpacity }}
          aria-label="Open Bed Oregon - Home"
        >
          <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0" aria-hidden="true">
            <svg viewBox="0 0 100 100" className="w-full h-full rounded-full" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))' }}>
              <circle cx="50" cy="50" r="50" fill="#8B4D3C" />
              <text x="24" y="62" fontSize="34" fontFamily="'Playfair Display', Georgia, serif" fontWeight="700" fill="#F0EADF">O</text>
              <text x="42" y="62" fontSize="30" fontFamily="'Playfair Display', Georgia, serif" fontWeight="700" fill="#CBB9AE">B</text>
            </svg>
          </div>
          <span className="text-lg md:text-xl font-semibold text-[#2B3210]">Open Bed</span>
        </motion.button>
        
        {/* CTA Button */}
        <motion.button 
          className="px-4 md:px-5 py-3 md:py-3.5 bg-[#DE6E27] hover:bg-[#C85D20] text-white text-base md:text-lg font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#DE6E27]/30 shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={scrollToForm}
          aria-label="Join our community"
        >
          Join our community
        </motion.button>
        
      </nav>
    </motion.header>
  )
}

export default Header
