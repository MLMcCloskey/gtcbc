import React from "react";
import App from "../App"

const List = ({ groceries = []}) => (
  <ul className="list-group">
    {groceries.map(item => <li key={item.id}>
    
      {item.name}</li>)
      }
  </ul>
);

export default List;
