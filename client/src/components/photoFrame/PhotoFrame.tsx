import React, { FC, ReactNode } from 'react'
import './photoFrame.css'

interface PhotoFrameProps{
    
}

const PhotoFrame: FC<{children: ReactNode}> = ({children}) => {
  return (
    <div className='frame'>
        {children}
    </div>
  )
}

export default PhotoFrame