import React, { FC } from 'react';
import './textItem.css'

interface TextItemProps {
  item: { index: number; title: string; text: string[] };
}

const TextItem: FC<TextItemProps> = ({ item }) => {

  return (
    <div className='textItem-rear-block'>
        <div className='textItem-block'>
          <h2 className='textItem-title'>{item.title}</h2>
          <p className='textItem-text'>{item.text[0]}</p>
          <p className='textItem-text'>{item.text[1]}</p>
        </div>
    </div>
  );
};

export default TextItem;