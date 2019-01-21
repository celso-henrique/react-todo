import React from 'react';
import PropTypes from 'prop-types'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import {
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core';

export const TodoListItem = ({
  divider,
  onCheckBoxToggle,
  checked,
  text,
  onButtonClick
}) => (
  <ListItem divider={divider}>
    <Checkbox
      onClick={onCheckBoxToggle}
      checked={checked}
      disableRipple
    />
    <ListItemText primary={text} />
    <ListItemSecondaryAction>
      <IconButton
        aria-label="Delete todo" 
        onClick={onButtonClick}
      >
        <DeleteOutlined />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
)

TodoListItem.propTypes = {
  divider: PropTypes.bool,
  checked: PropTypes.bool,
  onButtonClick: PropTypes.func,
  text: PropTypes.string
};

TodoListItem.defaultProps = {
  divider: true,
  checked: false,
  onButtonClick: () => {},
  text: ''
};
