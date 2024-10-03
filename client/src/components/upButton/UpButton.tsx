import React, { FC, useContext } from 'react'
import './upButton.css'
import { DeviceContext } from '../contexts/DeviceContext';

const UpButton: FC<{visible: boolean}> = ({visible}) => {
  const { isMobile } = useContext(DeviceContext)

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ block: 'start' });
    }
  };

  if(!isMobile) {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="40" 
        height="40" 
        viewBox="0 0 44 44" 
        fill="none"
        className='upButton'
        onClick={() => scrollToSection('main')}
        style={{ bottom: visible ? '15px' : '-100px'}}
        onMouseEnter={(e) => {
          const circle = e.currentTarget.querySelector('circle');
          const path = e.currentTarget.querySelector('path');
          if (circle) {
            circle.setAttribute('fill', '#D2BEB5');
          }
          if (path) {
            path.setAttribute('fill', 'white');
          }
          e.currentTarget.setAttribute("fill", "#71A5BC");
        }}
        onMouseLeave={(e) => {
          const circle = e.currentTarget.querySelector('circle');
          const path = e.currentTarget.querySelector('path');
          if (circle) {
            circle.setAttribute('fill', 'white');
          }
          if (path) {
            path.setAttribute('fill', '#D2BEB5');
          }
          e.currentTarget.setAttribute("fill", "white");
        }}
      >
        <circle 
          cx="22" 
          cy="22" 
          r="21" 
          fill="white" 
          stroke="#D2BEB5"
          strokeWidth="2"
          style={{transition: "0.1s ease-in-out"}}
        />
        <path 
          d="M21 31C21 31.5523 21.4477 32 22 32C22.5523 32 23 31.5523 23 31H21ZM22.7071 11.7929C22.3166 11.4024 21.6834 11.4024 21.2929 
          11.7929L14.9289 18.1569C14.5384 18.5474 14.5384 19.1805 14.9289 19.5711C15.3195 19.9616 15.9526 19.9616 16.3431 19.5711L22 
          13.9142L27.6569 19.5711C28.0474 19.9616 28.6805 19.9616 29.0711 19.5711C29.4616 19.1805 29.4616 18.5474 29.0711 18.1569L22.7071 
          11.7929ZM23 31V12.5H21V31H23Z" 
          fill="#D2BEB5"
          style={{transition: "0.1s ease-in-out"}}
        />
      </svg>
    )
  }

  return null
}

export default UpButton