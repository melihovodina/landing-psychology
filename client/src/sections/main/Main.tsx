import React from 'react'
import Header from '../../components/header/Header'
import MainTitle from '../../components/mainTitle/MainTitle'
import './main.css'

const Main = () => {
  return (
    <div className='main'>
      <div className='main-center center'>
        <Header/>
        <MainTitle/>
      </div>
    </div>
  )
}

export default Main