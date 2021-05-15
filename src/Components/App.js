import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {uuid} from "uuidv4";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
function App() {
  const LOCAL_STORAGE_KEY = "Contacts";
  const [Contacts, setContacts] = useState([]);
  const addContactHandler = (Contact) => {
    console.log(Contact);
    setContacts([...Contacts, {id: uuid(), ...Contact}]);
  };
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Contacts));
  }, [Contacts]);
  const removeHandler = (id) => {
    const newContactList = Contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            // component={() => (
            //   <ContactList Contacts={Contacts} getContactId={removeHandler} />
            // )}
            render={(props) => (
              <ContactList
                {...props}
                Contacts={Contacts}
                getContactId={removeHandler}
              />
            )}
          />
          <Route
            path="/add"
            // component={() => (
            //   <AddContact addContactHandler={addContactHandler} />
            // )}
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />
          <Route path="/Detail/:id" component={ContactDetail} />
        </Switch>
        {/* <AddContact addContactHandler={addContactHandler} /> 
         <ContactList Contacts={Contacts} getContactId={removeHandler} /> */}
      </Router>
    </div>
  );
}

export default App;
