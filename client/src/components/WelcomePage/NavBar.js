import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='nav-div'>
      <div className="phone-div">
        <p>800-940-7119</p>
      </div> 
      <div className='link-div'>
        <Link to="/">Home</Link>
        <Link to='/freequote'>Free Quote</Link>
        <Link to='/aboutus'>About Us</Link>
        <Link to='/photos'>Photos</Link>
        <Link to='/careers'>Careers</Link>
      </div>
    </div>
  );
};
export default NavBar;
