import React from 'react'
import { Link } from 'react-router-dom';
import HitechLogo from "./hitech_logo.png";
const Header1 = () => {
  return (
    <div className="navbar-brand">
      <Link  to="/" className="navbar-item logo" style={{marginLeft: "10%"}}>
        <img src={HitechLogo} alt="logo" className='headerHitechLogo' />
      </Link>
    </div>
  );
}

export default Header1