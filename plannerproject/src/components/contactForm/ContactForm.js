import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label> Name: 
        <input 
          type='text' 
          name='name'
          id='name' 
          value={name} 
          onChange={(e) => setName(e.target.value)} /> 
      </label>
      <label> Phone: 
        <input 
          type='text' 
          name='phone' 
          id='phone'
          pattern='^[2-9]\d{2}\d{3}\d{4}$' 
          value={phone}
          onChange={(e) => setPhone(e.target.value)} /> 
      </label>
      <label> Email: 
        <input 
          type='text' 
          name='email'
          id='email'
          pattern='^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$' 
          value={email}
          onChange={(e) => setEmail(e.target.value)} /> 
      </label> 
      <input type='submit' value='Submit' />
    </form>
  );
};
