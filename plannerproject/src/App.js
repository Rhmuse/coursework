import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([{name:'John Doe', phone: '234-555-1234', email: 'johndoe@email.com'}, {name:'Joe Dirt', phone: '234-555-4321', email: 'joedirt@email.com'} ]);
  const [appointments, setAppointments] = useState([{title: 'Jump rope', contact: 'John Doe', date: '03/21/23', time: '1:00pm'}, {title: 'Set things on fire', contact: 'Joe Dirt', date: '08/15/2024', time: '1:30am'}]); 

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addNewContact = (contact) => {
    setContacts( 
      [...contacts, contact]
    )
  }

  const addNewAppointment = (appointment) => {
    setAppointments( 
      [...appointments, appointment]
    )
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addNewContact={addNewContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={appointments} addNewAppointment={addNewAppointment} contacts={contacts} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
