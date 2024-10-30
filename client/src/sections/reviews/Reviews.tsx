import React, { useContext } from 'react'
import './reviews.css'
import Slider from '../../components/slider/Slider'
import { reviewsText } from '../../оther/texts'
import TextItem from '../../components/textItem/TextItem'
import { DeviceContext } from '../../components/contexts/DeviceContext'
import BgArrow from '../../components/svg/BgArrow'

const Reviews = () => {
  const { isMobile, isTablet } = useContext(DeviceContext)

  return (
    <div className='reviews-main'>
      <div className='reviews-content center'>
        <h1 className='reviews-title'>ОТЗЫВЫ</h1>
        <Slider mainClass='reviews-slider-main' containerClass='reviews-slider-container' childClass='reviews-slider-child' visibleItems={3}>
          {reviewsText.map((item) => (
              <TextItem item={item} key={item.index} blockClass='reviews-review'/>
          ))}
        </Slider>
        { isMobile || isTablet ? <BgArrow  className='reviews-bgArrow'/> : null }
      </div>
    </div>
  )
}

export default Reviews