import React from 'react';
import useScrollReveal from './UseScrollReveal';
import './ScrollReveal.css';

const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  distance = '30px',
  threshold = 0.1,
  className = ''
}) => {
  const [ref, isVisible] = useScrollReveal({ threshold });

  const getAnimationClass = () => {
    const baseClass = 'scroll-reveal';
    const directionClass = `scroll-reveal--${direction}`;
    const visibleClass = isVisible ? 'scroll-reveal--visible' : '';
    
    return `${baseClass} ${directionClass} ${visibleClass} ${className}`;
  };

  const style = {
    '--reveal-delay': `${delay}s`,
    '--reveal-duration': `${duration}s`,
    '--reveal-distance': distance,
  };

  return (
    <div ref={ref} className={getAnimationClass()} style={style}>
      {children}
    </div>
  );
};

export default ScrollReveal;