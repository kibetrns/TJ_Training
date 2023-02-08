import React from "react";
import { useState } from "react";

function TodoInput() {
  const [titleInputValue, setTitleInputValue] = useState("");
  const [todoDescriptionValue, setTodoDescriptionValue] = useState("");

  let titleInputChangeHandler = (e) => {
    setTitleInputValue({ titleInputValue: e.target.value });
  };

  let todoDescriptionHandler = (e) => {
    setTodoDescriptionValue({ todoDescriptionValue: e.target.value });
  };

  function generateRandomId() {
    return Math.random().toString(36).substring(2);
  }

  function createTodoEntry(title, description) {
    console.log(`TITLE = ${title.value},  DESCRIPTION = ${description}`);

    let generatedRandomId = generateRandomId();

    let storedTodos = JSON.parse(localStorage.getItem("todos")) || [];

    let newTodoToStorage = {
      id: generatedRandomId,
      title: title,
      description: description,
    };

    storedTodos.push(newTodoToStorage);

    localStorage.setItem("todos", JSON.stringify(storedTodos));

    return generatedRandomId;
  }

  let createTodoHandler = (e) => {
    e.preventDefault();

    console.log("CLICKED");

    //TODO("check why the below code is accesed as object properties instead of being string directly")

    createTodoEntry(
      titleInputValue.titleInputValue,
      todoDescriptionValue.todoDescriptionValue
    );
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
