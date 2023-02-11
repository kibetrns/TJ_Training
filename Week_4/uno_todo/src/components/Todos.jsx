import React, { useState } from "react";
import SingleTodo from "./SingleTodo";
import NoTask from "./NoTask";

function Todos() {
  const TODOS_KEY = "todos";

  let [todosInLocalStorage, setTodosInLocalStorage] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  let isLocalStorageEmptyOrKeyDoesentExist = todosInLocalStorage.length === 0;

  console.log(isLocalStorageEmptyOrKeyDoesentExist);

  function addTodo(newTodo) {
    let updatedTodos = [...todosInLocalStorage, newTodo];
    localStorage.setItem(TODOS_KEY, JSON.stringify(updatedTodos));
    setTodosInLocalStorage(updatedTodos);
  }

  function deleteTodo(todoId) {
    let updatedTodos = todosInLocalStorage.filter((todo) => todo.id !== todoId);
    localStorage.setItem(TODOS_KEY, JSON.stringify(updatedTodos));
    setTodosInLocalStorage(updatedTodos);
  }

  let todoToList = todosInLocalStorage.map((todo) => (
    <SingleTodo
      title={todo.title}
      description={todo.description}
      id={todo.id}
      onDelete={deleteTodo}
    />
  ));

  return (
    <div
      className="all-todos-entries-container"
      id="all-todos-entries-container"
    >
      {isLocalStorageEmptyOrKeyDoesentExist ? (
        <NoTask />
      ) : (
        <li>{todoToList}</li>
      )}
    </div>
  );
}

export default Todos;
