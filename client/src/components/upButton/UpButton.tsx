import React from 'react'
import './upButton.css'

const UpButton = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ block: 'start' });
    }
  };

  return (
    <div className='upButton-main' onClick={() => scrollToSection('main')}>
      
    </div>
  )
}

export default UpButton