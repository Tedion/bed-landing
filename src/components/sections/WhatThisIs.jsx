import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const WhatThisIs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <section ref={ref} className="relative py-32 px-8">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-1 overflow-hidden rounded-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Dark card */}
          <motion.div
            variants={{
              hidden: { x: -100, opacity: 0, rotateY: -15 },
              visible: { 
                x: 0, 
                opacity: 1, 
                rotateY: 0,
                transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="relative p-12 md:p-16 bg-gradient-to-br from-[#2B3210] to-[#1a1d0a] text-white overflow-hidden transform-gpu"
          >
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#DE6E27]/10 blur-[120px]" />
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-6xl font-serif mb-8 leading-none">
                Not a<br/>social group
              </h3>
              <p className="text-lg text-white/60 leading-relaxed">
                Professional infrastructure designed for serious providers.
              </p>
            </div>
          </motion.div>
          
          {/* Light card */}
          <motion.div
            variants={{
              hidden: { x: 100, opacity: 0, rotateY: 15 },
              visible: { 
                x: 0, 
                opacity: 1, 
                rotateY: 0,
                transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="relative p-12 md:p-16 bg-white overflow-hidden transform-gpu"
          >
            {/* Ambient glow */}
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DE6E27]/5 blur-[120px]" />
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-6xl font-serif mb-8 leading-none">
                Professional<br/>infrastructure
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Built to connect providers with real opportunities and resources.
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Tagline */}
        <motion.p
          className="text-center mt-16 text-xl md:text-2xl text-gray-600 font-light"
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
