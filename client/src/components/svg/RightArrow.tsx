import React from 'react'

const RightArrow = () => {
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
            transform="matrix(-1 0 0 1 40 0)" 
            fill="white" 
            stroke="#71A5BC"
        />
        <path 
            d="M28 20C22.1421 20 13 20 13 20M28 20C26.0474 18.0474 23 15 23 15M28 20C26.0474 21.9526 23 25 23 25" 
            stroke="#71A5BC" 
            stroke-width="3" 
            stroke-linecap="round" 
            stroke-linejoin="round"
        />
    </svg>
  )
}

export default RightArrow