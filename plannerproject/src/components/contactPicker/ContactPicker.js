import React from "react";

export const ContactPicker = (props) => {
  
  return (
    <select onChange={props.setContact}>
      <option>No Contact Selected</option>
      {props.contacts.map(obj => <option key={`${obj.name} option`}>{obj.name}</option>)}
    </select>
  );
};
