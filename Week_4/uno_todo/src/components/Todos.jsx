import React from "react";
import { useState } from "react";



function Todos() {



    function createTodoEntry( title, description)  {
       

    }

    return (

        <div className="all-todos-entries-container" id="all-todos-entries-container">
             <div className="entered-todo-container">

                <div className="entered-todo-content">
                    <div className="entered-todo-tile-and-text-container">
                        <div className="entered-todo-title-content">
                    
                            <p className="todo-title">Excersise</p>
                        </div>
                        
                        <div className="entered-todo-description-content">
                            <p className= "todo-description"> Do some cardiac workouts and torso workouts </p>
                        </div>
                    </div>    
                </div>
    
                <div className="delete-todo-component" id="delete-todo-component" onclick="deleteTodoComponent()">
                    <button>
                        <i className="material-icons">close</i>
                    </button>
                 </div>
            </div> 

        </div>
    )
}

export default Todos