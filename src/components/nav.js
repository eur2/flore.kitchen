import React from 'react';
import { Link } from 'gatsby';

const Nav = ({ mail, instagram, facebook }) => (
  <>
    <nav className="mb">
      <ul>
        <li>
          <Link
            to="/about/manifesto"
            activeClassName="b0"
            partiallyActive={true}
          >
            Manifesto
          </Link>
        </li>
        <li>
          <Link
            to="/about/acknowledgments"
            activeClassName="b0"
            partiallyActive={true}
          >
            Acknowledgments
          </Link>
        </li>
        <li>
          <a href={`mailto:${mail}`}>{mail}</a>
        </li>
        <li>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
        <li>
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </li>
      </ul>
    </nav>
  </>
);
export default Nav;
