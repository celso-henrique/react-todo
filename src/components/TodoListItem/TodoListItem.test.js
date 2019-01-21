import React from 'react';
import { mount } from 'enzyme';
import { TodoListItem } from './TodoListItem';

describe('TodoListItem component', () => {
  it('calls onButtonClick', () => {
    const handleClick = jest.fn();
    const todoListItem = mount(
      <TodoListItem onButtonClick={handleClick} />
    );

    todoListItem.find('button').simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });

  it('renders text property', () => {
    const todoListItem = mount(
      <TodoListItem text="test" />
    );

    expect(todoListItem.contains('test')).toBeTruthy();
  });

  it('renders checkbox checked', () => {
    const addTodo = mount(<TodoListItem checked />);

    expect(addTodo.find('input').props().checked).toBe(true);
  });

  it('calls onCheckBoxToggle', () => {
    const handleCheckBoxToggle = jest.fn();
    const todoListItem = mount(
      <TodoListItem onCheckBoxToggle={handleCheckBoxToggle} />
    );

    todoListItem.find('input').simulate('click');
    expect(handleCheckBoxToggle).toHaveBeenCalled();
  });
});
