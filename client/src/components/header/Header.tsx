import React, { FC } from 'react'
import SeparateFlower from '../svg/SeparateFlower'
import './header.css'

const Header: FC = () => {
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
        <div className='header-right'>
          <a 
            className='header-icon' 
            href="https://api.whatsapp.com/send/?phone=375257785705&text&type=phone_number&app_absent=0" 
            title="What's app"
            target='_blank'
          >
            <img className='header-icon-img' src="/icons/whats-app.png" alt="What's app profile" width="35" height="35"/>
          </a>
          <a 
            className='header-icon' 
            href="https://viber.click/375257785705" 
            title='Viber'
            target='_blank'
          >
            <img className='header-icon-img' src="/icons/viber.png" alt="Viber profile" width="35" height="35"/>
          </a>
          <a 
            className='header-icon' 
            href="https://www.instagram.com/psy_streltsova/" 
            title='Instagram'
            target='_blank'
          >
            <img className='header-icon-img' src="/icons/inst.png" alt="Instagram profile" width="35" height="35"/>
          </a>
          <a 
            className='header-icon' 
            href="https://t.me/psyminsk" 
            title='Telegram'
            target='_blank'
          >
            <img className='header-icon-img' src="/icons/tg.png" alt="Telegram profile" width="35" height="35"/>
          </a>
        </div>
    </header>
  )
}

export default Header