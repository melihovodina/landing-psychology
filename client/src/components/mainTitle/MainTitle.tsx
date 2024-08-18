import React, { FC } from 'react';
import './mainTitle.css';

const MainTitle: FC = () => {
  return (
    <div className='mainTitle-main'>
      <div className='mainTitle-block'>
        <h2 className="mainTitle-subtitle">ПСИХОЛОГ</h2>
        <h1 className="mainTitle-title">ОЛЬГА СТРЕЛЬЦОВА</h1>
        <button className="mainTitle-button">ЗАПИСЬ НА КОНСУЛЬТАЦИЮ</button>
      </div>
      <img className='mainTitle-image-first' src="/images/main-flower-1.png" alt="first background flower on main page"/>
      <img className='mainTitle-image-second' src="/images/main-flower-2.png" alt="second background flower on main page"/>
      <img className='mainTitle-image-third' src="/images/main-flower-3.png" alt="third background flower on main page"/>  
    </div>
  );
}

export default MainTitle;