import React, { useState, useRef, useEffect } from "react";
import BurgerItem from "./burgerItem/BurgerItem";
import { servicesText } from "../оther/texts";

const BurgerList: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const divRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number>(0);

  useEffect(() => {
    if (divRef.current) {
      const currentHeight = divRef.current.offsetHeight;
      if (currentHeight > maxHeight) {
        setMaxHeight(currentHeight);
      }
    }
  }, [openIndex, maxHeight]);

  useEffect(() => {
    if (divRef.current) {
      const currentHeight = divRef.current.offsetHeight;
      setMaxHeight(currentHeight);
    }
  }, []);

  const handleToggle = (index: number) => {
    if (openIndex !== index) {
      setOpenIndex(index);
    }
  };

  return (
    <div ref={divRef} style={{ minHeight: `${maxHeight}px` }}>
      {servicesText.map((item, index) => (
        <BurgerItem
          key={item.index}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default BurgerList;