import React, { createContext } from 'react';

export const eCommerceContext = createContext({});

const GeneralProvider = ({ children }) => {

  return (
    <eCommerceContext.Provider>
      {children}
    </eCommerceContext.Provider>
  );
};

export default GeneralProvider;
