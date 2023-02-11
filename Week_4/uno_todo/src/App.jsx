import "./App.css";
import { useState } from "react";
import Todos from "./components/Todos";
import TodoInput from "./components/TodoInput";
import Empty from "./components/NoTask";
import Trial from "./components/Trial";

function App() {
  const [todos, handleTodos] = useState([
    {
      id: 1,
      title: "Play",
      date_due: `${new Date().toTimeString()}`,
      isComplete: false,
    },

    {
      id: 2,
      title: "Work",
      date_due: `${new Date().toTimeString()}`,
      isComplete: true,
    },

    {
      id: 3,
      title: "Yoga",
      date_due: `${new Date().toTimeString()}`,
      isComplete: false,
    },

    {
      id: 4,
      title: "Workout",
      date_due: `${new Date().toTimeString()}`,
      isComplete: true,
    },

    {
      id: 5,
      title: "Shop",
      date_due: `${new Date().toTimeString()}`,
      isComplete: false,
    },
  ]);

  return (
    <div className="App">
      <TodoInput />
      <Todos />

      {/* <Trial /> */}
    </div>

  );
}

export default App;
