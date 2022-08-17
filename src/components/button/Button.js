import React from 'react';
import './button.style.css';

export const Button = ({ btnName, onClick }) => {
    return (
      <div
            tabIndex={0}
            role={"button"}
            className={"scr-btn scr-button-action"}
            onClick={onClick}
        >{btnName}</div>  
    )
    
}