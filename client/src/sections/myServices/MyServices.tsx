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
    </div>
  )
}

export default MyServices