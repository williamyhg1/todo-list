import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import "./MyList.css";

const Mylist = ({ theList }) => {
  const [todoItems, setTodoItems] = useState(() => {
    const savedItems = localStorage.getItem("todoItems");
    const initialValue = JSON.parse(savedItems);
    return initialValue || theList;
  });
  const [input, setInput] = useState("");
  const todoItemsArray = todoItems.map((todoItem, index) => (
    <ListItem key={index} todoItem={todoItem} />
  ));

  const clearList = () => {
    setTodoItems([]);
  };

  const addItem = (event) => {
    event.preventDefault();
    if (input === "") return;
    setTodoItems([...todoItems, input]);
    setInput("");
  };

  const updateInput = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems]);

  return (
    <div className="MyList">
      <h1>Things I should stop procrastinating:</h1>
      <ul className="list">{todoItemsArray}</ul>
      
      <form>
        <input
          type="text"
          placeholder="Type an item here."
          onChange={updateInput}
          value={input}
        />
        <button onClick={addItem}>Add it!</button>
      </form>
      <button onClick={clearList}>Clear the list!</button>

    </div>
  );
};

export default Mylist;
