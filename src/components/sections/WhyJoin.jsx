import { motion } from 'framer-motion'

const WhyJoin = () => {
  const reasons = [
    { title: "Real-time", subtitle: "placement leads" },
    { title: "Professional", subtitle: "network" },
    { title: "Oregon", subtitle: "regulatory updates" },
    { title: "Business growth", subtitle: "support" },
    { title: "Training &", subtitle: "events" },
    { title: "Fast", subtitle: "communication" }
  ]

  return (
    <section className="relative py-32 px-8">
      <div className="max-w-[1600px] mx-auto">
        
        <motion.h2
          className="text-6xl md:text-7xl font-serif text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Why providers join
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 }}
          }}
        >
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              className="relative aspect-square bg-white p-12 flex flex-col justify-center items-center text-center group overflow-hidden cursor-pointer"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                }
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#2B3210',
                transition: { duration: 0.4 }
              }}
            >
              {/* Number indicator */}
              <motion.div
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-100 group-hover:bg-white/10 flex items-center justify-center text-xs font-bold text-gray-400 group-hover:text-white transition-colors"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
              >
                {i + 1}
              </motion.div>
              
              <h3 className="relative z-10 text-4xl font-serif leading-tight text-gray-900 group-hover:text-white transition-colors duration-400">
                {item.title}<br/>{item.subtitle}
              </h3>
              
              {/* Hover arrow */}
              <motion.div
                className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100"
                initial={false}
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  )
}

export default WhyJoin
