import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const WhatThisIs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-6 sm:px-8 bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-olive/3 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-terracotta/4 rounded-full blur-3xl translate-y-1/2" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-6 overflow-hidden rounded-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Dark card - Changed back to olive green */}
          <motion.div
            variants={{
              hidden: { x: -50, opacity: 0 },
              visible: { 
                x: 0, 
                opacity: 1,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="relative p-10 sm:p-12 md:p-16 bg-gradient-to-br from-[#505631] to-[#3d4528] text-white overflow-hidden rounded-3xl shadow-xl"
          >
            {/* Ambient glow with brand terracotta */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-terracotta/10 blur-[120px]" />
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 sm:mb-8 leading-none">
                Not a<br/>social group
              </h3>
              <p className="text-base sm:text-lg text-white/60 leading-relaxed">
                Professional infrastructure designed for serious providers.
              </p>
            </div>
          </motion.div>
          
          {/* Light card */}
          <motion.div
            variants={{
              hidden: { x: 50, opacity: 0 },
              visible: { 
                x: 0, 
                opacity: 1,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="relative p-10 sm:p-12 md:p-16 bg-gradient-to-br from-white to-brand-cream/50 overflow-hidden rounded-3xl shadow-xl border border-gray-100"
          >
            {/* Ambient glow */}
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-terracotta/5 blur-[120px]" />
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 sm:mb-8 leading-none text-brand-sage">
                Professional<br/>infrastructure
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Built to connect providers with real opportunities and resources.
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Tagline */}
        <motion.p
          className="text-center mt-12 sm:mt-16 text-lg sm:text-xl md:text-2xl text-gray-700 font-light max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Built by providers, for providers. 33 years of AFH experience.
        </motion.p>
      </div>
    </section>
  )
}

export default WhatThisIs
