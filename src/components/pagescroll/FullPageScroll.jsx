import React from 'react';
import useFullPageScroll from './UseFullPageScroll';
import './FullPageScroll.css';

const FullPageScroll = ({ children, showIndicator = true }) => {
  const sections = React.Children.toArray(children);
  const { 
    containerRef, 
    sectionRefs, 
    currentSection, 
    scrollToSection,
    isScrolling 
  } = useFullPageScroll(sections);

  return (
    <div className="fullpage-wrapper">
      <div ref={containerRef} className="fullpage-container">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={`fullpage-section ${
              index === currentSection ? 'active' : ''
            } ${section.props.className || ''}`}
          >
            <div className="section-content">
              {section}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      {showIndicator && (
        <div className="scroll-indicator">
          {sections.map((_, index) => (
            <div
              key={index}
              className={`scroll-dot ${index === currentSection ? 'active' : ''}`}
              onClick={() => scrollToSection(index)}
              style={{ pointerEvents: isScrolling ? 'none' : 'auto' }}
            />
          ))}
        </div>
      )}

      {/* Navigation hints (opsional) */}
      <div className="scroll-hint" style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'white',
        fontSize: '14px',
        opacity: currentSection === 0 ? 1 : 0,
        transition: 'opacity 0.3s ease',
        pointerEvents: 'none',
        textAlign: 'center'
      }}>
        <div>Scroll down or use arrow keys</div>
        <div style={{ fontSize: '20px', marginTop: '5px' }}>↓</div>
      </div>
    </div>
  );
};

export default FullPageScroll;