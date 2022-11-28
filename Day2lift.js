import Todolist from "./Todolist"
import './App.css';

function Day2lift() {
  console.log('apple')
  return (
    <div className="App">
      <h1>Todo list</h1>
      <h2>Complete the works, select them and delete them</h2>
      <Todolist/>
    </div>
  );
}

export default Day2lift;