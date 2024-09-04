import React, { useContext } from 'react'
import './main.css'
import Header from '../../components/header/Header'
import MainTitle from '../../components/mainTitle/MainTitle'
import { DeviceContext } from '../../components/contexts/DeviceContext'

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