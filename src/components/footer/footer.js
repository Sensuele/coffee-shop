import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';

const Footer = () => {
  return(
    <footer>
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-5 offset-lg-4">
            <ul className="footer">
              <li className="footer__item">
                <Link to='/'>
                  <img src="../img/logo/Logo_black.svg" alt="logo"/>
                </Link>
              </li>
              <li className="footer__item">
                <Link to='/coffeepage'>Our coffee</Link>
              </li>
              <li className="footer__item">
                <Link to='/pleasurepage'>For your pleasure</Link>
              </li>
            </ul>
          </div>
        </div>
        <img className="beanslogo" src="../img/logo/Beans_logo_dark.svg" alt="Beans logo"/>
      </div>
    </footer>
  )
}

export default Footer;