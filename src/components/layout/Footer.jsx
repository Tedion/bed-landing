const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-10 md:py-12 px-6 md:px-8 lg:px-12 bg-[#2B3210] text-white/90" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-8">
          
          {/* Brand & Description */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif mb-3 font-bold">
                <span className="text-[#F0EADF]">Open</span>{' '}
                <span className="text-[#CBB9AE]">Bed</span>
              </h3>
              <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-md">
                A welcoming community for Adult Family Home providers across Oregon. We connect, collaborate, and grow together.
              </p>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-4">
            <div>
              <h4 className="text-lg md:text-xl font-semibold mb-4 text-white">Contact Us</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="mailto:info@openbedoregon.com" 
                    className="inline-flex items-center gap-2 text-base md:text-lg text-white/80 hover:text-white transition-all duration-200 hover:gap-3 focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2 py-1 -ml-2"
                    aria-label="Send us an email"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@openbedoregon.com
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+15551234567" 
                    className="inline-flex items-center gap-2 text-base md:text-lg text-white/80 hover:text-white transition-all duration-200 hover:gap-3 focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2 py-1 -ml-2"
                    aria-label="Call us"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (555) 123-4567
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60 text-center md:text-left">
            © {currentYear} Open Bed Oregon. All rights reserved.
          </p>
          <p className="text-sm text-white/60 text-center md:text-right italic">
            Built by providers, for providers.
          </p>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer
