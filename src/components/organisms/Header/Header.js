import React, { useContext, useState } from 'react';
import DarkMode from '../../molecules/DarkMode/DarkMode';
import NavItem from '../../atoms/NavItem/NavItem';
import { ECommerceContext } from '../../../providers/GeneralProvider';
import { sumQuantity } from '../../../helpers/sumQuantity';
import {
  ContainerNavItems,
  Container,
  ContainerList,
  ContainerIcons,
  IconShoppingCart,
  IconAccount,
  StyledCounterCart,
  LogOut,
} from './Header.styles';

const Header = ({ setThemeState, setAuth }) => {
  const { setIsOpenCart, itemsInCart } = useContext(ECommerceContext);
  const [isOpenList, setIsOpenList] = useState(false);

  const handleOpenCart = () => {
    setIsOpenCart(true);
  };

  const handleOpenAccount = () => {
    setIsOpenList((prev) => !prev);
  };

  return (
    <Container>
      <ContainerNavItems>
        <NavItem text="PRODUCTS" path="/" />
        <NavItem text="COUPONS" path="coupons" />
        <NavItem text="CART" path="cart" />
        <NavItem text="PRIVACY" path="privacy" />
      </ContainerNavItems>
      <ContainerIcons>
        <div style={{ position: 'relative' }}>
          <IconShoppingCart onClick={handleOpenCart} />
          <StyledCounterCart>{sumQuantity(itemsInCart)}</StyledCounterCart>
        </div>
        <IconAccount onClick={handleOpenAccount} />
        {isOpenList && (
          <ContainerList>
            <NavItem text="ACCOUNT" path="settings" />
            <LogOut onClick={() => setAuth(false)}>LOG OUT</LogOut>
          </ContainerList>
        )}
        <DarkMode setThemeState={setThemeState} />
      </ContainerIcons>
    </Container>
  );
};

export default Header;
