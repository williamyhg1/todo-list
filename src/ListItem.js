import React, { useState } from "react";
import "./ListItem.css"
const Listitem = ({ todoItem }) => {
  
  const [Item, setTodoItem] = useState(todoItem)

  const [doneItem, setDoneItem] = useState('')
  
const handleDoneItem = () =>{
  setDoneItem(Item)
  //toggle
  if (doneItem !== ''){
    setDoneItem('')
  }
}

  return (
    <div className="ListItem">
      <li className={(doneItem === '')?'':'done'}>{Item}
      <button onClick={handleDoneItem}>Done!</button>
      </li>
      
    </div>
  );
};

export default Listitem;
