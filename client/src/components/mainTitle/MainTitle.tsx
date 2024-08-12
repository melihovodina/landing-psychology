import React, { FC } from 'react'
import './mainTitle.css'

const MainTitle: FC = () => {
  return (
    <div className='mainTitle-main center'>
        <h2 className='mainTitle-subtitle'>ПСИХОЛОГ</h2>
        <h1 className='mainTitle-title'>ОЛЬГА СТРЕЛЬЦОВА</h1>
        <button className='mainTitle-button'>ЗАПИСЬ НА КОНСУЛЬТАЦИЮ</button>
    </div>
  )
}

export default MainTitle