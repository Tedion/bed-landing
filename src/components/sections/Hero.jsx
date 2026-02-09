import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import RotatingLogo from '../ui/RotatingLogo'

const Hero = () => {
  const containerRef = useRef(null)
  const { scrollY } = useScroll()
  
  const yText = useTransform(scrollY, [0, 500], [0, -80])
  const yLogo = useTransform(scrollY, [0, 500], [0, -120])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const scale = useTransform(scrollY, [0, 400], [1, 0.85])

  const scrollToForm = () => {
    document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 overflow-hidden bg-[#0a0c08]"
    >
      {/* Brand gradient - sage/terracotta */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0c08] via-[#1a1f0a] to-[#0d0f0a]" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-sage/20 via-transparent to-brand-terracotta/5" />
      
      {/* Subtle dot grid */}
      <div className="absolute inset-0 dot-grid opacity-20" />
      
      {/* Glow orbs - brand colors */}
      <motion.div 
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"
        style={{ background: 'radial-gradient(circle, rgba(222,110,39,0.25) 0%, transparent 60%)', scale }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"
        style={{ background: 'radial-gradient(circle, rgba(80,86,49,0.2) 0%, transparent 60%)', scale }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left - Text */}
          <motion.div
            className="text-center lg:text-left"
            style={{ y: yText, opacity }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-terracotta/20 text-brand-terracottaLight text-sm font-semibold mb-8 border border-brand-terracotta/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="w-2 h-2 rounded-full bg-brand-terracotta animate-pulse" />
              <span>33 years of AFH experience</span>
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif mb-6 leading-[1.05] text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Oregon's Professional{' '}
              <span className="block mt-2 bg-gradient-to-r from-brand-terracotta to-brand-terracottaLight bg-clip-text text-transparent">
                AFH Network
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-white/70 font-light mb-10 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Real-time placements. Direct connections. Better outcomes.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-brand-terracotta hover:bg-brand-terracottaLight text-white text-lg font-semibold rounded-full overflow-hidden"
                whileHover={{ scale: 1.04, boxShadow: '0 0 50px rgba(222, 110, 39, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToForm}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Join the Network
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
                />
              </motion.button>
              
              <motion.button
                className="px-8 py-4 bg-white/10 border-2 border-white/30 hover:bg-white/20 hover:border-white/50 text-white text-lg font-semibold rounded-full backdrop-blur-sm transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToForm}
              >
                Learn More
              </motion.button>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-6 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {[
                { icon: '✓', text: '250+ Providers' },
                { icon: '✓', text: '1,200+ Placements' },
                { icon: '✓', text: '24/7 Support' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-white/80">
                  <span className="w-6 h-6 bg-brand-terracotta/30 rounded-full flex items-center justify-center text-brand-terracottaLight text-sm font-bold">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Rotating Logo only */}
          <motion.div
            className="relative flex items-center justify-center"
            style={{ y: yLogo }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -14, 0], scale: [1, 1.03, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <RotatingLogo size="large" />
              <div 
                className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-40"
                style={{ background: 'radial-gradient(circle, rgba(222,110,39,0.5) 0%, transparent 70%)' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 80" className="w-full h-full" preserveAspectRatio="none">
          <path fill="#FBF8EF" d="M0,80 Q720,0 1440,80 L1440,80 L0,80 Z" />
        </svg>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ opacity }}
        onClick={scrollToForm}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs tracking-[0.25em] text-white/60 uppercase font-medium">Scroll</span>
          <svg width="24" height="40" viewBox="0 0 24 40" className="text-white/50">
            <rect x="0.5" y="0.5" width="23" height="39" rx="11.5" stroke="currentColor" strokeOpacity="0.5" fill="none"/>
            <motion.circle
              cx="12"
              cy="12"
              r="4"
              fill="#DE6E27"
              animate={{ cy: [12, 24, 12], opacity: [1, 0.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
