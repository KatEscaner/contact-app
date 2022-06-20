import React, { Fragment } from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id)
    }

    const renderContactList = props.contacts.map((contact) => {
        return(
            <ContactCard contact={contact} clickHandler = {deleteContactHandler} key={contact.id}/>
        )
    })
    return(
        <Fragment>
            <h2>Contact List</h2>
            <div className="ui celled list">
                {renderContactList}
            </div>
        </Fragment>
    )
}

export default ContactList;