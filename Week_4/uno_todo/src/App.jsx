import "./App.css";
import Todos from "./components/Todos";
import TodoInput from "./components/TodoInput";

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <h6>Inspired  <a href="https://www.figma.com/community/file/1192904575853859483" target="_blank"> by </a></h6>
      <TodoInput />
      <Todos />
    </div>
  );
}

export default App;
