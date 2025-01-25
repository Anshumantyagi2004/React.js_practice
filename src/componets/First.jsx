import React, { Component } from 'react'
import "../componets/Style.css"


export default class First extends Component {
  render() {
    return (
      <div id='box'>
        <table>
          <input placeholder='Full Name' type="text" name="" id='name' />
          <br />
          <input placeholder='E-mail' type="email" name="" id='mail' />
          <br />
          <input placeholder='Password' type="password" name="Password" id='pass' />
          <br />
          <input type="button" value="Submit" id='button' />
        </table>




      </div>
    )
  }
}
