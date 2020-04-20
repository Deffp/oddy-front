import React from 'react';
import { Drawer, List, ListItem, 
  ListItemText, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: '240px',
    background: '#18202B',
  },
}));

const RootDrawer = () => {
  const classes = useStyles();

  return (
    <Drawer classes={{
      paper: classes.drawerPaper,
    }}
    variant='permanent'
    >
      <List>
        <ListItem>
          <ListItemText primary='Admins' />
        </ListItem>
      </List>
    </Drawer>
  );
};

export { RootDrawer };