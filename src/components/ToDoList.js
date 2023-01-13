import React from 'react'
import { Todo } from './Todo.js'

export const ToDoList = ({todos, removeTodo}) =>  {
    return (
      <ul>
        {todos.map((todo) => {
          return (
            <li>
              <Todo  removeTodo={removeTodo} value={todo}/>
            </li>
          );
        })}
      </ul>
    );
}

