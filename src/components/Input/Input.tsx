import './Input.css'
import React from 'react'

function Input() {
  return(
    <section className="textfield">
      <button className="textfield__button">❯</button>
      <input type="text" placeholder="What needs to be done?" className="textfield__input"></input>
    </section>
  )
}

export default Input