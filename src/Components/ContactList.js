import React from "react";
import ContactCard from "./ContactCard";
import {Link} from "react-router-dom";
const ContactList = (props) => {
  //   console.log(props);
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  // const Contacts = [
  //   {
  //     id: "1",
  //     name: "meenal",
  //     email: "meenal@gmail.com",
  //   },
  // ];
  const contactlist = props.Contacts.map((Contact) => {
    return (
      <ContactCard
        Contact={Contact}
        clickHandler={deleteContactHandler}
        key={Contact.id}
      ></ContactCard>
    );
  });
  return (
    <div>
      <h2 style={{marginTop: 5 + "px"}}>
        Contact List
        <Link to="/add">
          <button
            className="ui inverted  teal button "
            style={{float: "right"}}
          >
            Add Contact
          </button>
        </Link>
      </h2>
      <div classNameName="ui celled list">{contactlist}</div>
    </div>
  );
};
export default ContactList;
