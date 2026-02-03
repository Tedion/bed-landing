import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '',
  hover = true,
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-2xl p-8 card-shadow-lg'
  const classes = `${baseClasses} ${className}`

  if (hover) {
    return (
      <motion.div
        className={classes}
        whileHover={{ 
          y: -4, 
          transition: { duration: 0.2 },
        }}
        style={{
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Card
