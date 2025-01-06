import React from 'react'
import './principles.css'
import PhotoFrame from '../../components/photoFrame/PhotoFrame'
import { principlesText } from '../../оther/texts'

const Principles = () => {
  return (
    <div className='principles-main'>
      <div className='principles-content center'>
        <PhotoFrame customClassName='principles-frame' color='beige'>
          <img className='principles-photo' src="/images/principles.webp" alt="Психолог крупным планом"/> 
        </PhotoFrame>
        <div className='principles-text'>
          <h1 className='principles-title'>ПРИНЦИПЫ МОЕЙ РАБОТЫ</h1>
          <ul className='principles-list'>
            <li>{principlesText[0]}</li>
            <li>{principlesText[1]}</li>
            <li>{principlesText[2]}</li>
            <li>{principlesText[3]}</li>
            <li>{principlesText[4]}</li>
            <li>{principlesText[5]}</li>
            <li>{principlesText[6]}</li>
          </ul>
        </div>
      </div>
      <img className='principles-image' src="/images/principles-flower.webp" alt="Фоновый рисунок цветка справа от текста"/>
    </div>
  )
}

export default Principles