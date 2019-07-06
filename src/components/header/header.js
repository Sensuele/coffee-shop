import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

const Header = () => {
  return(
      <ul className="header">
        <li className="header__item">
          <Link to='/'>
            <img src="../img/logo/Logo.svg" alt="logo"/>
          </Link>
        </li>
        <li className="header__item">
          <Link to='/coffeepage'>Our coffee</Link>
        </li>
        <li className="header__item">
          <Link to='/pleasurepage'>For your pleasure</Link>
        </li>
      </ul>
  )
}

export default Header;