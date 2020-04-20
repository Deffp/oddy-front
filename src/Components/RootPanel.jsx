import React from 'react';

import { RootDrawer } from '../Components/RootDrawer';
import { Header } from '../Components/Header';

const RootPanel = () => {
  return (
    <div>
      <Header />
      <RootDrawer />
    </div>
  );
};

export { RootPanel };