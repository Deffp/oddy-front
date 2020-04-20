import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { RootPanel } from '../Components/RootPanel';

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    background: '#EAEFF2',
    minHeight: '100vh',
  },
}));

const App = () => {
  const classes = useStyles();	
  return (
    <Container maxWidth='false' className={ classes.rootContainer }>
      <Router>
        <Route path='/' component={ RootPanel }/>
     </Router>
    </Container>
  );
};

export { App };