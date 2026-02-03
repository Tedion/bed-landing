import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
      setMobileMenuOpen(false)
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
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        
        {/* Enhanced logo in header */}
        <motion.div 
          className="flex items-center gap-3"
          style={{ opacity: logoOpacity }}
        >
          {/* Enhanced mini logo with brand colors */}
          <motion.div 
            className="relative w-10 h-10 sm:w-12 sm:h-12"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Outer glow */}
            <div 
              className="absolute inset-0 rounded-full blur-md opacity-50"
              style={{
                background: 'radial-gradient(circle, rgba(222,110,39,0.4) 0%, transparent 70%)',
              }}
            />
            
            {/* Main circle with brand terracotta gradient */}
            <div 
              className="absolute inset-0 rounded-full shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #DE6E27 0%, #C85D20 50%, #B85A1F 100%)',
                boxShadow: '0 4px 12px rgba(222,110,39,0.4), inset 0 2px 4px rgba(255,255,255,0.2)',
              }}
            />
            
            {/* Highlight overlay */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 60%)',
              }}
            />
            
            {/* OB text with better styling */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span 
                className="text-white font-black text-xs sm:text-sm"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: '-0.05em',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  fontWeight: 900,
                }}
              >
                OB
              </span>
            </div>
            
            {/* Inner rim for depth */}
            <div 
              className="absolute inset-[2px] rounded-full border border-white/20"
            />
          </motion.div>
          
          {/* Enhanced text logo */}
          <motion.span 
            className={`text-base sm:text-lg font-bold transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}
            style={{
              fontFamily: "'Inter', -apple-system, sans-serif",
              letterSpacing: '-0.02em',
              textShadow: scrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.1)',
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Open Bed Oregon
          </motion.span>
        </motion.div>
        
        {/* Desktop CTA */}
        <motion.button 
          className="hidden md:flex px-6 py-2.5 bg-brand-terracotta hover:bg-brand-terracottaDark text-white font-medium rounded-full transition-colors shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(222,110,39,0.3)' }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToForm}
        >
          Join the Network
        </motion.button>

        {/* Mobile menu button with smooth animation */}
        <motion.button
          className={`md:hidden p-2 rounded-md transition-colors ${
            scrolled ? 'text-gray-700' : 'text-white'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          whileTap={{ scale: 0.9 }}
        >
          <motion.svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </motion.svg>
        </motion.button>
      </div>

      {/* Mobile menu with smooth animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ 
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <motion.div
              className="px-6 py-4 space-y-3"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <motion.button
                onClick={scrollToForm}
                className="w-full px-6 py-3 bg-brand-terracotta text-white rounded-full font-semibold hover:bg-brand-terracottaDark transition-colors text-left shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Join the Network
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
