import React from 'react'
import { mount } from 'enzyme'
import { AddTodo } from './AddTodo'

describe('AddTodo component', () => {
  it('renders input value', () => {
    const addTodo = mount(<AddTodo inputValue="test" />)

    expect(addTodo.find('input').props().value).toBe('test')
  })

  it('calls onButtonClick', () => {
    const handleClick = jest.fn()
    const addTodo = mount(<AddTodo onButtonClick={handleClick} />)

    addTodo.find('button').simulate('click')
    expect(handleClick).toHaveBeenCalled()
  })

  it('calls onInputChange', () => {
    const handleChange = jest.fn()
    const addTodo = mount(<AddTodo onInputChange={handleChange} />)

    addTodo.find('input').simulate('change')
    expect(handleChange).toHaveBeenCalled()
  })

  it('calls onKeyPress', () => {
    const handleKeyPress = jest.fn()
    const addTodo = mount(<AddTodo onInputKeyPress={handleKeyPress} />)

    addTodo.find('input').simulate('keyPress')
    expect(handleKeyPress).toHaveBeenCalled()
  })
})
