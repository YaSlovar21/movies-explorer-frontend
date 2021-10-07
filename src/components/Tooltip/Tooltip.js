import React from "react";

import './Tooltip.css'

function Tooltip(props) {
  return (
    <div className={`tooltip ${props.isOpen ? "tooltip_opened" : ""}`} onClick={props.onClose}>
        {props.success ? (
            <p className="tooltip__title tooltip__title_success">{props.successText}</p>
        ) : (
            <p className="tooltip__title tooltip__title_error">{props.errorText}</p>
        )}
        
    </div>
  );
}

export default Tooltip;