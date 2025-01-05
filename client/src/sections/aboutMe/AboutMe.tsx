import React, { FC, useContext } from 'react'
import { aboutMeText } from '../../оther/texts'
import { DeviceContext } from '../../components/contexts/DeviceContext'
import './aboutMe.css'
import PhotoFrame from '../../components/photoFrame/PhotoFrame'

const AboutMe:FC = () => {
  const { isMobile, isTablet } = useContext(DeviceContext)
  
  if(isMobile) {
    return (
      <div className='aboutMe-main'>
        <div className='aboutMe-content center'>
          <h1 className='aboutMe-title'>ОБО МНЕ</h1>
          <p className='aboutMe-text'>{aboutMeText[0]}</p>
          <PhotoFrame customClassName='aboutMe-frame' color='white'>
            <img className='aboutMe-photo' src="/images/hair.webp" alt="Психолог сидит на белом фоне крупным планом"/> 
          </PhotoFrame>
          <div className='aboutMe-textblock'>
            <p className='aboutMe-text'>{aboutMeText[1]}</p>
            <p className='aboutMe-text'>{aboutMeText[2]}</p>
            <p className='aboutMe-text'>{aboutMeText[3]}</p>
          </div>
        </div>
      </div>
    )
  }

  if(isTablet) {
    return (
      <div className='aboutMe-main'>
        <div className='aboutMe-content center'>
          <h1 className='aboutMe-title'>ОБО МНЕ</h1>
          <div className='aboutMe-tabletRow'>
            <PhotoFrame customClassName='aboutMe-frame' color='white'>
              <img className='aboutMe-photo' src="/images/hair.webp" alt="Психолог сидит и прикасается к своим волосам на белом фоне крупным планом"/> 
            </PhotoFrame>
            <div className='aboutMe-textblock'>
              <p className='aboutMe-text'>{aboutMeText[0]}</p>
              <p className='aboutMe-text'>{aboutMeText[1]}</p>
              <p className='aboutMe-text'>{aboutMeText[2]}</p>
              <p className='aboutMe-text'>{aboutMeText[3]}</p>
            </div>
          </div>
          <img className='aboutMe-image' src='/images/aboutMe-flower.webp' alt='Большой фоновый рисунок цветка'/>
        </div>
      </div>
    )
  }


  return (
    <div className='aboutMe-main'>
      <div className='aboutMe-content center'>
        <PhotoFrame customClassName='aboutMe-frame' color='white'>
          <img className='aboutMe-photo' src="/images/hair.webp" alt="Психолог сидит и прикасается к своим волосам на белом фоне крупным планом"/> 
        </PhotoFrame>
        <div className='aboutMe-textblock'>
          <h1 className='aboutMe-title'>ОБО МНЕ</h1>
          <p className='aboutMe-text'>{aboutMeText[0]}</p>
          <p className='aboutMe-text'>{aboutMeText[1]}</p>
          <p className='aboutMe-text'>{aboutMeText[2]}</p>
          <p className='aboutMe-text'>{aboutMeText[3]}</p>
        </div>
        <img className='aboutMe-image' src='/images/aboutMe-flower.webp' alt='Большой фоновый рисунок цветка'/>
      </div>
    </div>
  )
}

export default AboutMe