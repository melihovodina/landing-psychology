import React, { FC } from 'react'
import ServiceUnit from '../serviceUnit/ServiceUnit'
import { servicesText } from '../../оther/texts'
import './servicesList.css'
import LazyComponent from '../LazyComponent'

const ServicesList: FC = () => {
  return (
    <div className='servicesList-main'>
      {servicesText.map((item) => (
        <LazyComponent height='40vh' threshold={0.6}>
          <ServiceUnit item={item}/>
        </LazyComponent>
      ))}
    </div>
  )
}

export default ServicesList