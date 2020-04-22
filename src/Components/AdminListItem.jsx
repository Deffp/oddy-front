import React from 'react';
import { Toolbar } from '@material-ui/core';

import { RemoveBtn } from '../Components/Buttons/AddPanelBtnGroup';
import adminAPI from '../api/adminAPI';

const styles = {
  root: {
    display: 'flex',
    borderBottom: '1px solid #B2B9C3',
    padding: '3px',
    borderRadius: '5px',
  },
  text: {
    color: '#B2B9C3',
    fontWeight: 600,
  },
  toolbar: {
    width: '100%',
    justifyContent: 'space-between',
  }
}

const AdminListItem = (props) => {

  const removeAdmin = async (admin) => {
    const removeAdmin = await adminAPI.removeAdmin(admin);
    return removeAdmin;
  }

  return (
    <div style={ styles.root }>
      <Toolbar style={ styles.toolbar }>
        <span style={ styles.text }>
          { props.admin }
        </span>
        <div onClick={() => removeAdmin(props.admin)}>
          <RemoveBtn />
        </div>
      </Toolbar>
    </div>
  );
};

export { AdminListItem };