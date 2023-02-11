import React from "react";


let SingleTodo = (props) => {

    console.log(`IN SINGLE TODO ${props.title},  ${props.description}`)

    return(

        <div className="entered-todo-container">

        <div className="entered-todo-content">
            <div className="entered-todo-tile-and-text-container">
                <div className="entered-todo-title-content">
            
                    <p className="todo-title">{ props.title }</p>
                </div>
                
                <div className="entered-todo-description-content">
                    <p className= "todo-description">{props.description}</p>
                </div>
            </div>    
        </div>

        <div className="delete-todo-component" id="delete-todo-component" onclick="deleteTodoComponent()">
            <button>
                <i className="material-icons">close</i>
            </button>
         </div>
    </div>

       
    )
}


export default SingleTodo