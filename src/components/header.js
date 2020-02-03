import React from 'react';
import Img from 'gatsby-image';

// import { Link } from 'gatsby';

const Header = ({
  title,
  description,
  image,
  instagram,
  facebook,
  tel,
  email,
  street,
  city,
}) => (
  <header id="top">
    <nav>
      <a href="#prestations">Prestations</a>
      <a href="#biographie">Biographie</a>
      <a href="#references">Références</a>
    </nav>
    <h1>{title}</h1>
    <h2>{description}</h2>
    {image && (
      <Img
        fluid={image}
        style={{ maxWidth: '200px' }}
        alt={title}
        // className="mb1"
      />
    )}

    <nav className="">
      <a href={facebook} target="_blank" rel="noopener noreferrer">
        Facebook
      </a>
      <a href={instagram} target="_blank" rel="noopener noreferrer">
        Instagram
      </a>
      <a href={tel}>{tel}</a>
      <a href={`mailto:${email}`}>{email}</a>
      <p>
        {street}
        <br />
        {city}
      </p>
    </nav>
  </header>
);
export default Header;
