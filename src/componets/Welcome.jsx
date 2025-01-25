import React, { Component } from 'react'
import "../componets/Style.css"
export default class Welcome extends Component {
  constructor() {
    super()
    this.state = { count: 0 }
    this.click = this.click.bind(this)
    this.click_1 = this.click_1.bind(this)
    this.reset = this.reset.bind(this)
  }
  click() {
    this.setState({ count: this.state.count + 1 })
  }
  click_1() {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 })
    }
  }
  reset() {
    this.setState({ count: this.state.count = 0 })
  }
  render() {
    return (
      <div id='box1'>
        <h1 id='msg'>Counter:{this.state.count}</h1>
        <button onClick={this.click} id='button1'>Increase</button>
        <button onClick={this.reset} id='button2'>Reset</button>
        <button onClick={this.click_1} id='button3'>Decrease</button>
      </div>

    )
  }
}