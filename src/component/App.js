import React from 'react';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

import './App.css';

function App() {
  const contacts = [
    {
      id:"1",
      "name":"Priya",
      "email":"p@email.com"
    },
    {
    id:"2",
    "name":"Bhaumik",
    "email":"b@email.co.in"
  }
];
  return (
    <div className="ui container">
        <Header/>
        <AddContact/>
        <ContactList contacts={contacts}></ContactList>
    </div>
  );
}

export default App;
