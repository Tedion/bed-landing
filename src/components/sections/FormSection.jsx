import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const FormSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load GHL form script
    const existing = document.querySelector('script[data-ob-form-embed="true"]')
    if (existing) return

    const script = document.createElement('script')
    script.src = 'https://link.msgsndr.com/js/form_embed.js'
    script.async = true
    script.dataset.obFormEmbed = 'true'
    document.body.appendChild(script)

    return () => {
      // keep script cached for SPA navigation
    }
  }, [])

  const formUrl = 'https://api.leadconnectorhq.com/widget/form/1vadcfpIRKI6msOBe4ZO'

  return (
    <section 
      id="signup-form" 
      ref={ref} 
      className="relative py-24 md:py-32 px-6 md:px-8 lg:px-12 bg-white"
      aria-labelledby="form-heading"
    >
      <div className="max-w-3xl mx-auto">
        
        {/* Header - warm and inviting */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            id="form-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 md:mb-8 text-[#2B3210] leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Let's start a conversation
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-[#505431] leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            We'd love to learn more about you and how we can support your work. No pressure, just genuine connection.
          </motion.p>
        </motion.div>
        
        {/* Form container - clean and accessible */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative bg-white rounded-3xl p-6 md:p-10 lg:p-12 shadow-[0_20px_60px_-15px_rgba(43,50,16,0.08)] border border-[#AFBFBE]/20">
            <div className="relative rounded-xl overflow-hidden">
              {!isLoaded && (
                <div
                  className="absolute inset-0 min-h-[600px] bg-[#FBF8EF] border border-[#AFBFBE]/25 rounded-xl animate-pulse"
                  aria-label="Loading form"
                  role="status"
                />
              )}
              <iframe
                src={formUrl}
                style={{
                  width: '100%',
                  height: '919px',
                  minHeight: '600px',
                  border: 'none',
                  borderRadius: '12px',
                  opacity: isLoaded ? 1 : 0,
                  pointerEvents: isLoaded ? 'auto' : 'none',
                  transition: 'opacity 300ms ease',
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
                data-height="919"
                data-layout-iframe-id="inline-1vadcfpIRKI6msOBe4ZO"
                data-form-id="1vadcfpIRKI6msOBe4ZO"
                title="Join our community - Contact form"
                loading="lazy"
                aria-label="Contact form to join our community"
                onLoad={() => setIsLoaded(true)}
              />
            </div>
            <div className="mt-6 text-center">
              <a
                href={formUrl}
                target="_blank"
                rel="noreferrer"
                className="text-base md:text-lg text-[#505431] underline underline-offset-4 hover:text-[#2B3210] focus:outline-none focus:ring-4 focus:ring-[#DE6E27]/20 rounded"
              >
                Having trouble viewing the form? Open it in a new tab.
              </a>
            </div>
          </div>
        </motion.div>
        
        {/* Trust note */}
        <motion.p
          className="text-center mt-10 text-base md:text-lg text-[#505431]/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          We respect your privacy. Your information stays with us.
        </motion.p>
        
      </div>
    </section>
  )
}

export default FormSection
