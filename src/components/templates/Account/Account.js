import React from 'react';
import { Outlet } from 'react-router-dom';
import NavItem from '../../atoms/NavItem/NavItem';
import { ContainerPBoxSettings, Container, ContainerOutlet, ContainerBoxSettings, H2Styled } from './Account.styles';

const Account = () => {
  return (
    <Container>
      <ContainerBoxSettings>
        <H2Styled>My Settings</H2Styled>
        <ContainerPBoxSettings>
          <NavItem
            classActive="navLinkAccount navLink-active"
            classNotActive="navLinkAccount"
            text="Personal Information"
            path="/settings/personal"
          />
          <NavItem classActive="navLinkAccount navLink-active" classNotActive="navLinkAccount" text="Account" path="/settings/account" />
          <NavItem classActive="navLinkAccount navLink-active" classNotActive="navLinkAccount" text="Notifications" path="/settings/notifications" />
          <NavItem classActive="navLinkAccount navLink-active" classNotActive="navLinkAccount" path="/settings/payment" text="Payment and Billing" />
        </ContainerPBoxSettings>
      </ContainerBoxSettings>
      <ContainerOutlet>
        <Outlet />
      </ContainerOutlet>
    </Container>
  );
};

export default Account;
