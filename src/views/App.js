import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import React, { useEffect, useState } from 'react';
import GeneralProvider from 'providers/GeneralProvider';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { darkTheme, theme } from '../assets/styles/theme';
import { settingsDarkMode } from '../hooks/useDarkMode';
import MainContent from '../components/templates/MainContent/MainContent';
import MainContainerApp from '../components/templates/MainContainerApp/MainContainerApp';
import PageNotFound404 from '../components/templates/PageNotFound404/PageNotFound404';
import Coupons from '../components/templates/Coupons/Coupons';
import Privacy from '../components/templates/Privacy/Privacy';
import Cart from '../components/templates/Cart/Cart';
import FormAuth from '../components/templates/FormAuth/FormAuth';
import Account from '../components/templates/Account/Account';
import AccountSettings from '../components/organisms/AccountSettings/AccountSettings';
import NotificationSettings from '../components/organisms/NotificationSettings/NotificationSettings';
import PaymentSettings from '../components/organisms/PaymentSettings/PaymentSettings';
import PersonalSettings from '../components/organisms/PersonalSettings/PersonalSettings';
import { useLocalStorage } from '../hooks/useLocalStorage';

function App() {
  const [themeState, setThemeState] = useState('light');
  useEffect(() => settingsDarkMode(setThemeState), []);
  const [auth, setAuth] = useLocalStorage(false);

  return (
    <Router>
      <GeneralProvider>
        <ThemeProvider theme={themeState === 'light' ? theme : darkTheme}>
          <GlobalStyle />
          <MainContainerApp setThemeState={setThemeState} setAuth={setAuth}>
            {auth ? (
              <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/coupons" element={<Coupons />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/settings" element={<Navigate to="personal" />} />
                <Route path="/settings/*" element={<Account />}>
                  <Route path="personal" element={<PersonalSettings />} />
                  <Route path="account" element={<AccountSettings />} />
                  <Route path="notifications" element={<NotificationSettings />} />
                  <Route path="payment" element={<PaymentSettings />} />
                </Route>
                <Route path="*" element={<PageNotFound404 />} />
              </Routes>
            ) : (
              <FormAuth setAuth={setAuth} />
            )}
          </MainContainerApp>
        </ThemeProvider>
      </GeneralProvider>
    </Router>
  );
}

export default App;
