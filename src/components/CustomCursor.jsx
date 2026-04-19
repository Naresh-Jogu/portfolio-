import { useEffect, useState } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  
  useEffect(() => {
    let animationFrameId;
    let targetX = -100;
    let targetY = -100;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Gravity trailing effect loop
    const animate = () => {
      setTrailing((prev) => {
        // LERP (Linear Interpolation) for smooth trailing
        const dx = targetX - prev.x;
        const dy = targetY - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div 
        className={styles.cursorDot} 
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }} 
      />
      <div 
        className={styles.cursorRing} 
        style={{ transform: `translate3d(${trailing.x}px, ${trailing.y}px, 0)` }} 
      />
    </>
  );
}
