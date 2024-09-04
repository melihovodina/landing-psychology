import React, { FC, useContext, useState } from 'react'
import SeparateFlower from '../svg/SeparateFlower'
import { DeviceContext } from '../contexts/DeviceContext'
import './header.css'

const Header: FC = () => {
  const { isMobile } = useContext(DeviceContext);
  const [isOpen, setIsOpen] = useState(false);

  const openHeader = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  if (isMobile) {
    return (
      <>
        <div className={`overlay ${isOpen ? 'overlay-open' : 'overlay-close'}`}/>
        <header className="header center">
          <div className={`header-dropdown-menu ${ isOpen ? 'header-open' : 'header-close'}`}>
          </div>
          <button className="header-main-button" onClick={() => openHeader()}>
            <div className="header-vector" />
            <div className="header-vector" />
            <div className="header-vector" />
          </button>
        </header>
      </>
    );
  }
  
  return (
    <header className='header center'>
        <div className='header-left'>
          <span className='header-button'>Мои услуги</span>
          <SeparateFlower/>
          <span className='header-button'>Обо мне</span>
          <SeparateFlower/>
          <span className='header-button'>Образование</span>
          <SeparateFlower/>
          <span className='header-button'>Отзывы</span>
        </div>
    </header>
  )
}

export default Header