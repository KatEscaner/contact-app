import React, { Fragment } from "react";
import ContactCard from "./ContactCard";
import { useRef } from "react";

const ContactList = (props) => {
  console.log(props);
  const inputElment = useRef(null);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  const getSeachTerm = () => {
    props.searchKeyword(inputElment.current.value);
  };

  return (
    <Fragment>
      <h2>Contact List</h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputElment}
            type="text"
            placeholder="Search..."
            className="prompt"
            value={props.term}
            onChange={getSeachTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">{renderContactList}</div>
    </Fragment>
  );
};

export default ContactList;
