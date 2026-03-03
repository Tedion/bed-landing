import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

function AnimatedNumber({ value, suffix = '', trigger = false }) {
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { 
    damping: 25, 
    stiffness: 40,
    mass: 0.8
  })
  
  useEffect(() => {
    if (trigger) {
      // Reset to 0 first, then animate to target value
      motionValue.set(0)
      const timer = setTimeout(() => {
        motionValue.set(value)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [motionValue, trigger, value])
  
  const display = useTransform(springValue, (current) =>
    Math.round(current).toLocaleString() + suffix
  )
  
  return <motion.span>{display}</motion.span>
}

const SocialProof = () => {
  const sectionRef = useRef(null)
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const stats = [
    { number: 250, suffix: '+', label: 'Active Providers' },
    { number: 1200, suffix: '+', label: 'Successful Placements' },
    { number: 33, suffix: ' Years', label: 'Industry Experience' }
  ]

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 md:py-16 bg-[#AFBFBE]/10 border-y border-[#AFBFBE]/20"
      aria-labelledby="social-proof-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center"
          initial="hidden"
          animate={isSectionInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#DE6E27] mb-3">
                <AnimatedNumber value={stat.number} suffix={stat.suffix} trigger={isSectionInView} />
              </div>
              <div className="text-sm md:text-base text-[#505431] font-medium">
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
