import React, { useContext } from 'react'
import './education.css'
import { educationText } from '../../оther/texts';
import { DeviceContext } from '../../components/contexts/DeviceContext';
import SensSlider from '../../components/sensSlider/SensSlider';
import BgArrow from '../../components/svg/BgArrow';
import Slider from '../../components/slider/Slider';
import PhotoFrame from '../../components/photoFrame/PhotoFrame';

const Education = () => {
  const { isMobile } = useContext(DeviceContext);

  if(isMobile) {
    return (
      <div className='education-main'>
        <div className='education-content center'>
            <h1 className='education-title'>ОБРАЗОВАНИЕ</h1>
            <div className='education-subtitles'>
              <h2 className='education-subtitle'>{educationText[0]}</h2>
              <h2 className='education-subtitle'>{educationText[1]}</h2>
            </div>
          <div style={{display: 'flex',flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}>
              <SensSlider mainClass='education-SensSlider-main' containerClass='education-SensSlider-container' childClass='education-SensSlider-child'>
                <img className='education-photo' src="/images/diploma.webp" alt="Diploma on education page" draggable="false"/> 
                <img className='education-photo' src="/images/first-certificate.webp" alt="Certificate on education page" draggable="false"/>
              </SensSlider>
            <BgArrow className='education-bgArrow'/> 
          </div> 
        </div>
        <img className='education-image-first' src="/images/education-flower-1.webp" alt="Фоновый рисунок колоса слева от фотографий сертификатов"/>
        <img className='education-image-third' src="/images/education-flower-2.webp" alt="Фоновый рисунок колоса справа от фотографий сертификатов"/> 
      </div>
    )
  }

  return (
    <div className='education-main'>
      <div className='education-content center'>
        <h1 className='education-title'>ОБРАЗОВАНИЕ</h1>
        <Slider classNames={{content: 'education-slider-content', item: 'education-slider-item', arrow: 'education-slider-arrow'}}>
        <div className='education-slider-item'>
          <PhotoFrame customClassName='education-frame' color='white'>
            <img className='education-photo' src="/images/diploma.webp" alt="" draggable="false"/>
          </PhotoFrame>
          <p className='education-subtitle'>КУРС СЕМЕЙНАЯ ТЕРАПИЯ: ИНТЕГРИРОВАННЫЙ ГЕШТАЛЬТ-ПОДХОД</p>
        </div>
        <div className='education-slider-item'>
          <PhotoFrame customClassName='education-frame' color='white'>
            <img className='education-photo' src="/images/first-certificate.webp" alt="" draggable="false"/>
          </PhotoFrame>
          <p className='education-subtitle'>КУРС СЕМЕЙНАЯ ТЕРАПИЯ: ИНТЕГРИРОВАННЫЙ ГЕШТАЛЬТ-ПОДХОД</p>
        </div>
        <div className='education-slider-item'>
          <PhotoFrame customClassName='education-frame' color='white'>
            <img className='education-photo' src="/images/second-certificate.webp" alt="" draggable="false"/>
          </PhotoFrame>
          <p className='education-subtitle'>КУРС СЕМЕЙНАЯ ТЕРАПИЯ: ИНТЕГРИРОВАННЫЙ ГЕШТАЛЬТ-ПОДХОД</p>
        </div>
        <div className='education-slider-item'>
          <PhotoFrame customClassName='education-frame' color='white'>
            <img className='education-photo' src="/images/third-certificate.webp" alt="" draggable="false"/>
          </PhotoFrame>
          <p className='education-subtitle'>КУРС СЕМЕЙНАЯ ТЕРАПИЯ: ИНТЕГРИРОВАННЫЙ ГЕШТАЛЬТ-ПОДХОД</p>
        </div>
        </Slider>
      </div>
      <img className='education-image-first' src="/images/education-flower-1.webp" alt="Фоновый рисунок колоса слева от фотографий сертификатов"/>
      <img className='education-image-second' src="/images/education-flower-2.webp" alt="Фоновый рисунок колоса справа от фотографий сертификатов"/> 
    </div>
  )
}

export default Education