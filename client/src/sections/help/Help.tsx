import React from 'react'
import './help.css'
import { helpText } from '../../оther/texts'

const Help = () => {
  return (
    <div className='help-main'>
      <div className='help-content center'>
        <h1 className='help-title'>С ЧЕМ Я МОГУ ПОМОЧЬ</h1>
        <div className='help-text'>
          <ul className='help-list'>
            <li>{helpText[0]}</li>
            <li>{helpText[1]}</li>
            <li>{helpText[2]}</li>
            <li>{helpText[3]}</li>
            <li>{helpText[4]}</li>
            <li>{helpText[5]}</li>
          </ul>
          <ul className='help-list'>
            <li>{helpText[6]}</li>
            <li>{helpText[7]}</li>
            <li>{helpText[8]}</li>
            <li>{helpText[9]}</li>
            <li>{helpText[10]}</li>
            <li>{helpText[11]}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Help