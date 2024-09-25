import React from 'react';

interface ArrowProps {
  onClick: () => void;
  className: string;
}

const Arrow: React.FC<ArrowProps> = ({ onClick, className }) => {
  return (
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <circle 
        cx="20" 
        cy="20" 
        r="19.5" 
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
  );
};

export default Arrow;