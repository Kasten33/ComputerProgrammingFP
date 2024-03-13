import React from "react";
import Cart from "../Cart/Cart";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item"></div>
          <div className="item">
            <span>USD</span>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            Store
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/products/3">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Stores
            </Link>
          </div>
          <div className="icons">
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <span className="cartItem">0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
