import React from 'react'
import { shallow } from 'enzyme'
import { App } from './App'

const initialItemsLength = 1

describe('App container', () => {
  it('removes a todo from state', () => {
    const app = shallow(<App />)

    app.instance().removeTodo(0)

    expect(app.state('todos').length).toBe(0)
  })

  it('adds a todo to state', () => {
    const app = shallow(<App />)

    app.setState({
      ...app.state(),
      inputValue: 'test'
    })

    app.instance().addTodo()

    expect(app.state('todos').length).toBe(initialItemsLength + 1)
  })

  it('checks a todo in state', () => {
    const app = shallow(<App />)

    app.instance().checkTodo(0)

    expect(app.state('todos')[0].checked).toBeTruthy()
  })

  it('change inputValue in state', () => {
    const app = shallow(<App />)

    app.instance().changeInput({
      target: {
        value: 'test'
      }
    })

    expect(app.state('inputValue')).toBe('test')
  })

  it('creates a todo when input key pressed is 13', () => {
    const app = shallow(<App />)

    app.setState({
      ...app.state(),
      inputValue: 'test'
    })
    app.instance().inputKeyPress({
      which: 13
    })

    expect(app.state('todos').length).toBe(initialItemsLength + 1)
  })

  it('it does not create a todo when input key pressed is not 13', () => {
    const app = shallow(<App />)

    app.setState({
      ...app.state(),
      inputValue: 'test'
    })
    app.instance().inputKeyPress({
      which: 12
    })

    expect(app.state('todos').length).toBe(initialItemsLength)
  })
})
