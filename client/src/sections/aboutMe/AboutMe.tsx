import React, { FC } from 'react'
import { aboutMeText } from '../../оther/texts'
import './aboutMe.css'
import LazyComponent from '../../components/LazyComponent'

const AboutMe:FC = () => {
  return (
    <div className='aboutMe-main'>
      <div className='aboutMe-content center'>
        <LazyComponent height='60vh' threshold={0.6}>
        <div className='aboutMe-top'>
          <img className='aboutMe-photo-first' src="/images/main.JPG" alt="Psychologist on main page"/> 
          <div className='aboutMe-textblock'>
            <h1 className='aboutMe-title'>ОБО МНЕ</h1>
            <p className='aboutMe-text'>{aboutMeText[1]}</p>
          </div>
        </div>
        </LazyComponent>
        <LazyComponent height='60vh' threshold={0.6}>
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