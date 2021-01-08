import './Footer.css'


function Footer() {
  return(
    <section className="footer">
      <p> 2 items left </p>
      <ul className="filter">
        <li className="filter__tab">All</li>
        <li className="filter__tab">Active</li>
        <li className="filter__tab">Completed</li>
      </ul>
      <button className="footer__clear">Clear completed</button>
    </section>
  )
}

export default Footer