const Footer = () => {
  return (
    <footer className="relative py-16 px-8 bg-[#2B3210] text-white/60">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © 2026 Open Bed Oregon. Built by providers, for providers.
        </p>
        <div className="flex gap-8 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
