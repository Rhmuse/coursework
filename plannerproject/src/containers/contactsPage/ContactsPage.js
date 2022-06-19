import  React, { useEffect, useState } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false); 

  

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDuplicate) {
      props.addNewContact({
        name: name,
        phone: phone,
        email: email
      });
    } else {
      throw new Error('You already have a contact with this name.')
    }
  }  

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    if (props.contacts.some(o => o.name == name)) {
      const nameInput = document.getElementById('name');
      setIsDuplicate(true);
      nameInput.setCustomValidity('You already have a contact with this name.')
    }  
    return () => {
      const nameInput = document.getElementById('name');
      setIsDuplicate(false);
      nameInput.setCustomValidity('');
    }
  }, [props.contacts, name, email, phone])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          handleSubmit={handleSubmit} 
          setName={setName} 
          setEmail={setEmail} 
          setPhone={setPhone} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};

