import React, { Component } from 'react'
import spin from './spinner.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src = {spin} className = "my-3" alt = "..."/> 
      </div>
    )
  }
}
