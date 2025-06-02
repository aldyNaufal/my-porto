import { useEffect, useRef, useState } from 'react';

const useScrollReveal = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Set ke false jika ingin hide ketika keluar dari viewport
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1, // Berapa persen element harus terlihat
        rootMargin: options.rootMargin || '0px 0px -100px 0px', // Margin untuk trigger
        ...options
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

export default useScrollReveal;