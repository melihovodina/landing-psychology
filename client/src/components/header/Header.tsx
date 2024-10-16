import React, { FC, useContext, useState } from 'react';
import SeparateFlower from '../svg/SeparateFlower';
import { DeviceContext } from '../contexts/DeviceContext';
import './header.css';
import Cross from '../svg/Cross';

const Header: FC<{visible: boolean}> = ({visible}) => {
  const { isMobile } = useContext(DeviceContext);
  const [isOpen, setIsOpen] = useState(false);

  const openHeader = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      if (isMobile) {
        setIsOpen(false);
      }
    }
  };

  if (isMobile) {
    return (
      <>
        <div className={`overlay ${isOpen ? 'overlay-open' : 'overlay-close'}`} />
        <header className="header">
          <div className={`header-rear-block ${isOpen ? 'header-open' : 'header-close'}`}>
            <div className="header-dropdown-menu">
              <div className='header-dropdown-menu-row'>
                <h1 className="header-title" onClick={() => scrollToSection('main')}>ОЛЬГА СТРЕЛЬЦОВА</h1>
                <div className='header-close-button' onClick={openHeader}>
                  <Cross/>
                </div>
              </div>
              <div className="header-option">
                <SeparateFlower />
                <span className="header-button" onClick={() => scrollToSection('services')}>
                  Мои услуги
                </span>
              </div>
              <div className="header-option">
                <SeparateFlower />
                <span className="header-button" onClick={() => scrollToSection('about')}>
                  Обо мне
                </span>
              </div>
              <div className="header-option">
                <SeparateFlower />
                <span className="header-button" onClick={() => scrollToSection('education')}>
                  Образование
                </span>
              </div>
              <div className="header-option">
                <SeparateFlower />
                <span className="header-button" onClick={() => scrollToSection('reviews')}>
                  Отзывы
                </span>
              </div>
              <div className="header-option">
                <SeparateFlower />
                <span className="header-button" onClick={() => scrollToSection('contacts')}>
                  Запись на консультацию
                </span>
              </div>
            </div>
          </div>
          <button className="header-main-button" onClick={openHeader} style={{ top: visible ? '0px' : '-100px' }}>
            <div className="header-vector" />
            <div className="header-vector" />
            <div className="header-vector" />
          </button>
        </header>
      </>
    );
  }

  return (
    <header className="header center">
      <span className="header-button" onClick={() => scrollToSection('services')}>
        Мои услуги
      </span>
      <SeparateFlower />
      <span className="header-button" onClick={() => scrollToSection('about')}>
        Обо мне
      </span>
      <SeparateFlower />
      <span className="header-button" onClick={() => scrollToSection('education')}>
        Образование
      </span>
      <SeparateFlower />
      <span className="header-button" onClick={() => scrollToSection('reviews')}>
        Отзывы
      </span>
    </header>
  );
};

export default Header;