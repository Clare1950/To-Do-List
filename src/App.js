import React, { useState } from 'react'
import { ToDoList } from './components/ToDoList.js'
import { AddToDo } from "./components/AddToDo.js";
import './App.css'

function App() {
const [todos, setTodos] = useState([]);

const newTodo = (todo) => {
setTodos([...todos, todo])
}

const removeTodo = (text) => {
 const filteredTodos = todos.filter((todo )=> {return todo !== text} )
 setTodos(filteredTodos)
}

  return (
    <div id="app">
      <h1>To Do List</h1>
      <AddToDo id='addTodo' newTodo={newTodo} />

      <ToDoList removeTodo={removeTodo} todos={todos} />
    </div>
  );
}

export default App;
