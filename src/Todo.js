import React, { Component } from 'react';

class Todo extends Component {
  constructor () {
    super()

    this.state = {
      todos: []
    }
    this.addItemToTodo = this.addItemToTodo.bind(this)
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

    return todos.map(todo => {
      return <li key={todo}>{todo}</li>
    })
  }

  render () {
    return (
      <>
        <form onSubmit={this.addItemToTodo}>
          <div>
            <input type='text' placeholder='What would you like to do?' name='todoItem' autoComplete='off' />
            <button type='submit'>Add</button>
          </div>
        </form>
        <ul>
          {this.buildTodoList()}
        </ul>
      </>
    );
  }
}

export default Todo;
