import { Tile } from "../tile/Tile";
import React from "react";

export const TileList = (props) => {

  const makeList = (arr) => {
    return arr.map((obj) => <li key={Object.values(obj)[0]}>
          <Tile contact={obj} />
        </li>)
  }

  return (
    <div>
      <ul>
        {makeList(props.arr, 0)}
      </ul> 
    </div>
  );
};
