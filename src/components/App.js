import './App.css';
import { v4 as uuidv4 } from 'uuid'
import React, { useEffect, useState } from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';



function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contact}]);
  }

  const removeContactHandler = (id) => {
    const newCotactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newCotactList);
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (retriveContacts) setContacts(retriveContacts);
    console.log(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
