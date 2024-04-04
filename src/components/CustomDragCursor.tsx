import React, { useState, useEffect } from 'react';
import styles from '../styles/CustomCursor.module.css';

const CustomDragCursor = () => {
  const [position, setPosition] = useState({ x: -50, y: -50 });

  const isWithinSliderSection = (x: number, y: number): boolean => {
    const sectionRect = document.getElementById('drag-section')?.getBoundingClientRect();

    if (!sectionRect) {
      return false;
    }

    const sectionLeft = sectionRect.left;
    const sectionRight = sectionRect.right;
    const sectionTop = sectionRect.top;
    const sectionBottom = sectionRect.bottom;

    return x >= sectionLeft && x <= sectionRight && y >= sectionTop && y <= sectionBottom;
  };

  const handleMouseMove = (e: MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;

    if (isWithinSliderSection(x, y)) {
      setPosition({ x, y }); // Update cursor position only within the slider section
    } else {
      setPosition({ x: -50, y: -50 }); // Hide cursor outside the section
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.cursor} style={{ left: `${position.x}px`, top: `${position.y}px`, visibility: position.x === -50 && position.y === -50 ? 'hidden' : 'visible' }}>
      Drag
    </div>
  );
};

export default CustomDragCursor;
