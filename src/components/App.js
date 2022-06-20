import "./App.css";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { useRoutes } from "react-router-dom";
import { Fragment } from "react";
import ContactDetail from "./ContactDetail";
import api from "../api/contacts";
import EditContact from "./EditContact";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //RetriveContacts
  const RetriveContacts = async () => {
    const respose = await api.get("/contacts");
    return respose.data;
  };

  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuidv4(),
      ...contact,
    };

    const respose = await api.post("/contacts", request);
    setContacts([...contacts, respose.data]);
  };

  const updateContactHandler = async (contact) => {
    const respose = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = respose.data;
    setContacts(
      contacts.map((contacts) => {
        return contacts.id === id ? { ...respose.data } : contacts;
      })
    );
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newCotactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newCotactList);
  };


  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
    const newCotactList = contacts.filter((contact) => {
      return  Object.values(contact)
        .join("")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
  })
  setSearchResults(newCotactList);
}
else {
  setSearchResults(contacts);
  }
} 


  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // if (retriveContacts) setContacts(retriveContacts);

    const getAllContacts = async () => {
      const allContacts = await RetriveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllContacts();
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const routes = [
    {
      path: "/add",
      element: <AddContact addContactHandler={addContactHandler} />,
    },
    {
      path: "/edit",
      element: <EditContact updateContactHandler={updateContactHandler} />,
    },
    {
      path: "/",
      element: (
        <ContactList
          contacts={searchTerm < 1 ? contacts : searchResults}
          getContactId={removeContactHandler}
          term={searchTerm}
          searchKeyword={searchHandler}
        />
      ),
    },
    { path: "/contact/:id", element: <ContactDetail /> },
  ];
  const element = useRoutes(routes);
  return (
    <Fragment>
      <br></br>
      <br></br>
      <br></br>
      <Header />
      {element}
    </Fragment>
  );
}

export default App;
