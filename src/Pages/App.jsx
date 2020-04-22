import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { RootPanel } from '../Components/RootPanel';
import { AdminList } from '../Components/AdminList';

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    background: '#EAEFF2',
    minHeight: '100vh',
    display: 'flex',
  },
  content: {
    display: 'flex',
  }
}));

const App = () => {
  const classes = useStyles();	
  return (
    <Container maxWidth='false' className={ classes.rootContainer }>
      <Router>
        <Route path='/' component={ RootPanel }/>
        <Container maxWidth='sm' className={ classes.content }>
          <Route path='/adminList' component={ AdminList } />
        </Container>
     </Router>
    </Container>
  );
};

export { App };