import './App.css';
import { useState } from 'react';
import Todos from './components/Todos';
import TodoInput from './components/TodoInput';
import Empty from './components/Empty';



function App() {

  const [todos, handleTodos] = useState([
    {
      id: 1,
      title: "Play",
      date_due: `${new Date().toTimeString()}`,
      isComplete: false
    },

    {
      id: 2,
      title: "Work",
      date_due: `${new Date().toTimeString()}`,
      isComplete: true
    },

    {
      id: 3,
      title: "Yoga",
      date_due: `${new Date().toTimeString()}`,
      isComplete: false
    },

    {
      id: 4,
      title: "Workout",
      date_due: `${new Date().toTimeString()}`,
      isComplete: true
    },

    {
      id: 5,
      title: "Shop",
      date_due: `${new Date().toTimeString()}`,
      isComplete: false
    },


     
  ]);



  function loadTodoEntries() {
    let isLocalStorageEmpty = localStorage.getItem.length === 0 || localStorage.getItem.length < 0


    //TODO("Write the logic to display the todos in the DOM")


    // { isLocalStorageEmpty : <Empty /> ? } 

    
  }


  



  return (
    <div className="App">
      <TodoInput />
      <Todos />
    </div>
  );
}

export default App;
