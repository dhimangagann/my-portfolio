import { useState, useEffect, useRef } from 'react';

function AnimatedCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isMobile, setIsMobile] = useState(false);
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let trailX = 0;
    let trailY = 0;

    // Check if device is mobile
    const checkIfMobile = () => {
      const isMobileDevice = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                           ('ontouchstart' in window) || 
                           (navigator.maxTouchPoints > 0) ||
                           window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
      return isMobileDevice;
    };

    const mobile = checkIfMobile();

    const updatePosition = (clientX, clientY) => {
      mouseX = clientX;
      mouseY = clientY;
      setIsVisible(true);
    };

    // Mouse events for desktop
    const updateMousePosition = (e) => {
      updatePosition(e.clientX, e.clientY);
    };

    // Touch events for mobile
    const updateTouchPosition = (e) => {
      if (e.touches && e.touches[0]) {
        updatePosition(e.touches[0].clientX, e.touches[0].clientY);
        setCursorVariant('touch');
      }
    };

    const handleTouchStart = (e) => {
      updateTouchPosition(e);
      setCursorVariant('touch-active');
    };

    const handleTouchMove = (e) => {
      updateTouchPosition(e);
      setCursorVariant('touch');
    };

    const handleTouchEnd = () => {
      setCursorVariant('default');
      // Keep cursor visible for a moment after touch ends
      setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    };

    const animateCursor = () => {
      // Ultra smooth lerp with different speeds for mobile
      const mainSpeed = mobile ? 0.2 : 0.15;
      const trailSpeed = mobile ? 0.12 : 0.1;

      // Main cursor
      cursorX += (mouseX - cursorX) * mainSpeed;
      cursorY += (mouseY - cursorY) * mainSpeed;

      // Trail
      trailX += (mouseX - trailX) * trailSpeed;
      trailY += (mouseY - trailY) * trailSpeed;

      // Update positions
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX - 20}px, ${cursorY - 20}px, 0)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailX - 4}px, ${trailY - 4}px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${cursorX - 30}px, ${cursorY - 30}px, 0)`;
      }

      requestAnimationFrame(animateCursor);
    };

    const handleMouseLeave = () => {
      if (!mobile) setIsVisible(false);
    };
    
    const handleMouseEnter = () => setIsVisible(true);

    // Event listeners for mouse (desktop)
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Event listeners for touch (mobile)
    if (mobile) {
      document.addEventListener('touchstart', handleTouchStart, { passive: true });
      document.addEventListener('touchmove', handleTouchMove, { passive: true });
      document.addEventListener('touchend', handleTouchEnd);
      document.addEventListener('touchcancel', handleTouchEnd);
    }

    // Start animation
    const animationId = requestAnimationFrame(animateCursor);

    // Add hover effects
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .interactive'
      );

      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => setCursorVariant('hover'));
        el.addEventListener('mouseleave', () => setCursorVariant('default'));
        
        // Touch events for mobile
        if (mobile) {
          el.addEventListener('touchstart', () => setCursorVariant('touch-hover'));
          el.addEventListener('touchend', () => setCursorVariant('default'));
        }
      });
    };

    setTimeout(addHoverListeners, 100);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      
      if (mobile) {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
        document.removeEventListener('touchcancel', handleTouchEnd);
      }
      
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Show cursor on both desktop and mobile when visible
  if (!isVisible) return null;

  // Get cursor styles based on variant and device
  const getCursorStyles = () => {
    const baseSize = isMobile ? 50 : 40;
    const hoverSize = isMobile ? 70 : 60;
    
    switch (cursorVariant) {
      case 'hover':
      case 'touch-hover':
        return {
          width: `${hoverSize}px`,
          height: `${hoverSize}px`,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(147, 51, 234, 0.4) 50%, transparent 70%)',
          border: `3px solid rgba(59, 130, 246, 0.9)`,
          transform: 'scale(1.15)',
        };
      case 'touch':
        return {
          width: `${baseSize}px`,
          height: `${baseSize}px`,
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 70%)',
          border: '3px solid rgba(34, 197, 94, 0.8)',
          transform: 'scale(1.05)',
        };
      case 'touch-active':
        return {
          width: `${hoverSize}px`,
          height: `${hoverSize}px`,
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.5) 0%, rgba(245, 158, 11, 0.4) 50%, transparent 70%)',
          border: '3px solid rgba(239, 68, 68, 0.9)',
          transform: 'scale(1.25)',
        };
      default:
        return {
          width: `${baseSize}px`,
          height: `${baseSize}px`,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 70%)',
          border: '2px solid rgba(59, 130, 246, 0.6)',
          transform: 'scale(1)',
        };
    }
  };

  const cursorStyles = getCursorStyles();

  return (
    <>
      {/* Hide default cursor on desktop, keep it on mobile for better UX */}
      <style jsx global>{`
        @media (hover: hover) and (pointer: fine) {
          * {
            cursor: none !important;
          }
          
          input, textarea, select {
            cursor: text !important;
          }
        }
        
        /* On mobile, reduce default cursor visibility but don't completely hide it */
        @media (hover: none) and (pointer: coarse) {
          * {
            cursor: auto;
          }
        }
      `}</style>

      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-100 ease-out"
        style={{
          ...cursorStyles,
          borderRadius: '50%',
          mixBlendMode: isMobile ? 'normal' : 'difference',
          willChange: 'transform',
          boxShadow: `0 0 ${isMobile ? '30px' : '20px'} ${
            cursorVariant.includes('touch-active') ? 'rgba(239, 68, 68, 0.4)' :
            cursorVariant.includes('touch') ? 'rgba(34, 197, 94, 0.3)' :
            'rgba(59, 130, 246, 0.3)'
          }`,
        }}
      />

      {/* Cursor trail dot */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          width: isMobile ? '12px' : '8px',
          height: isMobile ? '12px' : '8px',
          background: cursorVariant.includes('touch') 
            ? 'linear-gradient(45deg, #22c55e, #3b82f6, #8b5cf6)' 
            : 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)',
          borderRadius: '50%',
          willChange: 'transform',
          opacity: 0.8,
        }}
      />

      {/* Outer glow */}
      <div
        ref={glowRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9997] transition-opacity duration-300 ${
          cursorVariant === 'hover' || cursorVariant.includes('touch') ? 'opacity-70' : 'opacity-40'
        }`}
        style={{
          width: isMobile ? '80px' : '60px',
          height: isMobile ? '80px' : '60px',
          background: cursorVariant.includes('touch') 
            ? 'radial-gradient(circle, transparent 30%, rgba(34, 197, 94, 0.15) 70%)'
            : 'radial-gradient(circle, transparent 30%, rgba(59, 130, 246, 0.1) 70%)',
          borderRadius: '50%',
          willChange: 'transform',
        }}
      />

      {/* Mobile touch indicator */}
      {isMobile && cursorVariant.includes('touch') && (
        <div className="fixed top-4 right-4 z-[9999] pointer-events-none">
          <div className="bg-black/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white/70 border border-white/20">
            ✨ Custom Cursor Active
          </div>
        </div>
      )}
    </>
  );
}

export default AnimatedCursor;
