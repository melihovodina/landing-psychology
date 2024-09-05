import React, { FC, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

const LazyComponent: FC<{ children: ReactNode, height?: string, threshold: number}> = ({ children, height, threshold }) => {
  const { ref, inView } = useInView({
    threshold: threshold,
    triggerOnce: true
  });

  console.log(`Element is in view: ${inView}`);

  return (
    <div ref={ref} style={{ minHeight: height }}>
      {inView ? children : null}
    </div>
  )
}

export default LazyComponent