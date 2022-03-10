import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <h2>Pic Some</h2>
      </Link>
      <Link to="/cart">
        <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
      </Link>
    </header>
  );
}

export default Header;

// # Challenge

// Set up React Router for our app. We should be able to do the following:

// 1. Click on the words "Pic Some" in the header to go to the "/" route, which should display the Photos component (found in the pages folder)

// 2. Click on the shopping cart icon in the header to go to the "/cart" route, which should display the Cart component (found in the pages folder)
