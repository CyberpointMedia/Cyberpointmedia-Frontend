import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect, useRef } from 'react';
import showcaseImg1 from '@/assets/showcase-img1.svg';
import showcaseImg2 from '@/assets/showcase-img2.svg';
import showcaseImg3 from '@/assets/showcase-img3.svg';


const DragSlider = ({ items, onItemsChange }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartIndex, setDragStartIndex] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const sliderRef = useRef(null);

  const handleMouseDown = (event, index) => {
      setIsDragging(true);
      setDragStartIndex(index);
      setSelectedItems([items[index]]); // Select the initial item
  };

  const handleMouseMove = (event) => {
      if (isDragging) {
          const offsetX = event.clientX - sliderRef.current.getBoundingClientRect().left;
          const itemsToSelect = Math.floor(offsetX / (sliderRef.current.offsetWidth / items.length)); // Calculate items based on mouse position
          setSelectedItems(items.slice(dragStartIndex, dragStartIndex + itemsToSelect + 1)); // Select items within the drag range (inclusive)
      }
  };

  const handleMouseUp = () => {
      setIsDragging(false);
      setDragStartIndex(null);

      if (onItemsChange) {
          onItemsChange(selectedItems); // Call a callback function with the selected items (optional)
      }
  };

  useEffect(() => {
      window.addEventListener('mouseup', handleMouseUp);
      return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []); // Cleanup on unmount

  const settings = {
      // Your desired slider settings (dots, arrows, etc.)
      dots: true,
      infinite: true,
      slidesToShow: 3,
      draggable: false, // Disable default drag behavior
  };

  return (
      <Slider ref={sliderRef} {...settings}>
          {items.map((item, index) => (
              <div
                  key={index}
                  className={`slider-item ${selectedItems.includes(item) ? 'selected' : ''}`} // Add a CSS class for selected items
                  onMouseDown={(event) => handleMouseDown(event, index)}
                  onMouseMove={handleMouseMove}
              >
                  {/* Your slider item content */}
                  {item.content}
              </div>
          ))}
      </Slider>
  );
};

export default DragSlider;