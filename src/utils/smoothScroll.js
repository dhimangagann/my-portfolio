export const smoothScrollTo = (elementId, offset = 80) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  const startPosition = window.pageYOffset;
  const distance = offsetPosition - startPosition;
  const duration = Math.min(Math.abs(distance) * 0.8, 1200);
  let start = null;

  const animation = (currentTime) => {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const progress = Math.min(timeElapsed / duration, 1);
    
    const easedProgress = easeInOutCubic(progress);
    const currentPosition = startPosition + (distance * easedProgress);
    
    window.scrollTo(0, currentPosition);
    
    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

export const addScrollMomentum = () => {
  document.documentElement.style.setProperty('-webkit-overflow-scrolling', 'touch');
  document.body.style.setProperty('-webkit-overflow-scrolling', 'touch');
};

export const initSmoothScrolling = () => {
  addScrollMomentum();
  
  document.documentElement.style.scrollBehavior = 'smooth';
  
  let ticking = false;
  
  const updateScrollProgress = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = scrollTop / (docHeight - winHeight);
    
    document.documentElement.style.setProperty('--scroll-progress', scrollPercent);
    
    ticking = false;
  };
  
  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollProgress);
      ticking = true;
    }
  };
  
  window.addEventListener('scroll', requestTick, { passive: true });
};
