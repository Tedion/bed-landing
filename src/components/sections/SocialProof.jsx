import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

function AnimatedNumber({ value, suffix = '' }) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { 
    damping: 50, 
    stiffness: 100,
    mass: 1
  })
  const isInView = useInView(ref, { 
    once: false, 
    margin: "-50px",
    amount: 0.3
  })
  
  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    } else {
      // Reset when out of view
      motionValue.set(0)
    }
  }, [motionValue, isInView, value])
  
  const display = useTransform(springValue, (current) =>
    Math.round(current).toLocaleString() + suffix
  )
  
  return (
    <motion.span 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
    >
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
    <section ref={sectionRef} className="relative py-20 sm:py-24 bg-gradient-to-b from-brand-cream via-white to-brand-cream border-y border-gray-100/50">
      {/* Background decoration with brand colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-brand-terracotta/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-olive/4 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-16 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
            >
              <div className="text-5xl sm:text-6xl font-serif font-bold text-brand-terracotta mb-3">
                <AnimatedNumber value={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-[0.2em] font-medium">
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
