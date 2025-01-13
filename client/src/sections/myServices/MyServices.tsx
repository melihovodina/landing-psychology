import React from 'react'
import './myServices.css'
import PhotoFrame from '../../components/photoFrame/PhotoFrame'
import BurgerList from '../../components/BurgerList'

const MyServices = () => {
  return (
    <div className='myServices-main'>
      <div className='myServices-content center'>
        <div className='myServices-text'>
          <h1 className='myServices-title'>МОИ УСЛУГИ</h1>
          <div className='myServices-list'>
            <BurgerList/>
          </div>
        </div>
        <PhotoFrame customClassName='myServices-frame' color='beige'>
          <img className='myServices-photo' src="/images/white.webp" alt="Психолог крупным планом на белом фоне" /> 
        </PhotoFrame>
      </div>
        <img className='myServices-image-first' src="/images/service-flower.webp" alt="Фоновый рисунок цветка слева от текста"/> 
        <img className='myServices-image-second' src="/images/service-flower.webp" alt="Фоновый рисунок цветка справа от фотографии психолога"/>
    </div>
  )
}

export default MyServices