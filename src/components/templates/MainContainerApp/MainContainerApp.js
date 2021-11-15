import React from 'react';
import Header from '../../organisms/Header/Header';

const MainContainerApp = ({ children, setThemeState, setAuth }) => {
  return (
    <div>
      <Header setThemeState={setThemeState} setAuth={setAuth} />
      {children}
    </div>
  );
};

export default MainContainerApp;
