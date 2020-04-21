import React from 'react';
import { makeStyles } 
  from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  btn: {
    fontFamily: 'Mukta Mahee',
    border: '1px solid #ffffff',
  },
  btnText: {
    fontSize: '15px',
    margin: '0px 10px 0px 10px',
    color: '#ffffff',
  }
}));

const LoginBtn = () => {
  const classes = useStyles();
  return (
    <Button className={ classes.btn } >
      <span className={ classes.btnText } >
        Login
      </span>
    </Button>
  );
};

const LogOutBtn = () => {
  const classes = useStyles();
  return (
    <Button className={ classes.btn } >
      <span className={ classes.btnText } >
        Logout
      </span>
  </Button>
  );
};

export { LoginBtn, LogOutBtn };