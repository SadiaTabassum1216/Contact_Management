import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact}></ContactCard>
    );
  });

  return <div className="ui celled list">
    <br></br>
    <br></br>
    <h2>Contact List</h2>
    <br></br>
    {renderContactList}
  </div>;
};

export default ContactList;