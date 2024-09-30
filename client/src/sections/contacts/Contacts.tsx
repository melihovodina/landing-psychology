import React from 'react'
import './contacts.css'
import { contactsText } from '../../оther/texts'
import Footer from '../../components/footer/Footer'

const Contacts = () => {
  return (
    <div className='contacts-main'>
      <div className='contacts-content center'>
        <div className='contacts-text'>
          <h1 className='contacts-title'>ЗАПИСЬ НА КОНСУЛЬТАЦИЮ</h1>
          <p className='contacts-subtitle'>{contactsText.subtitle[0]}</p>
          <div className='contacts-profiles'>
            <a 
              className='contacts-link' 
              href="https://www.instagram.com/psy_streltsova/" 
              title='Instagram'
              target='_blank'
            >
              <img className='contacts-icon' src="/icons/inst.png" alt="Instagram profile"/>
              <h2 className='contacts-adress'>{contactsText.profiles[1]}</h2>
            </a>
            <a 
              className='contacts-link' 
              href="https://t.me/psyminsk" 
              title='Telegram'
              target='_blank'
            >
              <img className='contacts-icon' src="/icons/tg.png" alt="Telegram profile"/>
              <h2 className='contacts-adress'>{contactsText.profiles[0]}</h2>
            </a>
            <a 
              className='contacts-link' 
              href="https://api.whatsapp.com/send/?phone=375257785705&text&type=phone_number&app_absent=0" 
              title="What's app"
              target='_blank'
            >
              <img className='contacts-icon' src="/icons/whats-app.png" alt="What's app profile"/>
              <h2 className='contacts-adress'>{contactsText.profiles[2]}</h2>
            </a>
            <a 
              className='contacts-link' 
              href="https://viber.click/375257785705" 
              title='Viber'
              target='_blank'
            >
              <img className='contacts-icon' src="/icons/viber.png" alt="Viber profile"/>
              <h2 className='contacts-adress'>{contactsText.profiles[3]}</h2>
            </a>
          </div>
        </div>
        <img className='contacts-photo' src="/images/main.JPG" alt="Psychologist on main page"/>
      </div>
    </div>
  )
}

export default Contacts