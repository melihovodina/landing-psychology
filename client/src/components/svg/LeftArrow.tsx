import React from 'react'

const LeftArrow = () => {
  return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="50" 
        height="50" 
        viewBox="0 0 40 40" 
        fill="none"
    >
        <circle 
            cx="20" 
            cy="20" 
            r="19.5" 
            fill="white" 
            stroke="#71A5BC"
        />
        <path 
            d="M12 20C17.8579 20 27 20 27 20M12 20C13.9526 18.0474 17 15 17 15M12 20C13.9526 21.9526 17 25 17 25" 
            stroke="#71A5BC" 
            stroke-width="3" 
            stroke-linecap="round" 
            stroke-linejoin="round"
        />
    </svg>
  )
}

export default LeftArrow