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
          <div className='aboutMe-photo-block-first'>
            <img className='aboutMe-photo-first' src="/images/hair.webp" alt="Psychologist on about me page"/> 
          </div>
        <div className='aboutMe-textblock'>
            <h1 className='aboutMe-title'>ОБО МНЕ</h1>
            <p className='aboutMe-text'>{aboutMeText[0]}</p>
            <p className='aboutMe-text'>{aboutMeText[1]}</p>
            <p className='aboutMe-text'>{aboutMeText[2]}</p>
            <ul className='aboutMe-text'>
              <li className='aboutMe-text'>{aboutMeText[3]}</li>
              <li className='aboutMe-text'>{aboutMeText[4]}</li>
              <li className='aboutMe-text'>{aboutMeText[5]}</li>
              <li className='aboutMe-text'>{aboutMeText[6]}</li>
              <li className='aboutMe-text'>{aboutMeText[7]}</li>
              <li className='aboutMe-text'>{aboutMeText[8]}</li>
              <li className='aboutMe-text'>{aboutMeText[9]}</li>
            </ul>
          </div> 
        </div>
        <div className='aboutMe-bottom'>
          <div className='aboutMe-textblock'>
            <p className='aboutMe-text'>{aboutMeText[10]}</p>
            <p className='aboutMe-text'>{aboutMeText[11]}</p>
            <p className='aboutMe-text'>{aboutMeText[12]}</p>
          </div>
          <div className='aboutMe-photo-block-first'>
            <img className='aboutMe-photo-first' src="/images/knees.webp" alt="Psychologist on about me page"/> 
          </div>
        </div>
      </div>
    </div>
    )
  }

  return (
    <div className='aboutMe-main'>
      <div className='aboutMe-content center'>
        <div className='aboutMe-top'>
          <div className='aboutMe-photo-block-first'>
            <img className='aboutMe-photo-first' src="/images/hair.webp" alt="Psychologist on about me page"/> 
          </div> 
          <div className='aboutMe-textblock'>
            <h1 className='aboutMe-title'>ОБО МНЕ</h1>
            <p className='aboutMe-text'>{aboutMeText[0]}</p>
            <p className='aboutMe-text'>{aboutMeText[1]}</p>
          </div>
        </div>
        <div className='aboutMe-center'>
          <div className='aboutMe-textblock'>
            <p className='aboutMe-text'>{aboutMeText[2]}</p>
            <ul className='aboutMe-text'>
              <li className='aboutMe-text'>{aboutMeText[3]}</li>
              <li className='aboutMe-text'>{aboutMeText[4]}</li>
              <li className='aboutMe-text'>{aboutMeText[5]}</li>
              <li className='aboutMe-text'>{aboutMeText[6]}</li>
              <li className='aboutMe-text'>{aboutMeText[7]}</li>
              <li className='aboutMe-text'>{aboutMeText[8]}</li>
              <li className='aboutMe-text'>{aboutMeText[9]}</li>
            </ul>
          </div>
          <div className='aboutMe-photo-block-second'>
            <img className='aboutMe-photo-second' src="/images/knees.webp" alt="Psychologist on about me page"/>
          </div>
        </div>
        <div className='aboutMe-bottom'>
          <div className='aboutMe-textblock'>  
            <p className='aboutMe-text'>{aboutMeText[10]}</p>
            <p className='aboutMe-text'>{aboutMeText[11]}</p>
            <p className='aboutMe-text'>{aboutMeText[12]}</p>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default AboutMe