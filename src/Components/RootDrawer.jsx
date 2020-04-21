import React from 'react';
import { Drawer, List, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { DrawerListItem } from './DrawerListItem';

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: '240px',
    background: '#18202B',
  },
  titleLogo: {
    background: '#232F3F',
    textAlign: 'center',
    color: '#ACB1B5',
    fontWeight: 600,
    userSelect: 'none',
  }
}));

const RootDrawer = () => {
  const classes = useStyles();

  return (
    <Drawer classes={{
      paper: classes.drawerPaper,
    }}
    variant='permanent'
    >
      <Typography variant='h2' className={ classes.titleLogo }>
        Oddy
      </Typography>
      <List>
        <DrawerListItem nameItem='Admins' />
      </List>
    </Drawer>
  );
};

export { RootDrawer };