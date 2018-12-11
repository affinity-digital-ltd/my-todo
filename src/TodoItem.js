import React, { Component } from 'react'

import './scss/todo-item.scss'

class TodoItem extends Component {
  constructor () {
    super()

    this.state = {
      done: 'c-todo-item__content'
    }

    this.markAsDone = this.markAsDone.bind(this)
  }

  markAsDone (event) {
    const classes = event.target.checked ? 'c-todo-item__content u-strikethrough' : 'c-todo-item__content'

    this.setState({
      done: classes
    })
  }

  render () {
    const { done } = this.state
    const { item, deleteItem } = this.props

    return (
      <div className='c-todo-item'>
        <label className='c-todo-item__task'>
          <input type='checkbox' onClick={this.markAsDone} /><span className={done}>{item}</span>
        </label>
        <button onClick={deleteItem} className='c-todo-item__delete' data-behavior='delete'>Delete</button>
      </div>
    )
  }
}

export default TodoItem
