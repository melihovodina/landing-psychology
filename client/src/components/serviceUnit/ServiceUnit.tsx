import React, { FC } from 'react';
import './serviceUnit.css'

interface ServiceUnitProps {
  item: { title: string; text: string };
}

const ServiceUnit: FC<ServiceUnitProps> = ({ item }) => {
  return (
    <div className='serviceUnit-rear-block'>
        <div className='serviceUnit-block'>
          <h2 className='serviceUnit-title'>{item.title}</h2>
          <p className='serviceUnit-text'>{item.text}</p>
        </div>
    </div>
  );
};

export default ServiceUnit;