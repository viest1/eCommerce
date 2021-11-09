import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import GeneralProvider from 'providers/GeneralProvider';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { darkTheme, theme } from '../assets/styles/theme';
import { settingsDarkMode } from '../hooks/useDarkMode';
import MainContent from '../components/templates/MainContent/MainContent';

console.log('hello');

function App() {
  const [themeState, setThemeState] = useState('light');
  useEffect(() => settingsDarkMode(setThemeState), []);
  return (
    <Router>
      <GeneralProvider>
        <ThemeProvider theme={themeState === 'light' ? theme : darkTheme}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route
              path="*"
              element={
                <main style={{ padding: '1rem' }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </ThemeProvider>
      </GeneralProvider>
    </Router>
  );
}

export default App;
