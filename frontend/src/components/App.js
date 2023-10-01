import React from 'react'
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'


function App() {

  const contactList= [
    {
      id: '1',
      name: 'sadia',
      email: 'sadiaturna99@gmail.com'
    },
    {
      id: '2',
      name: 'turna',
      email: 'bsse1216@iit.du.ac.bd'
    }
  ]


  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contactList}/>
    </div>
  );
}

export default App;
