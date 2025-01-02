import React from "react";
import "./burgerItem.css";
import Arrow from "../svg/Arrow";

interface BurgerItemProps {
  item: { index: number; title: string; text: string[], isOpen?: boolean };
  isOpen: boolean;
  onToggle: () => void;
}

const BurgerItem: React.FC<BurgerItemProps> = ({ item, isOpen, onToggle }) => {
  return (
    <div className="burgerItem">
      <div className="burgerItem-header" onClick={onToggle}>
        <span className="burgerItem-title">{item.title}</span>
        <span className={`burgerItem-icon ${isOpen ? "rotate" : ""}`}>
          <Arrow />
        </span>
      </div>
      <div className={`burgerItem-content ${isOpen ? "open" : "close"}`}>
        <p style={{ marginBottom: 20 }}>{item.text[0]}</p>
        <p>{item.text[1]}</p>
      </div>
    </div>
  );
};

export default BurgerItem;