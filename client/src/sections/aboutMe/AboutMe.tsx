import React, { FC, useContext } from 'react'
import { aboutMeText } from '../../оther/texts'
import LazyComponent from '../../components/LazyComponent'
import { DeviceContext } from '../../components/contexts/DeviceContext'
import './aboutMe.css'

const AboutMe:FC = () => {
  const { isMobile } = useContext(DeviceContext)
  
  if(isMobile) {
    return (
      <div className='aboutMe-main'>
      <div className='aboutMe-content center'>
        <div className='aboutMe-top'>
          <LazyComponent height='60vh' threshold={0.4}>
            <img className='aboutMe-photo-first' src="/images/main.JPG" alt="Psychologist on main page"/> 
          </LazyComponent>  
          <LazyComponent height='40vh' threshold={0.6}>
            <div className='aboutMe-textblock'>
              <h1 className='aboutMe-title'>ОБО МНЕ</h1>
              <p className='aboutMe-text'>{aboutMeText[1]}</p>
            </div>
          </LazyComponent>  
        </div>
        <div className='aboutMe-bottom'>
          <LazyComponent height='40vh' threshold={0.4}>
            <div className='aboutMe-textblock'>
              <p className='aboutMe-text'>{aboutMeText[1]}</p>
            </div>
          </LazyComponent>
          <LazyComponent height='60vh' threshold={0.6}>  
            <img className='aboutMe-photo-second' src="/images/main.JPG" alt="Psychologist on main page"/>
          </LazyComponent> 
        </div>
      </div>
    </div>
    )
  }

  return (
    <div className='aboutMe-main'>
      <div className='aboutMe-content center'>
        <LazyComponent height='60vh' width='10vw' threshold={0.6}>
        <div className='aboutMe-top'>
          <img className='aboutMe-photo-first' src="/images/main.JPG" alt="Psychologist on main page"/> 
          <div className='aboutMe-textblock'>
            <h1 className='aboutMe-title'>ОБО МНЕ</h1>
            <p className='aboutMe-text'>{aboutMeText[1]}</p>
          </div>
        </div>
        </LazyComponent>
        <LazyComponent height='60vh' width='10vw' threshold={0.6}>
        <div className='aboutMe-bottom'>
          <div className='aboutMe-textblock'>
            <p className='aboutMe-text'>{aboutMeText[1]}</p>
          </div>
          <img className='aboutMe-photo-second' src="/images/main.JPG" alt="Psychologist on main page"/> 
        </div>
        </LazyComponent>
      </div>
    </div>
  )
}

export default AboutMe