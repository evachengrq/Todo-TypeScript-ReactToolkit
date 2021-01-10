import './Footer.css'
import { deleteTodo, State, Todo, updateCompletionStatus } from "../App/slice"
import { useDispatch, useSelector } from 'react-redux'

function Footer() {

  const dispatch = useDispatch()

  const activeItems: Todo[] = useSelector<State, Todo[]>(state => state.todos.filter(item => item.isCompleted === false))
  const lengthOfActives = activeItems.length
  const completedItems: Todo[] = useSelector<State, Todo[]>(state => state.todos.filter(item => item.isCompleted === true))
  const lengthOfCompleteds = completedItems.length


  const handleClickFilter = (status: string) => {
    dispatch(updateCompletionStatus(status))
  }

  const handleClickClear = () => {
    completedItems.map(item => dispatch(deleteTodo(item.id)))
  }

  return(
    <section className="footer">
      <p> {lengthOfActives > 1 ? lengthOfActives + " items left": lengthOfActives + " item left"} </p>
      <ul className="filter">
        <li className="filter__tab" onClick={() => handleClickFilter('All')}>All</li>
        <li className="filter__tab" onClick={() => handleClickFilter('Active')}>Active</li>
        <li className="filter__tab" onClick={() => handleClickFilter('Completed')}>Completed</li>
      </ul>
      <button onClick={handleClickClear} className={lengthOfCompleteds > 0 ? "footer__clear" : "hidden"}>Clear completed</button>
    </section>
  )
}

export default Footer