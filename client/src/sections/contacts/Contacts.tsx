import React from 'react'
import './contacts.css'
import { contactsText } from '../../оther/texts'
import LazyComponent from '../../components/LazyComponent';

const Contacts = () => {
  return (
    <div className='contacts-main'>
      <div className='center'>
          <h1 className='contacts-title'>ЗАПИСЬ НА КОНСУЛЬТАЦИЮ</h1>
          <div className='contacts-content'>
            <div className='contacts-text'>
              <p className='contacts-subtitle'>{contactsText.subtitle[0]}</p>
              <LazyComponent height='20vh' threshold={0.8}>
              <div className='contacts-profiles'>
                <a 
                  className='contacts-link' 
                  href="https://www.instagram.com/psy_streltsova/" 
                  title='Instagram'
                  target='_blank'
                  rel="noreferrer"
                >
                  <img className='contacts-icon' src="/icons/inst.png" alt="Instagram profile" style={{animationDuration: '0.8s'}}/>
                  <h2 className='contacts-adress' style={{animationDuration: '0.8s'}}>{contactsText.profiles[1]}</h2>
                </a>
                <a 
                  className='contacts-link' 
                  href="https://t.me/psyminsk" 
                  title='Telegram'
                  target='_blank'
                  rel="noreferrer"
                >
                  <img className='contacts-icon' src="/icons/tg.png" alt="Telegram profile" style={{animationDuration: '1s'}}/>
                  <h2 className='contacts-adress' style={{animationDuration: '1s'}}>{contactsText.profiles[0]}</h2>
                </a>
                <a 
                  className='contacts-link' 
                  href="https://api.whatsapp.com/send/?phone=375257785705&text&type=phone_number&app_absent=0" 
                  title="What's app"
                  target='_blank'
                  rel="noreferrer"
                >
                  <img className='contacts-icon' src="/icons/whats-app.png" alt="What's app profile" style={{animationDuration: '1.2s'}}/>
                  <h2 className='contacts-adress' style={{animationDuration: '1.2s'}}>{contactsText.profiles[2]}</h2>
                </a>
                <a 
                  className='contacts-link' 
                  href="https://viber.click/375257785705" 
                  title='Viber'
                  target='_blank'
                  rel="noreferrer"
                >
                  <img className='contacts-icon' src="/icons/viber.png" alt="Viber profile" style={{animationDuration: '1.4s'}}/>
                  <h2 className='contacts-adress' style={{animationDuration: '1.4s'}}>{contactsText.profiles[3]}</h2>
                </a>
              </div>
            </LazyComponent>
          </div>  
          <LazyComponent height='35vh' threshold={0.7}>
            <img className='contacts-photo' src="/images/main.JPG" alt="Psychologist on main page"/>
          </LazyComponent>
        </div>
      </div>
    </div>
  )
}

export default Contacts