import React from "react";

export const Todo = ({value, removeTodo}) => {
const handleClick = () => {
removeTodo(value)
}
    return (
      <div id='todo'>
        <p>{value}</p>
        <button id='removeButton' onClick={handleClick}>X</button>
      </div>
    );
}