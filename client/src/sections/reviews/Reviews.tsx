import React, { useContext } from 'react'
import './reviews.css'
import SensSlider from '../../components/sensSlider/SensSlider'
import { reviewsText } from '../../оther/texts'
import TextItem from '../../components/textItem/TextItem'
import { DeviceContext } from '../../components/contexts/DeviceContext'
import BgArrow from '../../components/svg/BgArrow'
import Slider from '../../components/slider/Slider'

const Reviews = () => {
  const { isMobile, isTablet } = useContext(DeviceContext)

  if(isMobile) {
    return (
      <div className='reviews-main'>
        <div className='reviews-content center'>
          <h1 className='reviews-title'>ОТЗЫВЫ</h1>
          <SensSlider mainClass='reviews-slider-main' containerClass='reviews-slider-container' childClass='reviews-slider-child' tabletStep={2}>
            {reviewsText.map((item) => (
              <TextItem item={item} key={item.index} blockClass='reviews-review'/>
            ))}
          </SensSlider>
          <BgArrow className='reviews-bgArrow'/>
        </div>  
      </div>
    )
  }

  if(isTablet) {
    return (
      <div className='reviews-main'>
        <div className='reviews-content center'>
          <h1 className='reviews-title'>ОТЗЫВЫ</h1>
          <SensSlider mainClass='reviews-slider-main' containerClass='reviews-slider-container' childClass='reviews-slider-child' tabletStep={2}>
            {reviewsText.map((item) => (
              <TextItem item={item} key={item.index} blockClass='reviews-review'/>
            ))}
          </SensSlider>
          <BgArrow  className='reviews-bgArrow'/>
        </div>
        <img className='reviews-image-first' src="/images/service-flower.webp" alt="Фоновый рисунок цветка слева от текста"/> 
        <img className='reviews-image-second' src="/images/service-flower.webp" alt="Фоновый рисунок цветка справа от фотографии психолога"/>  
      </div>
    )
  }

  return (
    <div className='reviews-main'>
      <div className='reviews-content center'>
        <h1 className='reviews-title'>ОТЗЫВЫ</h1>
        <Slider classNames={{content: 'reviews-slider-content', arrow: 'reviews-slider-arrow', item: 'reviews-slider-item'}} visibleItems={3}>
          {reviewsText.map((item) => (
            <TextItem item={item} key={item.index} blockClass='reviews-review'/>
          ))}
        </Slider>
      </div>
      <img className='reviews-image-first' src="/images/service-flower.webp" alt="Фоновый рисунок цветка слева от текста"/> 
      <img className='reviews-image-second' src="/images/service-flower.webp" alt="Фоновый рисунок цветка справа от фотографии психолога"/>
    </div>
  )
}

export default Reviews