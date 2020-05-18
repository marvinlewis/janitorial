import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='nav-div'>
      <div className="phone-div">
        <phone>800-940-7119</phone>
      </div> 
      <div className='link-div'>
        <Link>Home</Link>
        <Link>Free Quote</Link>
        <Link>About Us</Link>
        <Link>Photos</Link>
        <Link>Careers</Link>
      </div>
    </div>
  );
};
export default NavBar;
