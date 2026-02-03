import { motion } from 'framer-motion'

const Logo = ({ className = '', size = 'default', rotateText = false, style = {} }) => {
  const sizes = {
    small: 'h-8 w-8',
    default: 'h-12 w-12',
    medium: 'h-24 w-24',
    large: 'h-64 w-64',
    xlarge: 'h-[500px] w-[500px]',
  }

  // For mobile, use smaller size
  const mobileSizes = {
    small: 'h-8 w-8',
    default: 'h-12 w-12',
    medium: 'h-24 w-24',
    large: 'h-48 w-48',
    xlarge: 'h-[300px] w-[300px]',
  }

  // Dimensions based on size
  const dimensions = {
    small: { viewBox: 200, fontSize: 9, radius: 68, obSize: 18 },
    default: { viewBox: 200, fontSize: 11, radius: 72, obSize: 22 },
    medium: { viewBox: 300, fontSize: 14, radius: 105, obSize: 32 },
    large: { viewBox: 500, fontSize: 26, radius: 185, obSize: 55 },
    xlarge: { viewBox: 600, fontSize: 30, radius: 225, obSize: 70 },
  }

  const dims = dimensions[size]
  const centerX = dims.viewBox / 2
  const centerY = dims.viewBox / 2
  const radius = dims.radius

  // Circular text - repeated twice for full circle
  const circularText = "OPEN BED OREGON • OPEN BED OREGON • "

  return (
    <div 
      className={`${sizes[size]} ${mobileSizes[size]} md:${sizes[size]} ${className} relative flex items-center justify-center transform-gpu`}
      style={style}
    >
      <svg
        viewBox={`0 0 ${dims.viewBox} ${dims.viewBox}`}
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ 
          filter: 'drop-shadow(0 10px 40px rgba(0,0,0,0.15))',
          willChange: rotateText ? 'transform' : 'auto',
        }}
      >
        <defs>
          {/* Circular path for text - centered at origin for rotation */}
          <path
            id={`circlePath-${size}`}
            d={`M 0, -${radius} A ${radius},${radius} 0 1,1 0, ${radius} A ${radius},${radius} 0 1,1 0, -${radius}`}
            fill="none"
          />
          {/* Shadow filter */}
          <filter id={`glow-${size}`}>
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Rotating circular text - ONLY this rotates */}
        <motion.g
          transform={`translate(${centerX}, ${centerY})`}
          animate={rotateText ? {
            rotate: 360,
          } : {}}
          transition={rotateText ? {
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          } : {}}
          style={{
            transformOrigin: 'center center',
          }}
        >
          <text
            fill="#FFFFFF"
            fontSize={dims.fontSize}
            fontFamily="Inter, sans-serif"
            fontWeight="700"
            letterSpacing="0.15em"
            textAnchor="middle"
            className="uppercase"
            filter={`url(#glow-${size})`}
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.4)',
            }}
          >
            <textPath
              href={`#circlePath-${size}`}
              startOffset="0%"
            >
              {circularText}
            </textPath>
          </text>
        </motion.g>

        {/* Static OB center - NEVER rotates */}
        <g transform={`translate(${centerX}, ${centerY})`}>
          {/* O - Cream circle */}
          <circle
            cx={-dims.obSize * 0.22}
            cy={0}
            r={dims.obSize * 0.52}
            fill="#F9F3E3"
            filter={`url(#glow-${size})`}
            style={{ 
              filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.25))',
            }}
          />
          
          {/* B - Tan/Copper */}
          <g>
            {/* Top curve */}
            <path
              d={`M ${-dims.obSize * 0.12} ${-dims.obSize * 0.6}
                  Q ${dims.obSize * 0.22} ${-dims.obSize * 0.6} ${dims.obSize * 0.22} ${-dims.obSize * 0.3}
                  Q ${dims.obSize * 0.22} ${0} ${-dims.obSize * 0.12} ${0}
                  Z`}
              fill="#CBB9AF"
              filter={`url(#glow-${size})`}
              style={{ filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.25))' }}
            />
            {/* Bottom curve */}
            <path
              d={`M ${-dims.obSize * 0.12} ${0}
                  Q ${dims.obSize * 0.22} ${0} ${dims.obSize * 0.22} ${dims.obSize * 0.3}
                  Q ${dims.obSize * 0.22} ${dims.obSize * 0.6} ${-dims.obSize * 0.12} ${dims.obSize * 0.6}
                  Z`}
              fill="#CBB9AF"
              filter={`url(#glow-${size})`}
              style={{ filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.25))' }}
            />
            {/* Vertical stem */}
            <rect
              x={-dims.obSize * 0.12}
              y={-dims.obSize * 0.6}
              width={dims.obSize * 0.1}
              height={dims.obSize * 1.2}
              fill="#CBB9AF"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Logo
