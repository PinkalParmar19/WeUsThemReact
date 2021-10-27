import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
// import ContactCard from "./ContactCard";
import "./App.css";
import validator from "validator";

function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts";

  // Email validation.
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  // Add Fn.
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]); //To use previous states..
  };

  // // Update Fn.
  // const UpdateContactHandler = (contact) => {
  //   const newContactList = contacts.filter((contact) => {
  //     return contact !== contact;
  //   });
  //   setContacts(newContactList);
  // };

  // Delete Fn.
  const deleteContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  // to getting data back from the storage..
  useEffect(() => {
    const getContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (getContacts) setContacts(getContacts);
  }, []);

  // using hook to render the compenent when value changes.
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact
        addContactHandler={addContactHandler}
        validateEmail={validateEmail}
      />
      <ContactList contacts={contacts} getContactId={deleteContactHandler} />
    </div>
  );
}

export default App;
