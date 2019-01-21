import React from 'react';
import PropTypes from 'prop-types'
import { TextField, Paper, Button, Grid } from '@material-ui/core';

export const AddTodo = ({
  inputValue,
  onInputChange,
  onInputKeyPress,
  onButtonClick
}) => (
  <Paper style={{ margin: 16, padding: 16 }}>
    <Grid container>
      <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
        <TextField
          placeholder="Add todo here"
          value={inputValue}
          onChange={onInputChange}
          onKeyPress={onInputKeyPress}
          fullWidth
        />
      </Grid>
      <Grid xs={2} md={1} item>
        <Button
          fullWidth
          color="secondary"
          variant="outlined"
          onClick={onButtonClick}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  </Paper>
);

AddTodo.propTypes = {
  inputValue: PropTypes.string,
  onInputChange: PropTypes.func,
  onInputKeyPress: PropTypes.func,
  onButtonClick: PropTypes.func
};

AddTodo.defaultProps = {
  inputValue: '',
  onInputChange: () => {},
  onInputKeyPress: () => {},
  onButtonClick: () => {}
};
