import './TodoList.css'
// import TodoItem from '../todo-item/TodoItem'
import React from 'react'
import { useSelector } from "react-redux"
import { Todo } from '../App/slice';
import TodoItem from "../TodoItem/TodoItem";

function TodoList() {

  const todoItems: Todo[] = useSelector<Todo[], Todo[]>(state => state)
  
  
  return(
    <ul className="todo-items">
      {todoItems.map(
        element => <TodoItem key={element.id} todoItem={element} />
      )}
    </ul>
  )
}

export default TodoList
