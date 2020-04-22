import React from 'react';
import { makeStyles } 
  from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  btn: {
    background: '#409CE5',
    fontFamily: 'Mukta Mahee',
    border: '1px solid #ffffff',
  },
  btnText: {
    fontSize: '15px',
    margin: '0px 10px 0px 10px',
    color: '#ffffff',
  }
}));


const AddBtn = () => {
  const classes = useStyles();
  return (
    <Button className={ classes.btn } >
      <span className={ classes.btnText } >
        Add user
      </span>
    </Button>
  );
}

const RemoveBtn = () => {
  const classes = useStyles();
  return (
    <Button className={ classes.btn } >
      <span className={ classes.btnText } >
        Remove
      </span>
    </Button>
  );
}

const CencelBtn = () => {
  const classes = useStyles();
  return (
    <Button className={ classes.btn } >
      <span className={ classes.btnText } >
        Cancel
      </span>
    </Button>
  );
}

export { AddBtn, RemoveBtn, CencelBtn };