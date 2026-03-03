import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import RotatingLogo from '../ui/RotatingLogo'
import AnimatedText from '../ui/AnimatedText'

const Hero = () => {
  const containerRef = useRef(null)
  
  // Use window scroll for parallax
  const { scrollY } = useScroll()
  
  // Gentle parallax for depth
  const yText = useTransform(scrollY, [0, 500], [0, -60], { clamp: false })

  const scrollToForm = () => {
    const form = document.getElementById('signup-form')
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-8 lg:px-12 overflow-hidden"
      style={{ backgroundColor: '#FBF8EF' }}
      aria-label="Hero section"
    >
      {/* Minimal background - very subtle */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(175, 191, 190, 0.02) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      
      {/* Main content container - Centered, clean hierarchy */}
      <div className="relative z-20 w-full max-w-4xl mx-auto text-center px-4">
        
        {/* Small logo first - brand mark per your reference, not dominant */}
        <motion.div
          className="flex justify-center mb-6 md:mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <RotatingLogo size="medium" className="max-w-[200px] md:max-w-[220px]" />
        </motion.div>

        {/* Tagline - more visible */}
        <motion.div
          className="mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm md:text-base lg:text-lg text-[#505431] font-medium tracking-[0.25em] uppercase">
            Connect. Collaborate. Grow.
          </p>
        </motion.div>

        {/* Main heading - very prominent and visible */}
        <motion.div
          className="mb-8 md:mb-10"
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: yText }}
        >
          <AnimatedText 
            text="Open Bed"
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif leading-[0.95] tracking-tight font-bold"
            style={{ color: '#283210' }}
          />
        </motion.div>
        
        {/* Description - clear and readable */}
        <motion.div
          className="mb-10 md:mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-lg md:text-xl lg:text-2xl text-[#505431] font-normal leading-relaxed">
            A welcoming community for Adult Family Home providers across Oregon.
          </p>
        </motion.div>

        {/* Trust line - white background */}
        <motion.div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#AFBFBE]/20 text-[#505431] text-sm shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#DE6E27]" aria-hidden="true" />
          <span>Built with care and experience</span>
        </motion.div>
      </div>
      
      {/* Subtle scroll hint - bottom center, minimal */}
      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#AFBFBE]" aria-hidden="true">
            <path d="M12 5 v10 M8 11 l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </motion.div>
      </motion.div>

    </section>
  )
}

export default Hero
