import React, { FC } from 'react';
import './textItem.css'

interface ServiceUnitProps {
  item: { index: number; title: string; text: string };
  animation?: boolean
}

const ServiceUnit: FC<ServiceUnitProps> = ({ item, animation = false }) => {
  const animationDuration = item.index*0.5
  const style = animation ? { '--animation-duration': `${animationDuration}s` } : {}

  return (
    <div className='serviceUnit-rear-block' style={style as React.CSSProperties}>
        <div className='serviceUnit-block'>
          <h2 className='serviceUnit-title'>{item.title}</h2>
          <p className='serviceUnit-text'>{item.text}</p>
        </div>
    </div>
  );
};

export default ServiceUnit;