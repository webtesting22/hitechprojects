import React from 'react'
import { Link } from 'react-router-dom';
import HitechLogo from "./hitech_logo.png";
import HeaderDrawer from './HeaderDrawer';
const Header1 = () => {
  return (
    <div className="navbar-brand">
      <Link to="/" className="navbar-item logo" >
        <img src={HitechLogo} alt="logo" className='headerHitechLogo' />
      </Link>
      <div className='MobileOnlyShow'>
        <HeaderDrawer />
      </div>
    </div>
  );
}

export default Header1