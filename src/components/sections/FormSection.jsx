import { useRef, useEffect, useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'

const FORM_SCRIPT_URL = 'https://my.gravatas.pro/js/form_embed.js'
const FORM_ID = '1vadcfpIRKI6msOBe4ZO'
const FORM_HEIGHT = 952

const FormSection = () => {
  const ref = useRef(null)
  const scriptRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formLoaded, setFormLoaded] = useState(false)
  const [formError, setFormError] = useState(false)

  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector(`script[src="${FORM_SCRIPT_URL}"]`)
    if (existingScript) {
      setFormLoaded(true)
      return
    }

    // Load GHL form script
    const script = document.createElement('script')
    script.src = FORM_SCRIPT_URL
    script.async = true
    script.defer = true
    scriptRef.current = script

    script.onload = () => {
      setFormLoaded(true)
      setFormError(false)
    }

    script.onerror = () => {
      setFormError(true)
      setFormLoaded(false)
    }

    document.body.appendChild(script)

    return () => {
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current)
      }
    }
  }, [])

  const handleIframeLoad = useCallback(() => {
    setFormLoaded(true)
    setFormError(false)
  }, [])

  return (
    <section id="signup-form" ref={ref} className="relative py-32 px-8 overflow-hidden bg-gradient-to-b from-white via-brand-cream to-brand-cream">
      {/* Dot grid + enhanced background */}
      <div className="absolute inset-0 dot-grid opacity-15" />
      <div className="absolute inset-0">
        {/* Multiple decorative elements for depth */}
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-brand-terracotta/8 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-brand-olive/6 rounded-full blur-3xl translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-terracotta/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-6 py-2 bg-brand-terracotta/15 text-brand-terracotta rounded-full text-sm font-semibold shadow-sm border border-brand-terracotta/20">
              Get Started
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-serif mb-6 text-brand-sage"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            Ready to join?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Start connecting with Oregon's professional AFH network today
          </motion.p>
        </motion.div>
        
        {/* Form container with enhanced 3D effect and brand colors */}
        <motion.div
          className="relative transform-gpu"
          initial={{ opacity: 0, y: 60, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Enhanced animated glow with brand terracotta */}
          <motion.div
            className="absolute inset-0 bg-brand-terracotta/25 blur-3xl rounded-[40px] -z-10"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Additional outer glow ring */}
          <motion.div
            className="absolute -inset-2 bg-brand-terracotta/15 rounded-[42px] blur-xl -z-20"
            animate={{
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative bg-white rounded-[40px] p-6 md:p-12 shadow-[0_50px_120px_-20px_rgba(222,110,39,0.25)] border-2 border-brand-terracotta/15">
            {/* Error state */}
            {formError && (
              <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Unable to load form</h3>
                <p className="text-gray-600 mb-6">Please try again later or contact us directly.</p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-8 py-3 bg-brand-terracotta hover:bg-brand-terracottaDark text-white rounded-full font-semibold transition-colors shadow-lg"
                >
                  Reload Page
                </button>
              </div>
            )}

            {/* Loading state */}
            {!formLoaded && !formError && (
              <div className="flex flex-col items-center justify-center min-h-[600px] sm:min-h-[800px] lg:min-h-[952px]" role="status" aria-live="polite">
                <div className="relative w-24 h-24 mb-6">
                  <div className="absolute inset-0 border-4 border-brand-terracotta/20 rounded-full"></div>
                  <motion.div
                    className="absolute inset-0 border-4 border-transparent border-t-brand-terracotta rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <p className="text-gray-700 text-lg font-medium">Loading form...</p>
                <p className="text-gray-500 text-sm mt-2">Please wait a moment</p>
              </div>
            )}

            {/* Form iframe */}
            {!formError && (
              <div className="rounded-2xl overflow-hidden">
                <iframe
                  src={`https://my.gravatas.pro/widget/form/${FORM_ID}`}
                  style={{
                    width: '100%',
                    height: `${FORM_HEIGHT}px`,
                    border: 'none',
                    borderRadius: '20px',
                    display: formLoaded ? 'block' : 'none',
                  }}
                  id={`inline-${FORM_ID}`}
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Open Bed Form"
                  data-height={FORM_HEIGHT}
                  data-layout-iframe-id={`inline-${FORM_ID}`}
                  data-form-id={FORM_ID}
                  title="Open Bed Form"
                  onLoad={handleIframeLoad}
                  loading="lazy"
                  allow="clipboard-read; clipboard-write"
                  className="w-full"
                />
              </div>
            )}
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}

export default FormSection
