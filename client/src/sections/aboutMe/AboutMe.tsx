import React, { FC, useContext } from 'react'
import { aboutMeText } from '../../оther/texts'
import { DeviceContext } from '../../components/contexts/DeviceContext'
import './aboutMe.css'

const AboutMe:FC = () => {
  const { isMobile } = useContext(DeviceContext)
  
  if(isMobile) {
    return (
      <div className='aboutMe-main'>
      <div className='aboutMe-content center'>
        <div className='aboutMe-top'>
          <img className='aboutMe-photo-first' src="/images/knees.webp" alt="Psychologist on about me page"/> 
          <div className='aboutMe-textblock'>
            <h1 className='aboutMe-title'>ОБО МНЕ</h1>
            <p className='aboutMe-text'>{aboutMeText[1]}</p>
          </div> 
        </div>
        <div className='aboutMe-bottom'>
          <div className='aboutMe-textblock'>
            <p className='aboutMe-text'>{aboutMeText[1]}</p>
          </div>
          <img className='aboutMe-photo-second' src="/images/hair.webp" alt="Psychologist on about me page"/>
        </div>
      </div>
    </div>
    )
  }

  return (
    <div className='aboutMe-main'>
      <div className='aboutMe-content center'>
        <div className='aboutMe-top'>
          <img className='aboutMe-photo-first' src="/images/knees.webp" alt="Psychologist on about me page"/> 
          <div className='aboutMe-textblock'>
            <h1 className='aboutMe-title'>ОБО МНЕ</h1>
            <p className='aboutMe-text'>{aboutMeText[1]}</p>
          </div>
        </div>
        <div className='aboutMe-bottom'>
          <div className='aboutMe-textblock'>
            <p className='aboutMe-text'>{aboutMeText[1]}</p>
          </div>
          <img className='aboutMe-photo-second' src="/images/hair.webp" alt="Psychologist on about me page"/> 
        </div>
      </div>
    </div>
  )
}

export default AboutMe