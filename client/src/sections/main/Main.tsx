import React, { useState, useEffect, useContext } from 'react'
import Header from '../../components/header/Header'
import MainTitle from '../../components/mainTitle/MainTitle'
import './main.css'
import { DeviceContext } from '../../components/contexts/DeviceContext'
import UpButton from '../../components/upButton/UpButton'

const Main = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { isMobile } = useContext(DeviceContext)
  const [visible, setVisible] = useState(isMobile ? true : false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > scrollPosition) {
        if(isMobile) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      } else {
        if(isMobile) {
          setVisible(true);
        } else if (currentScrollPosition < 640) {
          setVisible(false);
        }
      }
      setScrollPosition(currentScrollPosition);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition, isMobile]);

  return (
    <div className='main'>
      <div className='main-center center'>
        <Header visible={visible}/>
        <MainTitle/>
        <UpButton visible={visible}/>
      </div>
    </div>
  )
}

export default Main