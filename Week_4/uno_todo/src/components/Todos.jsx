import React, { useState } from "react";
import SingleTodo from "./SingleTodo";
import NoTask from "./NoTask";

function Todos() {
  let [todosInLocalStorage, setTodosInLocalStorage] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  let isLocalStorageEmptyOrKeyDoesentExist = todosInLocalStorage.length === 0;

  console.log(isLocalStorageEmptyOrKeyDoesentExist);

  let todoToList = todosInLocalStorage.map((todo) => (
    <SingleTodo title={todo.title} description={todo.description} />
  ));

  function addTodo(newTodo) {
    // Add the new todo to the existing todos
    let updatedTodos = [...todosInLocalStorage, newTodo];
    // Update the local storage
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    // Update the state with the updated todos
    setTodosInLocalStorage(updatedTodos);
  }

  return (
    <div
      className="all-todos-entries-container"
      id="all-todos-entries-container"
    >
      {isLocalStorageEmptyOrKeyDoesentExist ? (
        <NoTask />
      ) : (
        <ul>{todoToList}</ul>
      )}
    </div>
  );
}

export default Todos;
