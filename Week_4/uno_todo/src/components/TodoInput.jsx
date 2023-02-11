import React from "react";
import { useState, useEffect } from "react";

function TodoInput() {
  const [titleInputValue, setTitleInputValue] = useState("");
  const [todoDescriptionValue, setTodoDescriptionValue] = useState("");
  const [initialTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const persistedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(persistedTodos);
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    // let todosFromLocalStorage = JSON.parse(localStorage.getItem("todos")) || [];
    // todosFromLocalStorage.push(newTodo);
    // setTodos(todosFromLocalStorage);
    // localStorage.setItem("todos", JSON.stringify(todosFromLocalStorage));
  };

  let titleInputChangeHandler = (e) => {
    setTitleInputValue(e.target.value);
  };

  let todoDescriptionHandler = (e) => {
    setTodoDescriptionValue(e.target.value);
  };

  function generateRandomId() {
    return Math.random().toString(36).substring(2);
  }

  function createTodoEntry(title, description) {
    console.log(`TITLE = ${title},  DESCRIPTION = ${description}`);

    let generatedRandomId = generateRandomId();

    // let storedTodos = JSON.parse(localStorage.getItem("todos")) || [];

    let newTodoToStorage = {
      id: generatedRandomId,
      title: title,
      description: description,
    };

    // storedTodos.push(newTodoToStorage);

    // localStorage.setItem("todos", JSON.stringify(storedTodos));
    console.log(newTodoToStorage);

    addTodo(newTodoToStorage);

    return generatedRandomId;
  }

  let createTodoHandler = (e) => {
    console.log("CLICKED");

    // e.preventDefault();

    if (!titleInputValue || !todoDescriptionValue) {
      return;
    }
    createTodoEntry(titleInputValue, todoDescriptionValue);

    setTitleInputValue("");
    setTodoDescriptionValue("");
  };

  return (
    <form
      className="todo-title-text-and-add-todo-component-container"
      onSubmit={(e) => createTodoHandler(e)}
    >
      <div className="todo-tile-and-text-container">
        <div className="todo-title-content">
          <input
            type="text"
            className="todo-title"
            id="todo-title"
            name="todo-title"
            placeholder="Title..."
            onChange={(e) => titleInputChangeHandler(e)}
          />
        </div>

        <div class="todo-description-content">
          <input
            type="text"
            className="todo-description"
            id="todo-description"
            name="todo-description"
            placeholder="Description..."
            onChange={(e) => todoDescriptionHandler(e)}
          />
        </div>
      </div>

      <div className="add-todo-component" id="create-todo-button">
        <button>
          <i class="material-icons">add</i>
        </button>
      </div>
    </form>
  );
}

export default TodoInput;
