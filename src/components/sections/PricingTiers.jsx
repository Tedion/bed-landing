import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PricingTiers = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
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
      ref={ref}
      className="relative py-24 md:py-32 px-6 md:px-8 lg:px-12 bg-white"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 }}
          }}
        >
          <motion.h2 
            id="pricing-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 md:mb-8 text-[#2B3210]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 }}
            }}
          >
            Choose Your Access
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-[#505431] font-light"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 }}
            }}
          >
            Join Oregon's most connected AFH community
          </motion.p>
        </motion.div>
        
        {/* Two-column pricing grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 }}
          }}
        >
          
          {/* CORE ACCESS - Left Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            whileHover={{ 
              y: -8, 
              transition: { duration: 0.3 }
            }}
            className="relative group"
          >
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-lg border-2 border-[#AFBFBE]/30 hover:border-[#DE6E27]/50 transition-all duration-300 h-full">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#AFBFBE]/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#505431]" />
                <span className="text-sm font-semibold tracking-wider uppercase text-[#505431]">Foundation</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-serif mb-4 text-[#2B3210]">Core Access</h3>
              
              {/* Price */}
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl md:text-6xl font-bold text-[#DE6E27]">$47</span>
                <span className="text-xl text-[#505431]/60 font-light">/mo</span>
              </div>
              
              {/* Features */}
              <ul className="space-y-4 mb-10">
                {coreFeatures.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-lg text-[#505431]"
                  >
                    <svg 
                      className="w-6 h-6 text-[#DE6E27] mt-0.5 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <motion.button 
                className="relative w-full py-4 bg-[#2B3210] text-white rounded-2xl font-medium text-lg hover:bg-[#1a1d0a] transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-[#2B3210]/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToForm}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
          
          {/* FULL ACCESS - Right Card (FEATURED) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            whileHover={{ 
              y: -8, 
              transition: { duration: 0.3 }
            }}
            className="relative group"
          >
            <div className="relative bg-gradient-to-br from-[#DE6E27] to-[#C85D20] rounded-3xl p-8 md:p-10 text-white shadow-xl h-full">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                <div className="w-2 h-2 rounded-full bg-white" />
                <span className="text-sm font-semibold tracking-wider uppercase">Priority</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-serif mb-4">Full Access</h3>
              
              {/* Price */}
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl md:text-6xl font-bold">$147</span>
                <span className="text-xl text-white/70 font-light">/mo</span>
              </div>
              
              {/* Features */}
              <ul className="space-y-4 mb-10">
                {fullFeatures.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-lg"
                  >
                    <svg 
                      className="w-6 h-6 mt-0.5 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <motion.button 
                className="relative w-full py-4 bg-white text-[#DE6E27] rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-white/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToForm}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
          
        </motion.div>
        
        {/* Disclaimer */}
        <motion.p
          className="text-center mt-12 text-base text-[#505431]/70 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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
