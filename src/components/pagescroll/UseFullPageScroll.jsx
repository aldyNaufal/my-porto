import { useState, useEffect, useRef } from 'react';

const useFullPageScroll = (sections) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isScrolling) return;

      const scrollTop = container.scrollTop;
      const windowHeight = window.innerHeight;
      const currentIndex = Math.round(scrollTop / windowHeight);
      
      if (currentIndex !== currentSection && currentIndex >= 0 && currentIndex < sections.length) {
        setCurrentSection(currentIndex);
      }
    };

    // Intersection Observer untuk mendeteksi section yang aktif
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(entry.target);
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setCurrentSection(index);
          }
        });
      },
      {
        threshold: [0.5],
        root: container
      }
    );

    // Observe semua sections
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [currentSection, sections.length, isScrolling]);

  // Function untuk scroll ke section tertentu
  const scrollToSection = (index) => {
    if (isScrolling || !containerRef.current) return;
    
    setIsScrolling(true);
    const container = containerRef.current;
    const targetScrollTop = index * window.innerHeight;
    
    container.scrollTo({
      top: targetScrollTop,
      behavior: 'smooth'
    });

    // Reset isScrolling setelah animasi selesai
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  // Function untuk scroll ke section berikutnya
  const scrollToNext = () => {
    if (currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1);
    }
  };

  // Function untuk scroll ke section sebelumnya
  const scrollToPrev = () => {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowDown':
        case ' ': // Spacebar
          e.preventDefault();
          scrollToNext();
          break;
        case 'ArrowUp':
          e.preventDefault();
          scrollToPrev();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection]);

  return {
    containerRef,
    sectionRefs,
    currentSection,
    scrollToSection,
    scrollToNext,
    scrollToPrev,
    isScrolling
  };
};

export default useFullPageScroll;