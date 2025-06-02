const ScrollIndicator = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['Welcome', 'About', 'Skills', 'Projects', 'Experience'];

  useEffect(() => {
    const container = document.querySelector('.snap-scroll-container');
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const windowHeight = window.innerHeight;
      const sectionIndex = Math.round(scrollTop / windowHeight);
      
      if (sectionIndex >= 0 && sectionIndex < sections.length) {
        setCurrentSection(sectionIndex);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index) => {
    const container = document.querySelector('.snap-scroll-container');
    if (container) {
      container.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="scroll-indicator">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`scroll-dot ${index === currentSection ? 'active' : ''}`}
          onClick={() => scrollToSection(index)}
          title={section}
        />
      ))}
    </div>
  );
};

export default ScrollIndicator;