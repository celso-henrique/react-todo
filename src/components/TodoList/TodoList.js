import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { List, Paper } from '@material-ui/core'
import { TodoListItem } from '..'

export const TodoList = ({ items, onItemRemove, onItemCheck }) => (
  <Fragment>
    {items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List style={{ overflow: 'scroll' }}>
          {items.map((todo, index) => (
            <TodoListItem
              {...todo}
              key={`TodoItem.${index}`}
              divider={index !== items.length - 1}
              onButtonClick={() => onItemRemove(index)}
              onCheckBoxToggle={() => onItemCheck(index)}
            />
          ))}
        </List>
      </Paper>
    )}
  </Fragment>
)

TodoList.propTypes = {
  items: PropTypes.array,
  onItemRemove: PropTypes.func,
  onItemCheck: PropTypes.func
}

TodoList.defaultProps = {
  items: [],
  onItemRemove: () => {},
  onItemCheck: () => {}
}
