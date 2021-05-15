import React from "react";
import user from "../images/user.png";
import {Link} from "react-router-dom";
const ContactCard = (props) => {
  const {id, name, email} = props.Contact;
  return (
    <div className="ui middle aligned divided list">
      <div className="item">
        <img className="ui avatar image" src={user} alt="user" />
        <div className="right floated content">
          <button
            class="ui inverted red button"
            onClick={() => props.clickHandler(id)}
          >
            Delete
          </button>
        </div>
        <Link to={{pathname: `/Detail/${id}`, state: {contact: props.Contact}}}>
          <div className="content">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
    </div>
  );
};
export default ContactCard;
