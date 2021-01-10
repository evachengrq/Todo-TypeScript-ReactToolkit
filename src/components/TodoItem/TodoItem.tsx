import './TodoItem.css'
import { useState } from 'react'
import { deleteTodo, Todo, updateTodo } from 'components/App/slice';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';


interface props {
  key: String,
  todoItem: Todo
}

function TodoItem(props: props) {

  const dispatch = useDispatch()

  const {isCompleted, value, id} = props.todoItem

  const [isEditing, updateEditStatus] = useState(false)

  const handleClick = () => {
    dispatch(deleteTodo(id))
  }

  const handleDoubleClick = () => {
    updateEditStatus(true)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedItem = {
      id: id,
      value: event.currentTarget.value,
      isCompleted: isCompleted
    }
    dispatch(updateTodo(updatedItem))
  }
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      updateEditStatus(false)
    }
  }

  const handleCheckboxChange = () => {
    const completedItem = {
      id: id,
      value: value,
      isCompleted: !isCompleted
    }
    dispatch(updateTodo(completedItem))
  }

  return (
    <li className="todo-item">
      <input type="checkbox" className="todo-item__checkbox" checked={isCompleted ? true : false} id={id} onChange={handleCheckboxChange}/>
      {isEditing 
      ? <input type="text" data-testid="editTextField" className="todo-item__input" value={value} onKeyDown={handleKeyDown} onChange={handleChange}/> 
      : <p className={classNames(['todo-item__text', {'todo-item__text--crossed': isCompleted}])} onDoubleClick={handleDoubleClick}>{value}</p>}
      <button className="todo-item__button" onClick={handleClick}>×</button>
    </li>
  )
}

export default TodoItem