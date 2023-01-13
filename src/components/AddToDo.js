import React, { useState } from "react";

export const AddToDo = ({newTodo}) => {

const [currentTodo, setCurrentTodo] = useState('');

const handleSubmit = () => {
newTodo(currentTodo);
setCurrentTodo('');
}

  const handleChange = (e) => {
    setCurrentTodo(e.target.value);
  };



  return (
    <div id='addToDo'>
      <input type='text' value={currentTodo} onChange={handleChange} placeholder="Add a To Do" />
      <button id='addButton'  onClick={handleSubmit}>Add</button>
    </div>
  );
};
