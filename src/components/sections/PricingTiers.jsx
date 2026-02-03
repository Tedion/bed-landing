import { useRef, useState } from 'react'
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
      className="relative py-32 px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #FBF8EF 0%, white 50%, #FBF8EF 100%)'
      }}
    >
      {/* Animated background element */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#DE6E27] opacity-[0.03] blur-[150px]"
        style={{ y: yBg }}
      />
      
      <div className="max-w-[1300px] mx-auto relative z-10">
        
        {/* Header with stagger */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 }}
          }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-serif mb-6"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 }}
            }}
          >
            Choose Your Access
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 font-light"
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
          className="grid md:grid-cols-2 gap-8"
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
            <div className="relative bg-white rounded-[40px] p-12 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden h-full">
              
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2B3210]/0 to-[#2B3210]/0 group-hover:from-[#2B3210]/5 group-hover:to-transparent transition-all duration-500" />
              
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#BB8853]/10 to-[#BB8853]/5 mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#BB8853]" />
                <span className="text-xs font-semibold tracking-wider uppercase text-[#BB8853]">Foundation</span>
              </motion.div>
              
              <h3 className="text-4xl font-serif mb-2 text-gray-900">Core Access</h3>
              
              {/* Price with animated entrance */}
              <div className="flex items-baseline gap-2 mb-12">
                <motion.span 
                  className="text-6xl md:text-7xl font-bold text-[#DE6E27]"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  $47
                </motion.span>
                <span className="text-2xl text-gray-400 font-light">/mo</span>
              </div>
              
              {/* Features with stagger */}
              <motion.ul 
                className="space-y-4 mb-12"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 }}
                }}
              >
                {coreFeatures.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-gray-700"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <motion.svg 
                      className="w-5 h-5 text-[#DE6E27] mt-0.5 flex-shrink-0" 
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
                className="relative w-full py-4 bg-[#2B3210] text-white rounded-2xl font-medium overflow-hidden group/btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToForm}
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
              className="absolute inset-0 bg-gradient-to-r from-[#DE6E27] to-[#C85D20] rounded-[40px] blur-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-500"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative bg-gradient-to-br from-[#DE6E27] to-[#C85D20] rounded-[40px] p-12 text-white shadow-[0_40px_120px_-20px_rgba(222,110,39,0.4)] overflow-hidden h-full">
              
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
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
                  className="absolute w-2 h-2 rounded-full bg-white/20"
                  style={{
                    left: `${25 + i * 20}%`,
                    top: `${15 + i * 20}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 0.6, 0],
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-8"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  boxShadow: ['0 0 0 0 rgba(255,255,255,0.4)', '0 0 0 8px rgba(255,255,255,0)', '0 0 0 0 rgba(255,255,255,0)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div 
                  className="w-1.5 h-1.5 rounded-full bg-white"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs font-semibold tracking-wider uppercase">Priority</span>
              </motion.div>
              
              <h3 className="text-4xl font-serif mb-2">Full Access</h3>
              
              {/* Price */}
              <div className="flex items-baseline gap-2 mb-12">
                <motion.span 
                  className="text-6xl md:text-7xl font-bold"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  $247
                </motion.span>
                <span className="text-2xl text-white/60 font-light">/mo</span>
              </div>
              
              {/* Features */}
              <motion.ul 
                className="space-y-4 mb-12"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 }}
                }}
              >
                {fullFeatures.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
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
                className="relative w-full py-4 bg-white text-[#DE6E27] rounded-2xl font-semibold overflow-hidden group/btn"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToForm}
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
          className="text-center mt-12 text-sm text-gray-500 italic"
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
