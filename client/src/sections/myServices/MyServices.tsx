import React from 'react'
import { servicesText } from '../../оther/texts'
import LazyComponent from '../../components/LazyComponent'
import ServiceUnit from '../../components/textItem/TextItem'
import './myServices.css'

const MyServices = () => {
  return (
    <div className='myServices-main'>
      <div className='myServices-content center'>
        <LazyComponent height='40px' width='5vw' threshold={1}>
          <h1 className='myServices-title'>МОИ УСЛУГИ</h1>
        </LazyComponent>
        <div className='servicesList-main'>
          {servicesText.map((item) => (
            <LazyComponent height='100px' width='100px' threshold={0.6}>
              <ServiceUnit item={item}/>
            </LazyComponent>
          ))}
        </div>
      </div>
        <img className='myServices-image-first' src="/images/service-flower.png" alt="first background flower on 'My services' page"/> 
        <img className='myServices-image-second' src="/images/service-flower.png" alt="second background flower on 'My services' page"/>
    </div>
  )
}

export default MyServices