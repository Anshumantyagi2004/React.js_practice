import React, { Component } from 'react'

export default class Second extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h2>Hy my name is : {this.props.detail.name}</h2>
        <h2>Hy my age is : {this.props.detail.age}</h2>
        <h2>Hy my height is : {this.props.detail.height}</h2>
        <h2>Hy my city is : {this.props.detail.city}</h2>
        <h2>Hy my weight is : {this.props.detail.weight}</h2>
      </div>
    )
  }
}
