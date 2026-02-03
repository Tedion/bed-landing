import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const FormSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    // Load GHL form script
    const script = document.createElement('script')
    script.src = 'https://my.gravatas.pro/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section id="signup-form" ref={ref} className="relative py-32 px-8 bg-gradient-to-b from-white to-[#FBF8EF]">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-serif mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            Ready to join?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Start connecting with Oregon's professional AFH network today
          </motion.p>
        </motion.div>
        
        {/* Form container with 3D effect */}
        <motion.div
          className="relative transform-gpu"
          initial={{ opacity: 0, y: 60, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Animated glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#DE6E27]/20 to-[#C85D20]/20 blur-3xl rounded-[40px]"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative bg-white rounded-[40px] p-8 md:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)]">
            <div className="rounded-2xl overflow-hidden">
              <iframe
                src="https://my.gravatas.pro/widget/form/1vadcfpIRKI6msOBe4ZO"
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '600px',
                  border: 'none',
                  borderRadius: '20px'
                }}
                id="inline-1vadcfpIRKI6msOBe4ZO"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Open Bed Form"
                data-height="952"
                data-layout-iframe-id="inline-1vadcfpIRKI6msOBe4ZO"
                data-form-id="1vadcfpIRKI6msOBe4ZO"
                title="Open Bed Form"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}

export default FormSection
