import { useState, useEffect, useMemo } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const AnimatedLetter = ({ letter, letterKey, color }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  // Motion values for smooth spring animations
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotate = useMotionValue(0)
  const scale = useMotionValue(1)
  
  // Spring animations
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })
  const springRotate = useSpring(rotate, { stiffness: 300, damping: 20 })
  const springScale = useSpring(scale, { stiffness: 300, damping: 20 })
  
  // Continuous glitch effect while hovering
  useEffect(() => {
    if (!isHovered) {
      x.set(0)
      y.set(0)
      rotate.set(0)
      scale.set(1)
      return
    }

    // Generate initial random transform
    const generateTransform = () => ({
      x: (Math.random() - 0.5) * 20,
      y: (Math.random() - 0.5) * 20,
      rotate: (Math.random() - 0.5) * 25,
      scale: 0.85 + Math.random() * 0.3,
    })

    // Set initial transform
    const initial = generateTransform()
    x.set(initial.x)
    y.set(initial.y)
    rotate.set(initial.rotate)
    scale.set(initial.scale)

    // Continuously update while hovering (TechyScouts style)
    const interval = setInterval(() => {
      const newTransform = generateTransform()
      x.set(newTransform.x)
      y.set(newTransform.y)
      rotate.set(newTransform.rotate)
      scale.set(newTransform.scale)
    }, 80) // Update every 80ms for smooth glitch effect

    return () => clearInterval(interval)
  }, [isHovered, x, y, rotate, scale])
  
  return (
    <motion.span
      className="inline-block relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        x: springX,
        y: springY,
        rotate: springRotate,
        scale: springScale,
        display: 'inline-block',
        transformOrigin: 'center',
        filter: isHovered ? 'blur(0.5px)' : 'blur(0px)',
        willChange: isHovered ? 'transform' : 'auto',
        color: color,
      }}
    >
      {letter === ' ' ? '\u00A0' : letter}
    </motion.span>
  )
}

const AnimatedText = ({ text, className = '', style = {}, wordColors = [] }) => {
  // Memoize words to avoid recreating on every render
  const words = useMemo(() => text.split(' '), [text])
  
  return (
    <motion.h1
      className={`${className} cursor-pointer`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      style={{
        fontFeatureSettings: '"liga" 1',
        textRendering: 'optimizeLegibility',
        ...style,
      }}
    >
      {words.map((word, wordIndex) => {
        const wordColor = wordColors[wordIndex] || style.color || 'inherit'
        return (
          <span key={wordIndex} className="inline-block mr-2 md:mr-3">
            {word.split('').map((letter, letterIndex) => (
              <AnimatedLetter 
                key={`${wordIndex}-${letterIndex}`}
                letter={letter}
                letterKey={`${wordIndex}-${letterIndex}`}
                color={wordColor}
              />
            ))}
          </span>
        )
      })}
    </motion.h1>
  )
}

export default AnimatedText
