import React, { FC, ReactNode } from 'react'
import './photoFrame.css'

type FrameColor = 'beige' | 'white';

interface PhotoFrameProps{
  children: ReactNode;
  customClassName?: string
  color: FrameColor
}

const PhotoFrame: FC<PhotoFrameProps> = ({children, customClassName, color}) => {
  const className: string = `${customClassName} frame ${color}`

  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default PhotoFrame