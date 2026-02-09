import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

function AnimatedNumber({ value, suffix = '' }) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100, mass: 1 })
  const isInView = useInView(ref, { once: false, margin: "-50px", amount: 0.3 })
  
  useEffect(() => {
    motionValue.set(isInView ? value : 0)
  }, [motionValue, isInView, value])
  
  const display = useTransform(springValue, (v) => Math.round(v).toLocaleString() + suffix)
  
  return (
    <motion.span ref={ref} animate={{ opacity: isInView ? 1 : 0 }}>
      {display}
    </motion.span>
  )
}

const SocialProof = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" })
  
  const stats = [
    { number: 250, suffix: '+', label: 'Active Providers' },
    { number: 1200, suffix: '+', label: 'Successful Placements' },
    { number: 33, suffix: ' Years', label: 'Industry Experience' }
  ]

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 bg-brand-cream overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-terracotta/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-olive/6 rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-20 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="relative group"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative inline-block px-8 py-6 rounded-2xl bg-white/70 backdrop-blur-md border border-white shadow-[0_8px_32px_rgba(0,0,0,0.08)] mb-4 overflow-hidden group-hover:shadow-[0_20px_50px_-12px_rgba(222,110,39,0.25)] group-hover:border-brand-terracotta/20 transition-all duration-300">
                <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out" />
                <div className="relative text-5xl sm:text-6xl md:text-7xl font-serif font-bold bg-gradient-to-br from-brand-terracotta via-brand-terracottaDark to-brand-sage bg-clip-text text-transparent">
                  <AnimatedNumber value={stat.number} suffix={stat.suffix} />
                </div>
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-[0.25em] font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SocialProof
