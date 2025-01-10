import React, { useContext } from 'react'
import './education.css'
import { educationText } from '../../оther/texts';
import { DeviceContext } from '../../components/contexts/DeviceContext';
import SensSlider from '../../components/sensSlider/SensSlider';
import BgArrow from '../../components/svg/BgArrow';
import Slider from '../../components/slider/Slider';
import PhotoFrame from '../../components/photoFrame/PhotoFrame';

const Education = () => {
  const { isMobile, isTablet } = useContext(DeviceContext);

  if(isMobile) {
    return (
      <div className='education-main'>
        <div className='education-content center'>
          <h1 className='education-title'>ОБРАЗОВАНИЕ</h1>
          <div style={{display: 'flex',flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}>
            <SensSlider mainClass='education-sensSlider-main' containerClass='education-sensSlider-container' childClass='education-sensSlider-child'>
              <div className='education-slider-item'>
                <PhotoFrame customClassName='education-frame' color='white'>
                  <img className='education-photo' src="/images/diploma.webp" alt="Диплом из университета" draggable="false"/>
                </PhotoFrame>
                <p className='education-subtitle'>{educationText[0]}</p>
              </div>
              <div className='education-slider-item'>
                <PhotoFrame customClassName='education-frame' color='white'>
                  <img className='education-photo' src="/images/first-certificate.webp" alt="Сертификат о прохождении курса по психологии" draggable="false"/>
                </PhotoFrame>
                <p className='education-subtitle'>{educationText[1]}</p>
              </div>
              <div className='education-slider-item'>
                <PhotoFrame customClassName='education-frame' color='white'>
                  <img className='education-photo' src="/images/second-certificate.webp" alt="Сертификат о прохождении курса по психологии" draggable="false"/>
                </PhotoFrame>
                <p className='education-subtitle'>{educationText[2]}</p>
              </div>
              <div className='education-slider-item'>
                <PhotoFrame customClassName='education-frame' color='white'>
                  <img className='education-photo' src="/images/third-certificate.webp" alt="Сертификат о прохождении курса по психологии" draggable="false"/>
                </PhotoFrame>
                <p className='education-subtitle'>{educationText[3]}</p>
              </div>
            </SensSlider>
            <BgArrow className='education-bgArrow'/> 
          </div> 
        </div>
      </div>
    )
  }

  if(isTablet) {
    return (
      <div className='education-main'>
      <div className='education-content center'>
        <h1 className='education-title'>ОБРАЗОВАНИЕ</h1>
        <SensSlider mainClass='education-sensSlider-main' containerClass='education-sensSlider-container' childClass='education-sensSlider-child'>
          <div className='education-slider-item'>
            <PhotoFrame customClassName='education-frame' color='white'>
              <img className='education-photo' src="/images/diploma.webp" alt="Диплом из университета" draggable="false"/>
            </PhotoFrame>
           <p className='education-subtitle'>{educationText[0]}</p>
          </div>
         <div className='education-slider-item'>
            <PhotoFrame customClassName='education-frame' color='white'>
              <img className='education-photo' src="/images/first-certificate.webp" alt="Сертификат о прохождении курса по психологии" draggable="false"/>
            </PhotoFrame>
            <p className='education-subtitle'>{educationText[1]}</p>
          </div>
          <div className='education-slider-item'>
            <PhotoFrame customClassName='education-frame' color='white'>
              <img className='education-photo' src="/images/second-certificate.webp" alt="Сертификат о прохождении курса по психологии" draggable="false"/>
            </PhotoFrame>
            <p className='education-subtitle'>{educationText[2]}</p>
          </div>
          <div className='education-slider-item'>
              <PhotoFrame customClassName='education-frame' color='white'>
              <img className='education-photo' src="/images/third-certificate.webp" alt="Сертификат о прохождении курса по психологии" draggable="false"/>
            </PhotoFrame>
            <p className='education-subtitle'>{educationText[3]}</p>
          </div>
        </SensSlider>
      </div>
      <img className='education-image-first' src="/images/education-flower-1.webp" alt="Фоновый рисунок колоса слева от фотографий сертификатов"/>
      <img className='education-image-second' src="/images/education-flower-2.webp" alt="Фоновый рисунок колоса справа от фотографий сертификатов"/> 
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
              <img className='education-photo' src="/images/diploma.webp" alt="Диплом из университета" draggable="false"/>
            </PhotoFrame>
           <p className='education-subtitle'>{educationText[0]}</p>
          </div>
         <div className='education-slider-item'>
            <PhotoFrame customClassName='education-frame' color='white'>
              <img className='education-photo' src="/images/first-certificate.webp" alt="Сертификат о прохождении курса по психологии" draggable="false"/>
            </PhotoFrame>
            <p className='education-subtitle'>{educationText[1]}</p>
          </div>
          <div className='education-slider-item'>
            <PhotoFrame customClassName='education-frame' color='white'>
              <img className='education-photo' src="/images/second-certificate.webp" alt="Сертификат о прохождении курса по психологии" draggable="false"/>
            </PhotoFrame>
            <p className='education-subtitle'>{educationText[2]}</p>
          </div>
          <div className='education-slider-item'>
              <PhotoFrame customClassName='education-frame' color='white'>
              <img className='education-photo' src="/images/third-certificate.webp" alt="Сертификат о прохождении курса по психологии" draggable="false"/>
            </PhotoFrame>
            <p className='education-subtitle'>{educationText[3]}</p>
          </div>
        </Slider>
      </div>
      <img className='education-image-first' src="/images/education-flower-1.webp" alt="Фоновый рисунок колоса слева от фотографий сертификатов"/>
      <img className='education-image-second' src="/images/education-flower-2.webp" alt="Фоновый рисунок колоса справа от фотографий сертификатов"/> 
    </div>
  )
}

export default Education