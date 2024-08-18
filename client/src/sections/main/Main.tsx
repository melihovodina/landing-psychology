import React from 'react'
import './main.css'
import Header from '../../components/header/Header'
import MainTitle from '../../components/mainTitle/MainTitle'

const Main = () => {
  return (
    <div className='main'>
      <Header/>
      <div className='main-center center'>
        <MainTitle/>
        <img className='main-photo' src="/images/main.JPG" alt="Psychologist on main page"/> 
      </div>
    </div>
  )
}

export default Main