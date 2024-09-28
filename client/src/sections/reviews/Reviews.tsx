import React from 'react'
import './reviews.css'
import Slider from '../../components/slider/Slider'
import { reviewsText } from '../../оther/texts'
import TextItem from '../../components/textItem/TextItem'
import LazyComponent from '../../components/LazyComponent'

const Reviews = () => {
  return (
    <div className='reviews-main'>
      <div className='reviews-content center'>
        <LazyComponent height='40px' width='5vw' threshold={1}>
        <h1 className='reviews-title'>ОТЗЫВЫ</h1>
        </LazyComponent>
        <LazyComponent height='10vh' threshold={1}>
        <Slider mainClass='reviews-slider-main' containerClass='reviews-slider-container' childClass='reviews-slider-child' visibleItems={3}>
          {reviewsText.map((item) => (
              <TextItem item={item}/>
          ))}
        </Slider>
        </LazyComponent>
      </div>
    </div>
  )
}

export default Reviews