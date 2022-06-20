import './App.css';
import { v4 as uuidv4 } from 'uuid'
import React, { useEffect, useState } from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { useRoutes } from 'react-router-dom';
import { Fragment } from 'react';
import ContactDetail from './ContactDetail';


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
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);


const routes = [
  { path: '/add', element: <AddContact addContactHandler={addContactHandler}/> },
  { path: '/', element: <ContactList contacts={contacts} getContactId={removeContactHandler}/> },
  { path: '/contact/:id', element: <ContactDetail/> }
]
  const element = useRoutes(routes);
  return( 
    <Fragment>
      <br></br>
      <br></br>
      <br></br>
      <Header/>
    {element}
    </Fragment>
  )
  }


export default App;
