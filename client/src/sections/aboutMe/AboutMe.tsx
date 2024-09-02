import React from 'react'
import { aboutMeText } from '../../оther/texts'
import './aboutMe.css'

const AboutMe = () => {
  return (
    <div className='aboutMe-main'>
      <div className='aboutMe-content center'>
        <div className='aboutMe-top'>
          <div className='photo-block'/>
          <div className='aboutMe-textblock'>
            <h1 className='aboutMe-title'>ОБО МНЕ</h1>
            <p className='aboutMe-text'>{aboutMeText[0]}</p>
          </div>
        </div>
        <div className='aboutMe-bottom'>
          <div className='aboutMe-textblock'>
            <p className='aboutMe-text'>{aboutMeText[1]}</p>
          </div>
          <div className='photo-block'/>
        </div>
      </div>
    </div>
  )
}

export default AboutMe