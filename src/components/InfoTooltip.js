import React from "react";
import success from "../images/success.svg";
import smtWrong from "../images/smtWrong.svg";

function InfoTooltip(props) {
  return (
    <div className={`infopopup infopopup_darked ${props.isOpen ? "infopopup_opened" : ""}`}>
      <div className="infopopup__container infopopup__container_type_info">
        <button
          className="infopopup__button-close link-beauty"
          type="button"
          onClick={props.onClose}
        />
        {props.success ? (
          <>
            <img src={success} className="infopopup__msg-img" />
            <p className="infopopup__title infopopup__title_type_auth">{props.successText}</p>
          </>
        ) : (
          <>
            <img src={smtWrong} className="infopopup__msg-img" />
            <p className="infopopup__title infopopup__title_type_auth">{props.errorText}</p>
          </>
        )}
        
      </div>
    </div>
  );
}

export default InfoTooltip;