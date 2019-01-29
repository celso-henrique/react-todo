import React, { Component } from 'react'
import { Layout, AddTodo, TodoList } from '../../components'

export class App extends Component {
  state = {
    inputValue: '',
    todos: [
      {
        text: 'First todo example',
        checked: false
      }
    ]
  }

  changeInput = event => {
    this.setState({
      ...this.state,
      inputValue: event.target.value
    })
  }

  inputKeyPress = event => {
    if (event.which === 13 || event.keyCode === 13) {
      this.addTodo()
      return true
    }

    return false
  }

  addTodo = () => {
    if (this.state.inputValue) {
      this.setState({
        ...this.state,
        inputValue: '',
        todos: this.state.todos.concat({
          text: this.state.inputValue,
          checked: false
        })
      })
    }
  }

  checkTodo = index => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo, todoIndex) => {
        if (todoIndex === index) {
          todo.checked = !todo.checked
        }

        return todo
      })
    })
  }

  removeTodo = index => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo, todoIndex) => todoIndex !== index)
    })
  }

  render() {
    const { inputValue, todos } = this.state
    const { changeInput, addTodo, inputKeyPress, checkTodo, removeTodo } = this

    return (
      <Layout>
        <AddTodo
          onButtonClick={addTodo}
          onInputChange={changeInput}
          inputValue={inputValue}
          onInputKeyPress={inputKeyPress}
        />
        <TodoList
          items={todos}
          onItemCheck={checkTodo}
          onItemRemove={removeTodo}
        />
      </Layout>
    )
  }
}
