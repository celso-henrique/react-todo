import React from 'react'
import { mount } from 'enzyme'
import { TodoList } from './TodoList'

const items = [
  {
    text: 'test',
    checked: false
  },
  {
    text: 'test 2',
    checked: false
  }
]

describe('TodoList component', () => {
  it('renders items', () => {
    const todoList = mount(<TodoList items={items} />)

    expect(todoList.find('li').length).toBe(2)
  })

  it('calls onItemRemove with correct index', () => {
    const handleClick = jest.fn()
    const todoList = mount(
      <TodoList items={items} onItemRemove={handleClick} />
    )

    todoList
      .find('button')
      .first()
      .simulate('click')
    expect(handleClick).toHaveBeenCalledWith(0)
  })

  it('calls onItemCheck with correct index', () => {
    const handleClick = jest.fn()
    const todoList = mount(<TodoList items={items} onItemCheck={handleClick} />)

    todoList
      .find('input')
      .first()
      .simulate('click')
    expect(handleClick).toHaveBeenCalledWith(0)
  })
})
