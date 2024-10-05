import React, { useContext } from 'react'
import './education.css'
import { educationText } from '../../оther/texts';
import { DeviceContext } from '../../components/contexts/DeviceContext';
import Slider from '../../components/slider/Slider';
import LazyComponent from '../../components/LazyComponent';
import BgArrow from '../../components/svg/BgArrow';

const Education = () => {
  const { isMobile } = useContext(DeviceContext);

  if(isMobile) {
    return (
      <div className='education-main'>
        <div className='education-content center'>
          <LazyComponent height='15vh' width='5vw' threshold={0.9}>
            <h1 className='education-title'>ОБРАЗОВАНИЕ</h1>
            <div className='education-subtitles'>
              <h2 className='education-subtitle'>{educationText[0]}</h2>
              <h2 className='education-subtitle'>{educationText[1]}</h2>
            </div>
          </LazyComponent>
          <div style={{display: 'flex',flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}>
            <LazyComponent height='10vh' width='5vw' threshold={0.9}>
              <Slider mainClass='education-slider-main' containerClass='education-slider-container' childClass='education-slider-child'>
                <img className='education-photo' src="/images/education-test-1.jpg" alt="Psychologist on main page"/> 
                <img className='education-photo' src="/images/education-test-2.jpg" alt="Psychologist on main page"/>
              </Slider>
            </LazyComponent>
            <BgArrow className='education-bgArrow'/> 
          </div> 
        </div>
        <img className='education-image-first' src="/images/education-flower-1.png" alt="first background flower on about me page"/>
        <img className='education-image-third' src="/images/education-flower-2.png" alt="second background flower on about me page"/> 
      </div>
    )
  }

  return (
    <div className='education-main'>
      <div className='education-content center'>
        <LazyComponent height='10vh' width='5vw' threshold={0.9}>
          <h1 className='education-title'>ОБРАЗОВАНИЕ</h1>
          <div className='education-subtitles'>
            <h2 className='education-subtitle'>{educationText[0]}</h2>
            <h2 className='education-subtitle'>{educationText[1]}</h2>
          </div>
        </LazyComponent>
        <LazyComponent height='20vh' width='5vw' threshold={0.9}>
          <div className='education-photos'>
            <img className='education-photo' src="/images/education-test-1.jpg" alt="Psychologist on main page"/> 
            <img className='education-photo' src="/images/education-test-2.jpg" alt="Psychologist on main page"/>
          </div>
         </LazyComponent>
      </div>
      <img className='education-image-first' src="/images/education-flower-1.png" alt="first background flower on about me page"/>
      <img className='education-image-second' src="/images/education-flower-3.png" alt="third background flower on about me page"/>  
      <img className='education-image-third' src="/images/education-flower-2.png" alt="second background flower on about me page"/> 
    </div>
  )
}

export default Education