import React from 'react'
import { Link } from 'react-router-dom';
const Header1 = () => {
  return (
    <div className="navbar-brand">
      <Link  to="/" className="navbar-item logo" style={{marginLeft: "10%"}}>
        <img src="Sources/images/Hitech Logo-02.png" alt="logo" style={{width:"3%"}} />
      </Link>
    </div>
  );
}

export default Header1