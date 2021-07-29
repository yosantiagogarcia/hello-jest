import React, { useState } from "react";
import TodoItem from "./components/TodoItem";
import "./styles/App.css";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function addItem(event) {
    setItems((prevData) => [...prevData, input]);
    setInput("");
  }

  function removeItem(id) {
    setItems((prevData) => prevData.filter((_, index) => index !== id));
  }

  return (
    <div className="todolist">
      <div className="heading">
        <h1 className="title">YTP To-Do</h1>
      </div>
      <input
        type="text"
        value={input}
        aria-label="todo-input"
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button onClick={addItem} aria-label="add-button">
        +
      </button>

      <div className="items">
        <ul>
          {items.map((item, index) => (
            <TodoItem
              key={index}
              id={index}
              data-testid={`item-${index}`}
              item={item}
              onCheck={removeItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
