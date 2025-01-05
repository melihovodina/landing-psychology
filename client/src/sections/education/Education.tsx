import React, { useContext } from 'react'
import './education.css'
import { educationText } from '../../оther/texts';
import { DeviceContext } from '../../components/contexts/DeviceContext';
import Slider from '../../components/slider/Slider';
import BgArrow from '../../components/svg/BgArrow';

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
              <Slider mainClass='education-slider-main' containerClass='education-slider-container' childClass='education-slider-child'>
                <img className='education-photo' src="/images/diploma.webp" alt="Diploma on education page" draggable="false"/> 
                <img className='education-photo' src="/images/first-certificate.webp" alt="Certificate on education page" draggable="false"/>
              </Slider>
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
          <div className='education-subtitles'>
            <h2 className='education-subtitle'>{educationText[0]}</h2>
            <h2 className='education-subtitle'>{educationText[1]}</h2>
          </div>
          <div className='education-photos'>
            <img className='education-photo' src="/images/diploma.webp" alt="Diploma on education page" draggable="false"/> 
            <img className='education-photo' src="/images/first-certificate.webp" alt="Certificate on education page" draggable="false"/>
          </div>
      </div>
      <img className='education-image-first' src="/images/education-flower-1.webp" alt="Фоновый рисунок колоса слева от фотографий сертификатов"/>
      <img className='education-image-third' src="/images/education-flower-2.webp" alt="Фоновый рисунок колоса справа от фотографий сертификатов"/> 
    </div>
  )
}

export default Education