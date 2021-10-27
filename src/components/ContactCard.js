import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, firstName, lastName, email, phoneNumber } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{firstName}</div>
        <div className="header">{lastName}</div>
        <div>{email}</div>
        <div>{phoneNumber}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "8px" }}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
