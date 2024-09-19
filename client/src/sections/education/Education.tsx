import React, { useContext } from 'react'
import './education.css'
import { educationText } from '../../оther/texts';
import LeftArrow from '../../components/svg/LeftArrow';
import RightArrow from '../../components/svg/RightArrow';
import { DeviceContext } from '../../components/contexts/DeviceContext';
import Slider from '../../components/slider/Slider';

const Education = () => {
  const {isMobile} = useContext(DeviceContext);

  if(isMobile) {
    return (
      <div className='education-main'>
        <div className='education-content center'>
          <h1 className='education-title'>ОБРАЗОВАНИЕ</h1>
          <div className='education-subtitles'>
            <h2 className='education-subtitle'>{educationText[0]}</h2>
            <h2 className='education-subtitle'>{educationText[1]}</h2>
          </div>
            <Slider>
              <img className='education-photo' src="/images/education-test-1.jpg" alt="Psychologist on main page"/> 
              <img className='education-photo' src="/images/education-test-2.jpg" alt="Psychologist on main page"/>
            </Slider>
        </div>
        <img className='education-image-first' src="/images/education-flower-1.png" alt="first background flower on about me page"/>
        <img className='education-image-third' src="/images/education-flower-2.png" alt="second background flower on about me page"/> 
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
            <img className='education-photo' src="/images/main.JPG" alt="Psychologist on main page"/> 
            <img className='education-photo' src="/images/main.JPG" alt="Psychologist on main page"/> 
          </div>
      </div>
      <img className='education-image-first' src="/images/education-flower-1.png" alt="first background flower on about me page"/>
      <img className='education-image-second' src="/images/education-flower-3.png" alt="third background flower on about me page"/>  
      <img className='education-image-third' src="/images/education-flower-2.png" alt="second background flower on about me page"/> 
    </div>
  )
}

export default Education