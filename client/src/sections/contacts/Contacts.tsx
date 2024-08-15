import React from 'react'
import './contacts.css'

const Contacts = () => {
  return (
    <div className='header-right'>
      <a 
        className='header-icon' 
        href="https://api.whatsapp.com/send/?phone=375257785705&text&type=phone_number&app_absent=0" 
        title="What's app"
        target='_blank'
      >
        <img className='header-icon-img' src="/icons/whats-app.png" alt="What's app profile"/>
      </a>
      <a 
        className='header-icon' 
        href="https://viber.click/375257785705" 
        title='Viber'
        target='_blank'
      >
        <img className='header-icon-img' src="/icons/viber.png" alt="Viber profile"/>
      </a>
      <a 
        className='header-icon' 
        href="https://www.instagram.com/psy_streltsova/" 
        title='Instagram'
        target='_blank'
      >
        <img className='header-icon-img' src="/icons/inst.png" alt="Instagram profile"/>
      </a>
      <a 
        className='header-icon' 
        href="https://t.me/psyminsk" 
        title='Telegram'
        target='_blank'
      >
        <img className='header-icon-img' src="/icons/tg.png" alt="Telegram profile"/>
      </a>
    </div>
  )
}

export default Contacts