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
    </header>
  )
}

export default Header