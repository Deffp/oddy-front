import React, { Component } from 'react';
import oddyAPI from '../api/adminAPI';
import { Container } from '@material-ui/core';

import { AdminListItem } from './AdminListItem';
import { AddPanel } from './AddPanel';

const styles = {
  root: {
    padding: '0px',
    margin: 'auto',
    minHeight: '200px',
    background: '#FFFFFF',
    borderRadius: '10px',
    boxShadow: '0 0px 3px #A5A6A8',
  }
}

class AdminList extends Component {

  state = {
    admins: [],
  };

  async componentWillMount() {
    this.getAdmins();
  }

  getAdmins = async () => {
    const admins = await oddyAPI.getAdmins();
    this.setState({
      admins,
    });
  }

  renderAdminList = (admin) => <AdminListItem admin={admin.email}/> 

  render() {
    const { admins } = this.state;
    return (
      <Container style={ styles.root } >
        <AddPanel />
        { admins.map(this.renderAdminList) }
      </Container>
    );
  };
};

export { AdminList };