import './Footer.css'
import { updateCompletionStatus } from "../App/slice"
import { useDispatch } from 'react-redux'

function Footer() {

  const dispatch = useDispatch()

  const handleClick = (status: string) => {
    dispatch(updateCompletionStatus(status))
  }

  return(
    <section className="footer">
      <p> 2 items left </p>
      <ul className="filter">
        <li className="filter__tab" onClick={() => handleClick('All')}>All</li>
        <li className="filter__tab" onClick={() => handleClick('Active')}>Active</li>
        <li className="filter__tab" onClick={() => handleClick('Completed')}>Completed</li>
      </ul>
      <button className="footer__clear">Clear completed</button>
    </section>
  )
}

export default Footer