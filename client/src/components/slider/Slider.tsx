import React, { useState } from 'react';
import './slider.css'
import ArrowInCircle from '../svg/ArrowInCircle';

interface SliderProps {
  classNames: {
    content: string,
    item: string,
    arrow: string
  },
  visibleItems?: number
  children: React.ReactNode[];
}

const Slider: React.FC<SliderProps> = ({ children, classNames, visibleItems = 1}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullClassNames = {
    content: `slider-content ${classNames?.content}`,
    item: `slider-item ${classNames?.item}`,
    left: `left slider-arrow ${classNames?.arrow}`,
    right: `right slider-arrow ${classNames?.arrow}`,
  }

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? (children.length / visibleItems) - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === (children.length / visibleItems) - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider">
      <ArrowInCircle className={fullClassNames.left} onClick={handlePrevClick}/>
      <div className={fullClassNames.content}>
        <div className='slider-items' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {children.map((child, index) => (
          <div className={fullClassNames.item} key={index}>
            {child}
          </div>
        ))}
        </div>
      </div>
      <ArrowInCircle className={fullClassNames.right} onClick={handleNextClick}/>
    </div>
  );
};

export default Slider;