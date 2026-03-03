import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const WhyJoin = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const reasons = [
    { 
      title: "Real-time", 
      subtitle: "placement leads",
      description: "Get instant notifications when new placement opportunities become available in your area."
    },
    { 
      title: "Professional", 
      subtitle: "network",
      description: "Connect with experienced providers and build meaningful professional relationships."
    },
    { 
      title: "Oregon", 
      subtitle: "regulatory updates",
      description: "Stay informed about the latest regulations and compliance requirements."
    },
    { 
      title: "Business growth", 
      subtitle: "support",
      description: "Access resources and guidance to help your Adult Family Home thrive."
    },
    { 
      title: "Training &", 
      subtitle: "events",
      description: "Participate in workshops, training sessions, and community events."
    },
    { 
      title: "Fast", 
      subtitle: "communication",
      description: "Quick and efficient communication channels for urgent matters and updates."
    }
  ]

  return (
    <section 
      ref={ref}
      className="relative py-24 md:py-32 px-6 md:px-8 lg:px-12 bg-white overflow-hidden"
      aria-labelledby="why-join-heading"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header with title and optional buttons */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.h2
              id="why-join-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 text-[#2B3210]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Why providers join
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-[#505431] font-light max-w-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Everything you need to grow and succeed
            </motion.p>
          </div>
        </motion.div>
        
        {/* Grid layout - Untapped Africa style */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 }}
          }}
        >
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              className="relative group"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                }
              }}
            >
              <motion.div
                className="relative h-full bg-white rounded-2xl overflow-hidden border border-[#AFBFBE]/20 hover:border-[#DE6E27]/40 transition-all duration-500 shadow-sm hover:shadow-xl group-hover:-translate-y-2"
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#DE6E27]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                />

                {/* Content */}
                <div className="relative p-8 md:p-10 z-10">
                  {/* Number badge */}
                  <motion.div
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gradient-to-br from-[#DE6E27] to-[#C85D20] flex items-center justify-center text-white font-bold text-sm shadow-md"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {i + 1}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-serif leading-tight text-[#2B3210] mb-4 group-hover:text-[#DE6E27] transition-colors duration-300 pr-12">
                    {item.title}<br/>
                    <span className="text-[#505431]">{item.subtitle}</span>
                  </h3>

                  {/* Description */}
                  <p className="text-base md:text-lg text-[#505431]/80 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Hover indicator line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#DE6E27] to-transparent w-0 group-hover:w-full transition-all duration-500"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  )
}

export default WhyJoin
