import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const WhatThisIs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section 
      ref={ref} 
      className="relative py-24 md:py-32 px-6 md:px-8 lg:px-12 bg-[#AFBFBE]/5"
      aria-labelledby="what-this-is-heading"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 }}
          }}
        >
          {/* Left card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            whileHover={{ 
              y: -4,
              transition: { duration: 0.3 }
            }}
            className="relative p-10 md:p-12 bg-white rounded-3xl shadow-sm border border-[#AFBFBE]/20 overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-[#2B3210] leading-tight">
                Not a<br/>social group
              </h3>
              <p className="text-lg md:text-xl text-[#505431] leading-relaxed">
                Professional infrastructure designed for serious providers.
              </p>
            </div>
          </motion.div>
          
          {/* Right card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            whileHover={{ 
              y: -4,
              transition: { duration: 0.3 }
            }}
            className="relative p-10 md:p-12 bg-[#DE6E27] rounded-3xl text-white shadow-lg overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 leading-tight">
                Professional<br/>infrastructure
              </h3>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Built to connect providers with real opportunities and resources.
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Tagline */}
        <motion.p
          className="text-center mt-12 md:mt-16 text-xl md:text-2xl text-[#505431] font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Built by providers, for providers. 33 years of AFH experience.
        </motion.p>
      </div>
    </section>
  )
}

export default WhatThisIs
