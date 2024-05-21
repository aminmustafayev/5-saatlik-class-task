import React from "react";
import { Link } from "react-router-dom";
import "./header.scss"

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="row">
              <div className="nav">
                <div className="nav-div">
                  <h1>Selling.</h1>
                </div>
                <div className="nav-ul">
                  <ul>
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/basket"}>Basket</Link>
                    </li>
                    <li>
                      <Link to={"/wishlist"}>Wishlist</Link>
                    </li>
                    <li>
                      <Link to={"/add"}>Add</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
