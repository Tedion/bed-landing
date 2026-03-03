import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// Brand colors from reference: terracotta bg, cream O, taupe B, white ring text
const CREAM = '#F0EADF'
const TAUPE = '#CBB9AE'
// Repeat enough times to fill the full circle without gaps
const RING_TEXT = 'OREGON OPEN BED • OREGON OPEN BED • OREGON OPEN BED • OREGON OPEN BED • OREGON OPEN BED • OREGON OPEN BED • '

const RotatingLogo = ({ size = 'xlarge', className = '', style = {} }) => {
  const logoRef = useRef(null)

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

  const dimensions = {
    small: { viewBox: 200, radius: 68, fontSize: 10, obSize: 44, circleRadius: 68 },
    default: { viewBox: 200, radius: 72, fontSize: 12, obSize: 52, circleRadius: 72 },
    medium: { viewBox: 400, radius: 140, fontSize: 22, obSize: 100, circleRadius: 140 },
    large: { viewBox: 500, radius: 180, fontSize: 30, obSize: 130, circleRadius: 180 },
    xlarge: { viewBox: 500, radius: 200, fontSize: 36, obSize: 155, circleRadius: 200 },
  }

  const dims = dimensions[size]
  const center = dims.viewBox / 2

  const { scrollY } = useScroll()
  const scale = size === 'xlarge' ? useTransform(scrollY, [0, 500], [1, 0.3]) : undefined
  const opacity = size === 'xlarge' ? useTransform(scrollY, [0, 300], [1, 0]) : undefined

  return (
    <motion.div
      ref={logoRef}
      className={`${sizes[size]} ${mobileSizes[size]} md:${sizes[size]} ${className} relative mx-auto transform-gpu`}
      style={{
        ...style,
        scale: scale || style.scale,
        opacity: opacity || style.opacity,
      }}
    >
      {/* Rotating SVG - entire SVG rotates full 360° continuously */}
      <motion.svg
        viewBox={`0 0 ${dims.viewBox} ${dims.viewBox}`}
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: 'linear',
          repeatType: 'loop',
        }}
        style={{
          filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))',
          transformOrigin: 'center center',
        }}
      >
        <defs>
          <path
            id={`textPath-${size}`}
            d={`M ${center},${center} m -${dims.circleRadius * 0.95},0 a ${dims.circleRadius * 0.95},${dims.circleRadius * 0.95} 0 1,1 ${dims.circleRadius * 1.9},0 a ${dims.circleRadius * 0.95},${dims.circleRadius * 0.95} 0 1,1 -${dims.circleRadius * 1.9},0`}
          />
        </defs>

        {/* Solid terracotta circle (reference background) */}
        <circle
          cx={center}
          cy={center}
          r={dims.circleRadius}
          fill="#8B4D3C"
        />

        {/* Rotating ring text: "OREGON OPEN BED" - white, bold, very visible, rotates with SVG - fills full circle */}
        <text
          fontSize={dims.fontSize}
          fontWeight="700"
          fill="#FFFFFF"
          letterSpacing="0.1em"
          style={{
            fontFamily: "'Inter', -apple-system, sans-serif",
            textTransform: 'uppercase',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))',
            stroke: 'rgba(0,0,0,0.1)',
            strokeWidth: '0.5',
            paintOrder: 'stroke fill',
          }}
        >
          <textPath href={`#textPath-${size}`} startOffset="0%">
            {RING_TEXT}
          </textPath>
        </text>
      </motion.svg>

      {/* OB monogram: O (cream) + B (taupe) - STATIC, perfectly centered */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center"
        >
          {/* O - larger, cream, behind */}
          <span
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: `${dims.obSize}px`,
              fontWeight: 700,
              letterSpacing: '-0.04em',
              color: CREAM,
              position: 'relative',
              zIndex: 2,
              marginRight: size === 'xlarge' ? '-42px' : `-${dims.obSize * 0.22}px`,
              filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.25))',
            }}
          >
            O
          </span>

          {/* B - slightly smaller, taupe, overlapping O's lower right */}
          <span
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: `${dims.obSize * 0.9}px`,
              fontWeight: 700,
              letterSpacing: '-0.04em',
              color: TAUPE,
              position: 'relative',
              zIndex: 1,
              filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))',
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
