import  React, { useState } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';

export const ContactsPage = () => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [inputName, setInputName] = useState(null);
  const [inputPhone, setInputPhone] = useState(null);
  const [inputEmail, setInputEmail] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  }  

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
