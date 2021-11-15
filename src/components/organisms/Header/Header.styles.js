import styled from 'styled-components';
import { CgShoppingCart } from 'react-icons/cg';
import { VscAccount } from 'react-icons/vsc';

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  border-bottom: 1px solid grey;
`;

export const ContainerNavItems = styled.div`
  display: flex;
  gap: 3rem;
  margin-left: 20vw;
  align-items: center;
`;

export const ContainerIcons = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
`;

export const IconShoppingCart = styled(CgShoppingCart)`
  font-size: 26px;
  transition: 0.1s;
  &:hover {
    cursor: pointer;
    filter: brightness(11);
  }
`;

export const IconAccount = styled(VscAccount)`
  font-size: 26px;
  transition: 0.1s;
  &:hover {
    cursor: pointer;
    filter: brightness(11);
  }
`;

export const StyledCounterCart = styled.span`
  position: absolute;
  top: -4px;
  right: -4px;
  background: ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  width: 16px;
  height: 16px;
  justify-content: center;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

export const ContainerList = styled.div`
  position: absolute;
  bottom: -90px;
  right: -32px;
  padding: 1rem;
  width: 160px;
  gap: 0.2rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 1;
  &:before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid ${({ theme }) => theme.colors.black};
    top: -16px;
    left: 30px;
    position: absolute;
  }
`;

export const LogOut = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 15px;
  font-weight: bold;
  &:after {
    display: block;
    content: '';
    border-bottom: solid 3px ${({ theme }) => theme.colors.black};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;
