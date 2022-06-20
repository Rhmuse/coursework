import React from "react";

export const Tile = (props) => {

  const makeTileHelper = (obj) => {
    let tileArr = []
    for (let j = 1; j < Object.values(obj).length; j++) {
      tileArr.push(<p className="tile" key={Object.values(obj)[j]}>{Object.values(obj)[j]}</p>)
    }
    return tileArr.map(ele => ele);
  }

  // props.contacts.map((contact) => <p className="tile" key={contact.name}>{contact.name}</p>)

  const makeTile = (obj) => {
      return (
        <div> 
          <p className="title-title">{Object.values(obj)[0]}</p>
          {makeTileHelper(obj)}
        </div>
      )
  }
  

  return (
    <div className="tile-container">
      {makeTile(props.contact)}
    </div>
  );
};
