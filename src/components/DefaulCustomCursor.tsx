// CustomCursor.js
import React from 'react';
import styles from '@/styles/CustomCursor.module.css'; // Import CSS module for styling

interface CustomCursorProps {
  colors: string[]; // Specify the type of the colors prop
}

const DefaultCustomCursor: React.FC<CustomCursorProps> = ({ colors }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [currentColorIndex, setCurrentColorIndex] = React.useState(0);

  const trackMouse = (e: MouseEvent) => { // Specify the type of 'e' as MouseEvent
    setPosition({ x: e.clientX, y: e.clientY });
  };

  React.useEffect(() => {
    document.addEventListener('mousemove', trackMouse);
    return () => {
      document.removeEventListener('mousemove', trackMouse);
    };
  }, []);

  const getNextColor = () => {
    setCurrentColorIndex((currentColorIndex + 1) % colors.length);
  };

  return (
    <div
      className={styles['custom-cursor']}
      style={{
        left: position.x,
        top: position.y,
        backgroundColor: colors[currentColorIndex],
      }}
      onMouseEnter={getNextColor}
    ></div>
  );
};

export default DefaultCustomCursor;
