import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import RotatingLogo from '../ui/RotatingLogo'

const Hero = () => {
  const containerRef = useRef(null)
  const { scrollY } = useScroll()
  
  // Different elements move at different speeds (parallax)
  const yText = useTransform(scrollY, [0, 500], [0, -100])
  const yLogo = useTransform(scrollY, [0, 500], [0, -150])
  const yButton = useTransform(scrollY, [0, 500], [0, -80])
  const yBg = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const scrollToForm = () => {
    const form = document.getElementById('signup-form')
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-8 overflow-hidden bg-[#FBF8EF]"
    >
      {/* Animated gradient background with parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 40%, rgba(222,110,39,0.06) 0%, transparent 60%)',
          opacity,
          y: yBg
        }}
      />
      
      {/* Ultra-subtle grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.2\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' /%3E%3C/svg%3E")',
        }}
      />
      
      {/* Text with parallax */}
      <motion.div
        className="text-center mb-16 max-w-3xl z-20"
        style={{ y: yText, opacity }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-serif mb-6 leading-[1.1]"
          style={{ color: '#2B3210' }}
        >
          Oregon's Professional<br/>AFH Network
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-600 font-light mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Real-time placements. Direct connections. Better outcomes.
        </motion.p>
        
        {/* Trust badge with entrance animation */}
        <motion.div
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/50 backdrop-blur-sm border border-gray-200/60"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div 
            className="w-2 h-2 rounded-full bg-[#DE6E27]"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm font-medium text-gray-700">33 years of AFH experience</span>
        </motion.div>
      </motion.div>
      
      {/* Logo with parallax and breathing animation */}
      <motion.div
        style={{ y: yLogo }}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          animate={{ 
            y: [0, -12, 0],
            rotate: [0, 0.5, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <RotatingLogo size="xlarge" />
        </motion.div>
      </motion.div>
      
      {/* CTA with parallax and magnetic effect */}
      <motion.div
        className="mt-16 z-20"
        style={{ y: yButton, opacity }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.button
          className="group relative px-12 py-5 bg-gradient-to-r from-[#DE6E27] to-[#C85D20] text-white text-lg font-semibold rounded-full overflow-hidden"
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 25px 50px rgba(222, 110, 39, 0.3)'
          }}
          whileTap={{ scale: 0.98 }}
          onClick={scrollToForm}
        >
          <span className="relative z-10 flex items-center gap-3">
            Join the Network
            <motion.svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </span>
          
          {/* Animated shine */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              ease: 'easeInOut'
            }}
          />
        </motion.button>
      </motion.div>
      
      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-12 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{ opacity }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">Scroll</span>
          <svg width="24" height="40" viewBox="0 0 24 40" className="text-gray-300">
            <rect x="0.5" y="0.5" width="23" height="39" rx="11.5" stroke="currentColor" strokeOpacity="0.4" fill="none"/>
            <motion.circle
              cx="12"
              cy="12"
              r="4"
              fill="#DE6E27"
              animate={{ cy: [12, 24, 12], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </svg>
        </motion.div>
      </motion.div>

    </section>
  )
}

export default Hero
