import React, { FC, ReactNode, useState, useRef, useContext } from 'react';
import './slider.css';
import classNames from 'classnames';
import { DeviceContext } from '../contexts/DeviceContext';
import Arrow from '../svg/Arrow';

interface SliderProps {
  children: ReactNode;
  mainClass?: string;
  containerClass?: string;
  childClass?: string;
  visibleItems?: number;
}

const Slider: FC<SliderProps> = ({
  children,
  mainClass,
  containerClass,
  childClass,
  visibleItems = 1
}) => {
  const [currentIndex, setCurrentIndex] = useState(0); //текущий индекс элемента слайдера
  const [isDragging, setIsDragging] = useState(false); //определяет, происходит ли сейчас перетаскивание
  const [startX, setStartX] = useState(0); //начальная позиция касания по оси X
  const [translateX, setTranslateX] = useState(0); //смещение элемента слайдера при перетаскивании
  const sliderRef = useRef<HTMLDivElement>(null); //ссылка на элемент слайдера
  const childrenArray = React.Children.toArray(children); //преобразует дочерние элементы в массив
  const { isMobile } = useContext(DeviceContext);

  //обработчик начала касания
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX); //запоминаем начальную позицию касания
  };

  //обработчик движения пальца
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    setTranslateX(currentX - startX); //вычисляем смещение
  };

  //обработчик окончания касания
  const handleTouchEnd = () => {
    setIsDragging(false);
    //если смещение больше 50 пикселей, изменяем текущий индекс
    if (Math.abs(translateX) > 50) {
      if (translateX < 0 && currentIndex < childrenArray.length - 1) {
        setCurrentIndex(currentIndex + 1); //переход к следующему элементу
      } else if (translateX > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1); //переход к предыдущему элементу
      }
    }
    setTranslateX(0); //сброс смещения
  };

  const handleArrowClick = (direction: 'left' | 'right') => {
    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex(currentIndex - visibleItems);
    } else if (direction === 'right' && currentIndex < childrenArray.length - 1) {
      setCurrentIndex(currentIndex + visibleItems);
    }
  };

  if(isMobile) {
    return (
      <div
        className={classNames('slider-main', mainClass)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={sliderRef}
      >
        <div
          className={classNames('slider-container', containerClass)}
          style={{
            transform: `translateX(${-currentIndex * 100 + translateX / window.innerWidth * 100}%)`,
            transition: isDragging ? 'none' : 'transform 0.3s ease',
          }}
        >
          {childrenArray.map((child, index) => (
            <div
              className={classNames('slider-child', childClass)}
              key={index}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={classNames('slider-main', mainClass)}
      ref={sliderRef}
    >
      <Arrow onClick={() => handleArrowClick('left')} className='slider-arrow-left'/>
      <div className={classNames('slider-container', containerClass)} 
        style={{
              transform: `translateX(calc(${(-currentIndex / visibleItems * 105)}%))`,
              transition: 'transform 0.3s ease',
        }}>
        {childrenArray.map((child, index) => (
          <div
            className={classNames('slider-child', childClass)}
            key={index}
          >
            {child}
          </div>
        ))}
      </div>
      <Arrow onClick={() => handleArrowClick('right')} className='slider-arrow-right'/>
    </div>
  );
};

export default Slider;