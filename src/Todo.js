import React, { Component } from 'react';
import TodoItem from './TodoItem'

import './scss/todo.scss'

class Todo extends Component {
  constructor () {
    super()

    this.state = {
      todos: [],
      value: ''
    }
    this.addItemToTodo = this.addItemToTodo.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  addItemToTodo (event) {
    event.preventDefault() // Do not submit the form and cause the page to refresh
    const { todos } = this.state
    const item = this.state.value

    todos.push(item)

    this.setState({
      todos: todos,
      value: ''
    })
  }

  buildTodoList () {
    const { todos } = this.state

    return todos.map((todo, index) => {
      return <li key={todo}>
        <TodoItem item={todo} deleteItem={() => this.deleteItem(index)} />
      </li>
    })
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  deleteItem (item) {
    const { todos } = this.state

    todos.splice(item, 1)

    this.setState({
      todos: todos
    })
  }

  render () {
    return (
      <>
        <form onSubmit={this.addItemToTodo} className='c-form'>
          <div className='c-form__input-group'>
            <input type='text' placeholder='What would you like to do?' value={this.state.value} name='todoItem' autoComplete='off' onChange={this.handleChange} />
            <button type='submit' className='c-button'>Add</button>
          </div>
        </form>
        <ul>
          {this.buildTodoList()}
        </ul>
      </>
    )
  }
}

export default Todo;
