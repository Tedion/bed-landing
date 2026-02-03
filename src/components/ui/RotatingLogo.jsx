import { motion, useScroll, useTransform } from 'framer-motion'

const RotatingLogo = ({ size = 'xlarge', className = '', style = {} }) => {
  const sizes = {
    small: 'w-[80px] h-[80px]',
    default: 'w-[120px] h-[120px]',
    medium: 'w-[240px] h-[240px]',
    large: 'w-[400px] h-[400px]',
    xlarge: 'w-[500px] h-[500px]',
  }

  const mobileSizes = {
    small: 'w-[80px] h-[80px]',
    default: 'w-[120px] h-[120px]',
    medium: 'w-[240px] h-[240px]',
    large: 'w-[300px] h-[300px]',
    xlarge: 'w-[300px] h-[300px]',
  }

  // Size-based dimensions
  const dimensions = {
    small: { viewBox: 200, radius: 68, fontSize: 9, obSize: 50, circleRadius: 68 },
    default: { viewBox: 200, radius: 72, fontSize: 11, obSize: 60, circleRadius: 72 },
    medium: { viewBox: 400, radius: 140, fontSize: 18, obSize: 100, circleRadius: 140 },
    large: { viewBox: 500, radius: 180, fontSize: 24, obSize: 120, circleRadius: 180 },
    xlarge: { viewBox: 500, radius: 200, fontSize: 28, obSize: 190, circleRadius: 200 },
  }

  const dims = dimensions[size]
  const center = dims.viewBox / 2

  // Scroll-based transforms for hero logo
  const { scrollY } = useScroll()
  const scale = size === 'xlarge' ? useTransform(scrollY, [0, 500], [1, 0.3]) : undefined
  const opacity = size === 'xlarge' ? useTransform(scrollY, [0, 300], [1, 0]) : undefined

  return (
    <motion.div 
      className={`${sizes[size]} ${mobileSizes[size]} md:${sizes[size]} ${className} relative mx-auto transform-gpu`}
      style={{
        ...style,
        scale: scale || style.scale,
        opacity: opacity || style.opacity,
      }}
    >
      {/* Rotating SVG with PREMIUM effects */}
      <motion.svg
        viewBox={`0 0 ${dims.viewBox} ${dims.viewBox}`}
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ 
          filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.15))',
          transformOrigin: 'center center',
        }}
      >
        <defs>
          {/* Ultra-realistic sphere gradient with 6 stops */}
          <radialGradient id={`premiumSphere-${size}`} cx="32%" cy="32%">
            <stop offset="0%" stopColor="#F8B882" />
            <stop offset="20%" stopColor="#F0955F" />
            <stop offset="40%" stopColor="#E8773D" />
            <stop offset="60%" stopColor="#DE6E27" />
            <stop offset="85%" stopColor="#C85D20" />
            <stop offset="100%" stopColor="#A84D1A" />
          </radialGradient>
          
          {/* Specular highlight for glossy effect */}
          <radialGradient id={`specular-${size}`} cx="28%" cy="28%">
            <stop offset="0%" stopColor="white" stopOpacity="0.5" />
            <stop offset="35%" stopColor="white" stopOpacity="0.25" />
            <stop offset="65%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          
          {/* Inner shadow for depth */}
          <radialGradient id={`innerGlow-${size}`} cx="50%" cy="50%">
            <stop offset="75%" stopColor="transparent" />
            <stop offset="100%" stopColor="black" stopOpacity="0.2" />
          </radialGradient>
          
          {/* Circular text path */}
          <path 
            id={`textPath-${size}`}
            d={`M ${center},${center} m -${dims.circleRadius * 0.95},0 a ${dims.circleRadius * 0.95},${dims.circleRadius * 0.95} 0 1,1 ${dims.circleRadius * 1.9},0 a ${dims.circleRadius * 0.95},${dims.circleRadius * 0.95} 0 1,1 -${dims.circleRadius * 1.9},0`}
          />
        </defs>
        
        {/* Main sphere with depth */}
        <circle 
          cx={center} 
          cy={center} 
          r={dims.circleRadius} 
          fill={`url(#premiumSphere-${size})`} 
        />
        
        {/* Specular highlight */}
        <ellipse 
          cx={center * 0.92} 
          cy={center * 0.9} 
          rx={dims.circleRadius * 0.375} 
          ry={dims.circleRadius * 0.325} 
          fill={`url(#specular-${size})`} 
        />
        
        {/* Inner shadow for depth */}
        <circle 
          cx={center} 
          cy={center} 
          r={dims.circleRadius} 
          fill={`url(#innerGlow-${size})`} 
        />
        
        {/* Rim light */}
        <circle 
          cx={center} 
          cy={center} 
          r={dims.circleRadius} 
          fill="none" 
          stroke="rgba(255,255,255,0.15)" 
          strokeWidth="1.5" 
        />
        
        {/* PREMIUM rotating text with shadow */}
        <text
          fontSize={dims.fontSize}
          fontWeight="600"
          fill="white"
          letterSpacing="16"
          style={{
            fontFamily: "'Inter', -apple-system, sans-serif",
            textTransform: 'uppercase',
            filter: 'drop-shadow(0 3px 8px rgba(0,0,0,0.35))'
          }}
        >
          <textPath href={`#textPath-${size}`} startOffset="0%">
            OPEN BED OREGON • OPEN BED OREGON •
          </textPath>
        </text>
      </motion.svg>

      {/* PREMIUM "OB" with proper overlap and depth */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
          style={{ marginLeft: size === 'xlarge' ? '-15px' : `-${dims.obSize * 0.08}px` }}
        >
          {/* "O" - Pure white with stronger contrast */}
          <span
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: `${dims.obSize}px`,
              fontWeight: 800,
              letterSpacing: '-0.04em',
              background: 'linear-gradient(165deg, #FFFFFF 0%, #FFFFFF 30%, #FBF8EF 70%, #E8DED0 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              zIndex: 2,
              marginRight: size === 'xlarge' ? '-42px' : `-${dims.obSize * 0.22}px`,
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))',
            }}
          >
            O
          </span>
          
          {/* "B" - Stronger tan */}
          <span
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: `${dims.obSize}px`,
              fontWeight: 800,
              letterSpacing: '-0.04em',
              background: 'linear-gradient(165deg, #E5C7B1 0%, #D4B5A0 40%, #C2A58E 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              zIndex: 1,
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))',
            }}
          >
            B
          </span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default RotatingLogo
