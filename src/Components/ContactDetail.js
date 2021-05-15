import React from "react";
import user from "../images/user.png";
import {Link} from "react-router-dom";
const ContactDetail = (props) => {
  //console.log(props);
  const {name, email} = props.location.state.contact;
  // contact: props.Contact
  return (
    <div className="main" style={{marginTop: 10 + "px"}}>
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div class="description">{email}</div>
        </div>
      </div>
      <Link to="/">
        <div className="center-div">
          <button className="ui button blue">Back to Contact</button>
        </div>
      </Link>
    </div>
    // <div class="ui card">
    //   <div class="image">
    //     <img src={user} />
    //   </div>
    //   <div class="content">
    //     <a class="header">Kristy</a>
    //     <div class="description">
    //       Kristy is an art director living in New York.
    //     </div>
    //   </div>
    // </div>
  );
};
export default ContactDetail;
