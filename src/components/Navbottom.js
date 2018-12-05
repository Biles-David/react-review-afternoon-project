import React, {Component} from 'react'

const Navbottom = props => (
  <nav className="navBar">
    <a className="switch"  id="switchLeft" onClick={props.previous}> {"< Previous"} </a>
    <button onClick={props.canEdit}>Edit</button>
    <button onClick={props.handleDelete}> Delete</button>
    <button onClick={props.setNew}>New</button>
    <a className="switch"  id="switchRight" onClick={props.next}> {" Next >"} </a>
  </nav>
)

export default Navbottom