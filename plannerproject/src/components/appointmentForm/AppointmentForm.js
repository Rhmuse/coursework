import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit} >
      <label> Title:
        <input 
          type='text'
          name='input'
          id='titleInput'
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label> Date:
        <input 
          type='date'
          name='date'
          id='dateInput'
          value={date}
          min={getTodayString}
          onChange={(e) => setDate(e.target.value)}  />
      </label>
      <label> Time: 
        <input
        type='time'
        name='time'
        id='timeInput'
        value={time}
        onChange={(e) => setTime(e.target.value)} />
      </label>
      <ContactPicker key='contactPicker' contacts={contacts} setContact={setContact} />   
      <input type='submit' value='submit' />
    </form>
  );
};

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

console.log(getTodayString())
