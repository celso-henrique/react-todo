import React from 'react';
import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';

export const Layout = ({ children }) => (
  <Paper
    elevation={0}
    style={{ padding: 0, margin: 0, backgroundColor: '#fafafa' }}
  >
    <AppBar color="primary" position="static" style={{ height: 64 }}>
      <Toolbar style={{ height: 64 }}>
        <Typography color="inherit">REACT TODO</Typography>
      </Toolbar>
    </AppBar>
    {children}
  </Paper>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
