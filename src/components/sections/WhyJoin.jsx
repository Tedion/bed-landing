import { motion } from 'framer-motion'

const WhyJoin = () => {
  const reasons = [
    { title: "Real-time", subtitle: "placement leads", gradient: "from-[#FF6B35] to-[#FF8C5A]" },
    { title: "Professional", subtitle: "network", gradient: "from-[#FF8C5A] to-[#FFB88C]" },
    { title: "Oregon", subtitle: "regulatory updates", gradient: "from-[#FF6B35] to-[#FF8C5A]" },
    { title: "Business growth", subtitle: "support", gradient: "from-[#FF8C5A] to-[#FFB88C]" },
    { title: "Training &", subtitle: "events", gradient: "from-[#FF6B35] to-[#FF8C5A]" },
    { title: "Fast", subtitle: "communication", gradient: "from-[#FF8C5A] to-[#FFB88C]" }
  ]

  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-8 bg-gradient-to-b from-white via-[#FFF5EB] to-white">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8C5A]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#FFB88C]/8 to-[#FF8C5A]/6 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-center mb-16 sm:mb-20 bg-gradient-to-r from-[#2B3210] via-[#404040] to-[#2B3210] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Why providers join
        </motion.h2>
        
        {/* Fixed grid with equal heights */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
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
              className="relative bg-gradient-to-br from-white to-[#FFF5EB]/30 border-2 border-gray-100 rounded-2xl p-8 flex flex-col justify-between min-h-[280px] group hover:border-[#FF6B35] hover:shadow-xl hover:bg-white transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                }
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Gradient accent on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Number badge with gradient */}
              <div className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-110 transition-transform`}>
                {i + 1}
              </div>
              
              {/* Content */}
              <div className="flex-1 flex flex-col justify-center relative z-10">
                <h3 className="text-2xl sm:text-3xl font-serif leading-tight text-gray-900 mb-2 group-hover:text-[#FF6B35] transition-colors">
                  {item.title}
                  <br />
                  <span className={`bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>{item.subtitle}</span>
                </h3>
              </div>
              
              {/* Hover arrow */}
              <motion.div
                className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity relative z-10"
                initial={false}
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg className={`w-6 h-6 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`} fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ stroke: '#FF6B35' }}>
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
