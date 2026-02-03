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

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: scrolled ? 'rgba(251, 248, 239, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        
        {/* Small clean logo in header */}
        <motion.div 
          className="flex items-center gap-3"
          style={{ opacity: logoOpacity }}
        >
          {/* Mini version - just the circle with OB */}
          <div className="relative w-12 h-12">
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #DE6E27 0%, #B85A1F 100%)',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span 
                className="text-white font-bold text-sm"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                OB
              </span>
            </div>
          </div>
          <span className="text-lg font-semibold text-gray-900">Open Bed Oregon</span>
        </motion.div>
        
        {/* CTA */}
        <motion.button 
          className="px-6 py-2.5 bg-[#DE6E27] hover:bg-[#C85D20] text-white font-medium rounded-full transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToForm}
        >
          Join the Network
        </motion.button>
        
      </div>
    </motion.header>
  )
}

export default Header
