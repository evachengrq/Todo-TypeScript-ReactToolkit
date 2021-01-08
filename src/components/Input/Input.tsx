import { useDispatch } from 'react-redux'
import { addTodo } from "../App/slice";
import './Input.css'

function Input() {
  const dispatch = useDispatch()
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if(event.key === 'Enter') {
      const input = event.currentTarget.value
      if(input.trim().length > 0) {
        dispatch(addTodo(input))
      }
      event.currentTarget.value = ''
    }
  }

  return(
    <section className="textfield">
      <button className="textfield__button">❯</button>
      <input type="text" placeholder="What needs to be done?" className="textfield__input" onKeyDown={handleKeyDown}></input>
    </section>
  )
}

export default Input