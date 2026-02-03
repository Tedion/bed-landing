import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const PricingTiers = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  // Parallax background
  const yBg = useTransform(scrollYProgress, [0, 1], [100, -100])
  
  const scrollToForm = () => {
    const form = document.getElementById('signup-form')
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const coreFeatures = [
    'Statewide AFH community access',
    'Education & training',
    'Event invitations',
    'Direct Embrace communication',
    'Business support'
  ]

  const fullFeatures = [
    'Everything in Core Access',
    'Priority placement opportunities',
    'Featured visibility',
    'Rapid response team access',
    'Early placement alerts'
  ]

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-6 sm:px-8 overflow-hidden bg-gradient-to-b from-[#FFF5EB] via-white to-[#FFF5EB]"
    >
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#FF6B35]/6 to-[#FF8C5A]/4 blur-[150px]"
          style={{ y: yBg }}
        />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#FFB88C]/5 to-[#FF8C5A]/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#FF6B35]/5 to-[#FF8C5A]/3 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-[1300px] mx-auto relative z-10">
        
        {/* Header with stagger */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 }}
          }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-6 bg-gradient-to-r from-[#2B3210] via-[#404040] to-[#2B3210] bg-clip-text text-transparent"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 }}
            }}
          >
            Choose Your Access
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-700 font-light max-w-2xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 }}
            }}
          >
            Join Oregon's most connected AFH community
          </motion.p>
        </motion.div>
        
        {/* Two-column pricing grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 }}
          }}
        >
          
          {/* CORE ACCESS - Left Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50, rotateY: -8 },
              visible: { 
                opacity: 1, 
                x: 0, 
                rotateY: 0,
                transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            whileHover={{ 
              y: -12, 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="relative group transform-gpu"
          >
            <div className="relative bg-white rounded-[40px] p-8 sm:p-12 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.12)] border-2 border-gray-100 overflow-hidden h-full">
              
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/0 to-[#FF8C5A]/0 group-hover:from-[#FF6B35]/5 group-hover:to-transparent transition-all duration-500" />
              
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FFB88C]/20 to-[#FF8C5A]/15 mb-6 sm:mb-8 border border-[#FF8C5A]/20"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
                <span className="text-xs font-semibold tracking-wider uppercase text-[#FF6B35]">Foundation</span>
              </motion.div>
              
              <h3 className="text-3xl sm:text-4xl font-serif mb-2 text-gray-900">Core Access</h3>
              
              {/* Price with animated entrance */}
              <div className="flex items-baseline gap-2 mb-8 sm:mb-12">
                <motion.span 
                  className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] bg-clip-text text-transparent"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  $47
                </motion.span>
                <span className="text-xl sm:text-2xl text-gray-400 font-light">/mo</span>
              </div>
              
              {/* Features with stagger */}
              <motion.ul 
                className="space-y-3 sm:space-y-4 mb-8 sm:mb-12"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 }}
                }}
              >
                {coreFeatures.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-gray-700 text-sm sm:text-base"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <motion.svg 
                      className="w-5 h-5 text-[#FF6B35] mt-0.5 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </motion.svg>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
              
              {/* CTA Button */}
              <motion.button 
                className="relative w-full py-4 bg-gradient-to-r from-[#2B3210] to-[#404040] text-white rounded-2xl font-medium overflow-hidden group/btn shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToForm}
                aria-label="Get started with Core Access"
              >
                <span className="relative z-10">Get Started</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#1a1d0a] to-[#2B3210]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </motion.div>
          
          {/* FULL ACCESS - Right Card (FEATURED) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50, rotateY: 8 },
              visible: { 
                opacity: 1, 
                x: 0, 
                rotateY: 0,
                transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            whileHover={{ 
              y: -16, 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="relative group transform-gpu"
          >
            {/* Animated glow */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] rounded-[40px] blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative bg-gradient-to-br from-[#FF6B35] via-[#FF8C5A] to-[#FF5722] rounded-[40px] p-8 sm:p-12 text-white shadow-[0_40px_120px_-20px_rgba(255,107,53,0.5)] overflow-hidden h-full">
              
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: 'linear'
                }}
              />
              
              {/* Floating particles */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-white/30"
                  style={{
                    left: `${25 + i * 20}%`,
                    top: `${15 + i * 20}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 0.7, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.7,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              ))}
              
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/25 backdrop-blur-sm mb-6 sm:mb-8 border border-white/30"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  boxShadow: ['0 0 0 0 rgba(255,255,255,0.5)', '0 0 0 8px rgba(255,255,255,0)', '0 0 0 0 rgba(255,255,255,0)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div 
                  className="w-1.5 h-1.5 rounded-full bg-white"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs font-semibold tracking-wider uppercase">Priority</span>
              </motion.div>
              
              <h3 className="text-3xl sm:text-4xl font-serif mb-2">Full Access</h3>
              
              {/* Price */}
              <div className="flex items-baseline gap-2 mb-8 sm:mb-12">
                <motion.span 
                  className="text-5xl sm:text-6xl md:text-7xl font-bold"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  $247
                </motion.span>
                <span className="text-xl sm:text-2xl text-white/70 font-light">/mo</span>
              </div>
              
              {/* Features */}
              <motion.ul 
                className="space-y-3 sm:space-y-4 mb-8 sm:mb-12"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 }}
                }}
              >
                {fullFeatures.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-sm sm:text-base"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <motion.svg 
                      className="w-5 h-5 mt-0.5 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </motion.svg>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
              
              {/* CTA Button */}
              <motion.button 
                className="relative w-full py-4 bg-white text-[#FF6B35] rounded-2xl font-semibold overflow-hidden group/btn shadow-xl"
                whileHover={{ scale: 1.02, boxShadow: '0 25px 50px rgba(0,0,0,0.25)' }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToForm}
                aria-label="Get started with Full Access"
              >
                <span className="relative z-10">Get Started</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white to-gray-50"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </motion.div>
          
        </motion.div>
        
        {/* Disclaimer with fade-in */}
        <motion.p
          className="text-center mt-8 sm:mt-12 text-sm text-gray-600 italic"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          *Proximity & readiness, not pay-to-play
        </motion.p>
        
      </div>
    </section>
  )
}

export default PricingTiers
