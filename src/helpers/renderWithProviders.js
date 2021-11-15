import React from 'react';
import { render } from '@testing-library/react';
import { theme } from '../assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import GeneralProvider from '../providers/GeneralProvider';
import { GlobalStyle } from '../assets/styles/GlobalStyle';

export const renderWithProviders = (children) => {
  return render(
    <ThemeProvider theme={theme}>
      <GeneralProvider>
        <GlobalStyle />
        {children}
      </GeneralProvider>
    </ThemeProvider>
  );
};
