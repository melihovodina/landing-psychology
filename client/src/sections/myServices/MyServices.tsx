import React from 'react'
import './myServices.css'
import ServicesList from '../../components/servicesList/ServicesList'

const MyServices = () => {
  return (
    <div className='myServices-main'>
      <div className='myServices-content center'>
        <h1 className='myServices-title'>МОИ УСЛУГИ</h1>
        <ServicesList/>
      </div>
      <img className='myServices-image-first' src="/images/service-flower.png" alt="first background flower on 'My services' page"/> 
      <img className='myServices-image-second' src="/images/service-flower.png" alt="second background flower on 'My services' page"/> 
    </div>
  )
}

export default MyServices