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
    let classes

    event.target.checked ? classes = 'c-todo-item__content u-strikethrough' : classes = 'c-todo-item__content'

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
        <a onClick={deleteItem} className='c-todo-item__delete'>Delete</a>
      </div>
    )
  }
}

export default TodoItem
