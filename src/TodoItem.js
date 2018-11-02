import React, { Component } from 'react'

class TodoItem extends Component {
  constructor () {
    super()

    this.state = {
      done: {}
    }

    this.markAsDone = this.markAsDone.bind(this)
  }

  markAsDone (event) {
    // Use the checkbox value from the form to update the state
    if (event.target.checked) {
      this.setState({done: { textDecoration: 'line-through' }})
    } else {
      this.setState({done: {}})
    }
  }

  render () {
    const { done } = this.state
    const { item, deleteItem } = this.props

    return <span style={done}>
      <input type='checkbox' onClick={this.markAsDone} name='todoItem' />
      {item}
      <a href='#' onClick={deleteItem}>delete</a>
    </span>
  }
}

export default TodoItem
