import React, { Component } from 'react';
import { Toolbar, TextField } from '@material-ui/core';

import { AddBtn, CencelBtn } from './Buttons/AddPanelBtnGroup';
import adminAPI from '../api/adminAPI';

const styles = {
  root: {
    justifyContent: 'flex-end',
    background: '#E2E6E7',
  },
}

class AddPanel extends Component {

  state = {
    addUser: false,
    userEmail: '',
  }

  toggleActive = () => {
    const { addUser } = this.state;
    this.setState({
      addUser: !addUser
    })
  }

  addNewUser = async () => {
    const { userEmail } = this.state;
    const admin = await adminAPI.addingAdmin(userEmail);
    return admin;
  }

  handleChangeEmail = (e) => {
    this.setState({ 
      userEmail: e.target.value,
    }); 
  }

  fillField = () => {
    const { userEmail } = this.state;
    return (
      <Toolbar>
        <TextField value={ userEmail } label='Enter email' onChange={ this.handleChangeEmail } />
        <div onClick={ this.toggleActive }>
          <CencelBtn />
        </div>
        <div onClick={ this.addNewUser }>
          <AddBtn />
        </div>
      </Toolbar>
    )
  }

  chengePanel = () => {
    const { addUser } = this.state;
    return !addUser ? 
      <div onClick={ this.toggleActive } >
        <AddBtn />
      </div> : 
      this.fillField(); 
  }

  render() {
    return (
      <Toolbar style={ styles.root }>
        { this.chengePanel() }
      </Toolbar>
    );
  };
};

export { AddPanel };