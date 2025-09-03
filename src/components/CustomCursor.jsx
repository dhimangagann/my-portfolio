import { useEffect, useState } from 'react'

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = (e) => {
      const target = e.target
      if (target.matches('button, a, .cursor-hover, [role="button"]')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e) => {
      const target = e.target
      if (target.matches('button, a, .cursor-hover, [role="button"]')) {
        setIsHovering(false)
      }
    }

    document.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleMouseEnter)
    document.addEventListener('mouseout', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Custom Arrow Cursor */}
      <div
        className="fixed w-8 h-8 pointer-events-none z-50 transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: `translate(-4px, -4px) scale(${isClicking ? 0.8 : isHovering ? 1.2 : 1}) rotate(${isHovering ? '15deg' : '0deg'})`
        }}
      >
        <svg 
          viewBox="0 0 32 32" 
          className="w-full h-full"
          style={{
            filter: `drop-shadow(0 0 8px ${isHovering ? 'rgba(139, 92, 246, 0.8)' : 'rgba(59, 130, 246, 0.6)'})`,
          }}
        >
          {/* Arrow body with gradient */}
          <defs>
            <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isHovering ? "#8b5cf6" : "#3b82f6"} />
              <stop offset="50%" stopColor={isClicking ? "#ef4444" : "#06b6d4"} />
              <stop offset="100%" stopColor={isHovering ? "#06b6d4" : "#8b5cf6"} />
            </linearGradient>
          </defs>
          
          {/* Main arrow shape */}
          <path 
            d="M2 2 L18 12 L12 14 L14 20 L10 16 L2 18 Z" 
            fill="url(#arrowGradient)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="0.5"
          />
          
          {/* Arrow tip highlight */}
          <path 
            d="M2 2 L18 12 L14 10 Z" 
            fill="rgba(255,255,255,0.2)"
          />
          
          {/* Arrow body shadow */}
          <path 
            d="M6 6 L14 12 L12 14 L10 16 L6 14 Z" 
            fill="rgba(0,0,0,0.2)"
          />
        </svg>
      </div>
    </div>
  )
}

export default CustomCursor
