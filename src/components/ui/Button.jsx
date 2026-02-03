import { useState } from 'react'
import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  href,
  className = '',
  ...props 
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 inline-flex items-center gap-2 transform-gpu'
  
  const variants = {
    primary: 'bg-primary-terracotta text-white hover:bg-primary-terracotta/90 hover:shadow-lg',
    secondary: 'border-2 border-primary-sage text-primary-sage hover:bg-primary-sage hover:text-primary-cream',
    outline: 'border-2 border-neutral-gray-100 text-neutral-gray-900 hover:bg-neutral-gray-50',
  }

  const classes = `${baseClasses} ${variants[variant]} ${className}`

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2
    })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          x: mousePosition.x * 0.3,
          y: mousePosition.y * 0.3,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: mousePosition.x * 0.3,
        y: mousePosition.y * 0.3,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
