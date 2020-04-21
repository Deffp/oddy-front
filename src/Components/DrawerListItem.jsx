import React from 'react';
import { Link } from 'react-router-dom';
import GroupIcon from '@material-ui/icons/Group';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: '#B9BCC1',
  },
  text: {
    color: '#B2B9C3',
    fontWeight: 600,
  },
  link: {
    textDecoration: 'none',
  },
}));

const DrawerListItem = (props) => {
  const classes = useStyles();
  const { nameItem } = props;
  return (
  <Link to='adminList' className={ classes.link }>
    <ListItem button>
      <ListItemIcon>
        <GroupIcon className={ classes.icon }/>
      </ListItemIcon>
      <ListItemText primary={ nameItem } classes={{ primary:classes.text }}/>
    </ListItem>
  </Link>
  )
}

export { DrawerListItem };