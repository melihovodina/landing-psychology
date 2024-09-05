import React, { FC } from 'react';
import './serviceUnit.css'

interface ServiceUnitProps {
  item: { index: number; title: string; text: string };
}

const ServiceUnit: FC<ServiceUnitProps> = ({ item }) => {
  const animationDuration = item.index*0.5

  return (
    <div className='serviceUnit-rear-block' style={{ '--animation-duration': `${animationDuration}s` } as React.CSSProperties}>
        <div className='serviceUnit-block'>
          <h2 className='serviceUnit-title'>{item.title}</h2>
          <p className='serviceUnit-text'>{item.text}</p>
        </div>
    </div>
  );
};

export default ServiceUnit;