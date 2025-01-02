import React, { useState } from "react";
import BurgerItem from "./burgerItem/BurgerItem";
import { servicesText } from "../оther/texts";

const BurgerList: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    if (openIndex !== index) {
      setOpenIndex(index);
    }
  };

  return (
    <div>
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