import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

function AnimatedNumber({ value, suffix = '' }) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 100, stiffness: 100 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])
  
  const display = useTransform(springValue, (current) =>
    Math.round(current).toLocaleString() + suffix
  )
  
  return <motion.span ref={ref}>{display}</motion.span>
}

const SocialProof = () => {
  const stats = [
    { number: 250, suffix: '+', label: 'Active Providers' },
    { number: 1200, suffix: '+', label: 'Successful Placements' },
    { number: 33, suffix: ' Years', label: 'Industry Experience' }
  ]

  return (
    <section className="relative py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 }}
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
              <div className="text-6xl font-serif font-bold text-[#DE6E27] mb-3">
                <AnimatedNumber value={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-[0.2em]">
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
