import React from 'react'
import './myServices.css'
import ServicesList from '../../components/servicesList/ServicesList'
import LazyComponent from '../../components/LazyComponent'

const MyServices = () => {
  return (
    <div className='myServices-main'>
      <div className='myServices-content center'>
        <LazyComponent height='5vh' width='5vw' threshold={1}>
          <h1 className='myServices-title'>МОИ УСЛУГИ</h1>
        </LazyComponent>
        <ServicesList/>
      </div>
        <img className='myServices-image-first' src="/images/service-flower.png" alt="first background flower on 'My services' page"/> 
        <img className='myServices-image-second' src="/images/service-flower.png" alt="second background flower on 'My services' page"/>
    </div>
  )
}

export default MyServices