import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  let [item, setItem] = useState("");
  let [todo, setTodo] = useState([{ task: "sleep", id: uuidv4() }]);

  let handleItem = (event) => {
    setItem(event.target.value);
  };
  let handleTodo = () => {
    item !== ""
      ? (setTodo((prevTodo) => [...prevTodo, { task: item, id: uuidv4() }]),
        setItem(""))
      : null;
  };
  let deleteTodo = (id) => {
    setTodo(() => {
      return todo.filter((prev) => prev.id != id);
    });
  };
  let upperCaseAll = () => {
    setTodo((prev) => {
      return prev.map((ele) => {
        return { ...ele, task: ele.task.toUpperCase() };
      });
    });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter new task"
        value={item}
        onChange={handleItem}
      />
      <button onClick={handleTodo}>Add Item</button>
      <div>
        <h1>Tasks</h1>
        {todo.map((item) => (
          <li key={item.id}>
            {item.task}
            <button onClick={() => deleteTodo(item.id)}>delete</button>
            <br />
          </li>
        ))}
        <br />
        <button onClick={upperCaseAll}>UpperCase All</button>
      </div>
    </div>
  );
};

export default Todo;
