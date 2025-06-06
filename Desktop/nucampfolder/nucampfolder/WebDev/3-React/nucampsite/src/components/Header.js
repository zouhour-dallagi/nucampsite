import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from '../app/assets/img/logo.png';

const Header = () => {
  return (
    <Navbar dark color="primary">
              <NavbarBrand href="/">
                 <img src={NucampLogo} className="App-logo" alt="logo" />
              </NavbarBrand>
            </Navbar>
  
  );
};

export default Header;
