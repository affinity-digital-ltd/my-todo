import React, { Component } from 'react';
import TodoItem from './TodoItem'

import './scss/todo.scss'

class Todo extends Component {
  constructor () {
    super()

    this.state = {
      todos: []
    }
    this.addItemToTodo = this.addItemToTodo.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  addItemToTodo (event) {
    event.preventDefault() // Do not submit the form and cause the page to refresh
    const item = event.target.todoItem.value
    event.target.todoItem.value = ''
    const { todos } = this.state

    todos.push(item)

    this.setState({todos: todos})
  }

  buildTodoList () {
    const { todos } = this.state

    return todos.map((todo, index) => {
      return <li key={todo}>
        <TodoItem item={todo} deleteItem={() => this.deleteItem(index)} />
      </li>
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
            <input type='text' placeholder='What would you like to do?' name='todoItem' autoComplete='off' />
            <button type='submit'>Add</button>
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
