import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ text, path = '/', classActive = 'navLink navLink-active', classNotActive = 'navLink' }) => {
  return (
    <NavLink className={({ isActive }) => (isActive ? classActive : classNotActive)} to={path}>
      {text}
    </NavLink>
  );
};

export default NavItem;
