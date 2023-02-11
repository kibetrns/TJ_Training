import React from "react";

let SingleTodo = (props) => {
  const TODOS_KEY = "todos";

  console.log(
    `IN SINGLE TODO ${props.title},  ${props.description} ${props.id}`
  );

  let deleteTodo = () => {
    console.log("DELETE CLICKED");

    let storedTodos = JSON.parse(localStorage.getItem("todos")) || [];

    let foundTodo = storedTodos.find((todo) => todo.id === props.id);

    storedTodos = storedTodos.filter((todo) => todo.id !== foundTodo.id);

    localStorage.setItem(TODOS_KEY, JSON.stringify(storedTodos));

    // Call the parent component's callback function to update the state
    props.onDelete(props.id);
  };

  return (
    <div className="entered-todo-container" id={props.id}>
      <div className="entered-todo-content">
        <div className="entered-todo-tile-and-text-container">
          <div className="entered-todo-title-content">
            <p className="todo-title">{props.title}</p>
          </div>

          <div className="entered-todo-description-content">
            <p className="todo-description">{props.description}</p>
          </div>
        </div>
      </div>

      <div className="delete-todo-component" onClick={deleteTodo}>
        <button>
          <i className="material-icons">close</i>
        </button>
      </div>
    </div>
  );
};

export default SingleTodo;
