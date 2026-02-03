const Badge = ({ children, variant = 'foundation', className = '' }) => {
  const variants = {
    foundation: 'bg-primary-copper text-white',
    priority: 'bg-primary-terracotta text-white',
  }

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}

export default Badge
