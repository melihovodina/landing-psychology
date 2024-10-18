import React, { FC, useContext } from 'react';
import './mainTitle.css';
import { DeviceContext } from '../contexts/DeviceContext';

const MainTitle: FC = () => {
  const {isMobile} = useContext(DeviceContext)

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if(isMobile) {
    return (
      <div className='mainTitle-main'>
        <div className='mainTitle-block'>
          <h2 className="mainTitle-subtitle">ПСИХОЛОГ</h2>
          <h1 className="mainTitle-title">ОЛЬГА СТРЕЛЬЦОВА</h1>
          <div className='mainTitle-button-box'>
            <button className="mainTitle-button" onClick={() => scrollToSection('contacts')}>ЗАПИСЬ НА КОНСУЛЬТАЦИЮ</button>
          </div>
        </div>
        <div className='mainTitle-photo-block'>
          <img className='mainTitle-photo' src="/images/main.webp" alt="Psychologist on main page"/>
        </div>
      </div>
    );
  }

  return (
    <div className='mainTitle-main'>
      <div className='mainTitle-block'>
        <h2 className="mainTitle-subtitle">ПСИХОЛОГ</h2>
        <h1 className="mainTitle-title">ОЛЬГА СТРЕЛЬЦОВА</h1>
        <button className="mainTitle-button" onClick={() => scrollToSection('contacts')}>ЗАПИСЬ НА КОНСУЛЬТАЦИЮ</button>
      </div>
      <div className='mainTitle-photo-block'>
        <img className='mainTitle-photo' src="/images/main.webp" alt="Psychologist on main page"/>
      </div> 
      <img className='mainTitle-image-first' src="/images/main-flower-1.webp" alt="First background flower on main page"/>
      <img className='mainTitle-image-second' src="/images/main-flower-2.webp" alt="Second background flower on main page"/>
      <img className='mainTitle-image-third' src="/images/main-flower-3.webp" alt="Third background flower on main page"/>  
    </div>
  );
}

export default MainTitle;