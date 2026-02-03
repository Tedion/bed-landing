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
    <section className="relative py-24 sm:py-32 px-6 sm:px-8 bg-gradient-to-b from-white via-brand-cream to-white">
      {/* Enhanced background decoration with brand colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-terracotta/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-olive/4 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-center mb-16 sm:mb-20 text-brand-sage"
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
              className="relative bg-gradient-to-br from-white to-brand-cream/30 border-2 border-gray-100 rounded-2xl p-8 flex flex-col justify-between min-h-[280px] group hover:border-brand-terracotta hover:shadow-xl hover:bg-white transition-all duration-300"
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
              <div className="absolute inset-0 rounded-2xl bg-brand-terracotta/0 group-hover:bg-brand-terracotta/5 transition-opacity duration-300" />
              
              {/* Number badge with brand terracotta */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-brand-terracotta/10 flex items-center justify-center text-brand-terracotta font-bold text-sm group-hover:bg-brand-terracotta group-hover:text-white transition-all duration-300 shadow-sm">
                {i + 1}
              </div>
              
              {/* Content */}
              <div className="flex-1 flex flex-col justify-center relative z-10">
                <h3 className="text-2xl sm:text-3xl font-serif leading-tight text-gray-900 mb-2 group-hover:text-brand-terracotta transition-colors">
                  {item.title}
                  <br />
                  <span className="text-brand-terracotta">{item.subtitle}</span>
                </h3>
              </div>
              
              {/* Hover arrow */}
              <motion.div
                className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity relative z-10"
                initial={false}
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg className="w-6 h-6 text-brand-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
