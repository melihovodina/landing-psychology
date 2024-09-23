import React from 'react'
import './reviews.css'
import Slider from '../../components/slider/Slider'
import { reviewsText } from '../../оther/texts'
import LazyComponent from '../../components/LazyComponent'
import ServiceUnit from '../../components/textItem/TextItem'

const Reviews = () => {
  return (
    <div className='reviews-main'>
      <div className='reviews-content center'>
        <h1 className='reviews-title'>ОТЗЫВЫ</h1>
        <Slider mainClass='reviews-slider-main' visibleItems={3}>
          {reviewsText.map((item) => (
            <LazyComponent height='100px' width='100px' threshold={0.6}>
              <ServiceUnit item={item}/>
            </LazyComponent>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Reviews