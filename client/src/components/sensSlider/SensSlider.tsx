import React, { FC, ReactNode, useState, useRef, useContext } from 'react';
import './sensSlider.css';
import classNames from 'classnames';
import { DeviceContext } from '../contexts/DeviceContext';

interface SliderProps {
  children: ReactNode;
  mainClass?: string;
  containerClass?: string;
  childClass?: string;
}

const SensSlider: FC<SliderProps> = ({
  children,
  mainClass,
  containerClass,
  childClass,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0); //текущий индекс элемента слайдера
  const [isDragging, setIsDragging] = useState(false); //определяет, происходит ли сейчас перетаскивание
  const [startX, setStartX] = useState(0); //начальная позиция касания по оси X
  const [translateX, setTranslateX] = useState(0); //смещение элемента слайдера при перетаскивании
  const sliderRef = useRef<HTMLDivElement>(null); //ссылка на элемент слайдера
  const childrenArray = React.Children.toArray(children); //преобразует дочерние элементы в массив
  const { isTablet } = useContext(DeviceContext);
  let step = 1

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
      if (translateX < 0 && currentIndex < childrenArray.length / step - 1) {
        setCurrentIndex(currentIndex + 1); //переход к следующему элементу
      } else if (translateX > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1); //переход к предыдущему элементу
      }
    }
    setTranslateX(0); //сброс смещения
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    setTranslateX(currentX - startX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (Math.abs(translateX) > 50) {
      if (translateX < 0 && currentIndex < childrenArray.length / step - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (translateX > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
    setTranslateX(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTranslateX(0);
    }
  };

  return (
    <div
      className={classNames('slider-main', mainClass)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
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
};

export default SensSlider;