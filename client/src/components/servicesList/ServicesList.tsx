import React, { FC } from 'react'
import ServiceUnit from '../serviceUnit/ServiceUnit'
import { servicesText } from '../../оther/texts'
import './servicesList.css'

const ServicesList: FC = () => {
  return (
    <div className='servicesList-main'>
      {servicesText.map((item) => (
        <ServiceUnit item={item} />
      ))}
    </div>
  )
}

export default ServicesList