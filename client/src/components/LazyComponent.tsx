import React, { FC, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface LazyComponentProps {
  children: ReactNode, 
  height?: string, 
  width?: string, 
  threshold?: number
}

const LazyComponent: FC<LazyComponentProps> = ({ children, height, width = '5vw' , threshold }) => {
  const { ref, inView } = useInView({
    threshold: threshold || 0,
    triggerOnce: true
  });

  return (
    <div ref={ref} style={{ minHeight: height, minWidth: width }}>
      {inView ? children : null}
    </div>
  )
}

export default LazyComponent