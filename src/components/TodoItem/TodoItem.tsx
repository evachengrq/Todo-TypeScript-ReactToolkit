import './TodoItem.css'
import React, { useState } from 'react'
import { Todo } from 'components/App/slice';


interface props {
  key: String,
  todoItem: Todo
}

function TodoItem(props: props) {

  const {isCompleted, value, id} = props.todoItem;


  const [isEditing, updateEditStatus] = useState(false)


  return (
    <li className="todo-item">
      <input type="checkbox" className="todo-item__checkbox" id={id}/>
      {isEditing 
      ? <input type="text" data-testid="editTextField" className="todo-item__input" value={value} /> 
      : <p className='todo-item__text'>{value}</p>}
      <button className="todo-item__button">×</button>
    </li>
  )
}

export default TodoItem