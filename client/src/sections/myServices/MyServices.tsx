import React from 'react'
import { servicesText } from '../../оther/texts'
import TextItem from '../../components/textItem/TextItem'
import './myServices.css'

const MyServices = () => {
  return (
    <div className='myServices-main'>
      <div className='myServices-content center'>
          <h1 className='myServices-title'>МОИ УСЛУГИ</h1>
        <div className='servicesList-main'>
          {servicesText.map((item) => (
              <TextItem item={item} key={item.index}/>
          ))}
        </div>
      </div>
        <img className='myServices-image-first' src="/images/service-flower.webp" alt="First background flower on 'My services' page"/> 
        <img className='myServices-image-second' src="/images/service-flower.webp" alt="Second background flower on 'My services' page"/>
    </div>
  )
}

export default MyServices