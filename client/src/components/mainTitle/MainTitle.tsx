import React, { FC, useContext } from 'react';
import './mainTitle.css';
import { DeviceContext } from '../contexts/DeviceContext';
import PhotoFrame from '../photoFrame/PhotoFrame';

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
          <h2 className="mainTitle-subtitle-top">ПСИХОЛОГ</h2>
          <h1 className="mainTitle-title">ОЛЬГА СТРЕЛЬЦОВА</h1>
          <h2 className='mainTitle-subtitle-bottom'>ПОМОГАЮ ЖИТЬ</h2>
          <div className='mainTitle-button-box'>
            <button className="mainTitle-button" onClick={() => scrollToSection('contacts')}>ЗАПИСЬ НА КОНСУЛЬТАЦИЮ</button>
          </div>
        </div>
        <PhotoFrame customClassName='mainTitle-frame' color='beige'>
          <img className='mainTitle-photo' src="/images/white.webp" alt="Психолог крупным планом на белом фоне"/>
        </PhotoFrame>
      </div>
    );
  }

  return (
    <div className='mainTitle-main'>
      <div className='mainTitle-block'>
        <h2 className="mainTitle-subtitle-top">ПСИХОЛОГ</h2>
        <h1 className="mainTitle-title">ОЛЬГА СТРЕЛЬЦОВА</h1>
        <h2 className='mainTitle-subtitle-bottom'>ПОМОГАЮ ЖИТЬ</h2>
        <button className="mainTitle-button" onClick={() => scrollToSection('contacts')}>ЗАПИСЬ НА КОНСУЛЬТАЦИЮ</button>
      </div>
      <PhotoFrame customClassName='mainTitle-frame' color='beige'>
        <img className='mainTitle-photo' src="/images/white.webp" alt="Психолог крупным планом"/>
      </PhotoFrame> 
      <img className='mainTitle-image-first' src="/images/main-flower-1.webp" alt="Большой фоновый рисунок цветка под заголовком"/>
      <img className='mainTitle-image-second' src="/images/main-flower-2.webp" alt="Фоновый рисунок цветка слева от фото психолога"/>
      <img className='mainTitle-image-third' src="/images/main-flower-3.webp" alt="Маленький фоновый рисунок цветка справа от фото психолога"/>  
    </div>
  );
}

export default MainTitle;