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
      <img className='mainTitle-image' src="/images/background-flower.png" alt="Photo on main page"/> 
    </div>
  );
}

export default MainTitle;