import React from "react";

export const ContactPicker = (props) => {
  
  return (
    <select onChange={(e) => props.setContact(e.target.value)}>
      <option>No Contact Selected</option>
      {props.contacts.map(obj => <option key={`${obj.name} option`} value={obj.name} >{Object.values(obj)[0]}</option>)}
    </select>
  );
};
