import React, { useEffect, useRef } from 'react';

const Star = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Stars configuration
    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.5 + 0.2
    }));

    // Meteors array
    const meteors = [];

    // Function to create a new meteor
    function createMeteor() {
      const startX = Math.random() * canvas.width;
      const angle = Math.PI / 4 + (Math.random() * Math.PI / 4); // Angle between PI/4 and PI/2
      
      meteors.push({
        x: startX,
        y: -20, // Start above the screen
        length: Math.random() * 120 + 80, // Longer trails
        angle: angle, // Angle of falling
        speed: Math.random() * 10 + 8, // Slightly faster
        opacity: 1,
        thickness: Math.random() * 2 + 1, // Varying thickness
        color: Math.random() > 0.3 ? 
          'rgba(255, 255, 255, ' : 
          `rgba(${200 + Math.random() * 55}, ${150 + Math.random() * 55}, ${100 + Math.random() * 55}, `
      });
    }

    function animate() {
      // Create slightly transparent background fill to create trail effect
      ctx.fillStyle = 'rgba(2, 21, 38, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Stars
      for (let star of stars) {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
      }

      // Meteors
      for (let i = 0; i < meteors.length; i++) {
        let m = meteors[i];
        
        // Calculate endpoint using angle
        const endX = m.x + Math.cos(m.angle) * m.length;
        const endY = m.y + Math.sin(m.angle) * m.length;
        
        // Draw the meteor trail
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = `${m.color}${m.opacity})`;
        ctx.lineWidth = m.thickness;
        ctx.stroke();
        
        // Draw the meteor head (brighter point)
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.thickness * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, ' + m.opacity + ')';
        ctx.fill();

        // Update meteor position
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.opacity -= 0.01 + Math.random() * 0.01;

        // Remove meteors that have faded out or gone off screen
        if (m.opacity <= 0 || m.y > canvas.height + 100) {
          meteors.splice(i, 1);
          i--;
        }
      }

      // Random chance to create new meteors
      // Adjust the 0.008 value to control frequency (higher = more meteors)
      if (Math.random() < 0.008) {
        createMeteor();
      }

      requestAnimationFrame(animate);
    }

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="stars-canvas"
    />
  );
};

export default Star;