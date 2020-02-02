import React from 'react';
import { Link } from 'gatsby';

const Header = ({ title, instagram, animation }) => (
  <header>
    <h1 className="mb">
      <Link to="/" className="b0">
        {title}
      </Link>
    </h1>
    <nav className="mb">
      <ul>
        {/* <li>
          <Link to="/2020" activeClassName="b0" partiallyActive={true}>
            Notes 2020
          </Link>
        </li> 
         <li>
          <Link to="/2019" activeClassName="b0" partiallyActive={true}>
            Notes 2019
          </Link>
        </li> */}
        <li>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            News
          </a>
        </li>
        <li>
          <Link to="/about" activeClassName="b0" partiallyActive={true}>
            About
          </Link>
        </li>
      </ul>
    </nav>

    <aside className="mb">
      <Link
        to="/shop"
        className={animation}
        activeClassName="b0"
        partiallyActive={true}
      >
        Shop
      </Link>
    </aside>
  </header>
);
export default Header;
