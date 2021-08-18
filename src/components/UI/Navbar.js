import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../UI/Navbar.css';
import { Button } from './Button';

const Navbar = () => {
    const [ menu, setMenu ] = useState(false);
    const [button, setButton] = useState(true);

    const handleMenu = () => setMenu(!menu);
    const closeMobileMenu = () => setMenu(false);

    //Hides the button on mobile:
    const showButtonHandler = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
      showButtonHandler()
    }, []);

    window.addEventListener('resize', showButtonHandler);

    return (
      <Fragment>
        <nav className="navbar">
          <div className="container__navbar">
            <Link
              to="/travel-website/home"
              className="logo__navbar"
              onClick={closeMobileMenu}
            >
              Kalam <i className="fab fa-typo3"></i>
            </Link>
            <div className="menu-icon__navbar" onClick={handleMenu}>
              <i className={menu ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul
              className={menu ? "nav-menu__navbar active" : "nav-menu__navbar"}
            >
              <li className="nav-item__navbar">
                <Link
                  to="/travel-website/home"
                  className="nav-links__navbar"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item__navbar">
                <Link
                  to="/travel-website/services"
                  className="nav-links__navbar"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item__navbar">
                <Link
                  to="/travel-website/products"
                  className="nav-links__navbar"
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li className="nav-item__navbar">
                <Link
                  to="/travel-website/sign-up"
                  className="nav-links-mobile__navbar"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
          </div>
        </nav>
      </Fragment>
    );
}

export default Navbar