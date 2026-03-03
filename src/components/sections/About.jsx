import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section 
      id="about"
      ref={ref} 
      className="relative py-24 md:py-32 px-6 md:px-8 lg:px-12 bg-[#AFBFBE]/10"
      aria-labelledby="about-heading"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Simple, narrative content */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            id="about-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 md:mb-12 text-[#2B3210] leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            We're here to support you
          </motion.h2>
          
          <motion.div
            className="space-y-6 md:space-y-8 text-xl md:text-2xl text-[#505431] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p>
              For over three decades, we've been connecting Adult Family Home providers across Oregon. We understand the challenges you face, and we're here to help.
            </p>
            
            <p className="text-[#DE6E27] font-medium">
              This is a community built on trust, respect, and genuine care. No pressure, just real support for real people doing important work.
            </p>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  )
}

export default About
