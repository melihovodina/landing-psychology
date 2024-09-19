import React, { FC, ReactNode, useState } from 'react';
import './slider.css';

interface SliderProps {
  children: ReactNode;
}

const Slider: FC<SliderProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);

  const handleSwipeLeft = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex < childrenArray.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handleSwipeRight = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  return (
    <div
      className='slider-main'
      onTouchStart={(e) => {
        const touchStartX = e.touches[0].clientX;
        const touchEndHandler = (e: TouchEvent) => {
          const touchEndX = e.changedTouches[0].clientX;
          if (touchEndX < touchStartX) handleSwipeLeft();
          if (touchEndX > touchStartX) handleSwipeRight();
          document.removeEventListener('touchend', touchEndHandler);
        };
        document.addEventListener('touchend', touchEndHandler);
      }}
    >
      <div className='slider-child'>{childrenArray[currentIndex]}</div>
    </div>
  );
};

export default Slider;