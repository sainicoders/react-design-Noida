
import React from 'react';
import logo from './Images/logo.png';

function Header() {
  return (
    <header>
      <div className="head">
        <img id="raw" src={logo} alt="foot"/>
        <input type="text" name="search" placeholder="Search For Brand Category, Coupon"/>
        <button type='submit' id="btsb">LOGIN/SIGNUP</button>
      </div>
      <nav className='onlynav'>
        <ul className='footnav'>
          <li>Home</li>
          <li>Deals</li>
          <li>Coupon</li>
          <li>Stores</li>
          <li>Contact us</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

