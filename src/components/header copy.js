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
  <header id="contact" className="flex w100 wrap mh100 ai-center jc-center">
    <nav className="nav">
      <a href="#contact">Contact</a>
      <a href="#prestations">Prestations</a>
      <a href="#biographie">Biographie</a>
      <a href="#references">Références</a>
    </nav>
    <div className="w100">
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
    <div className="w100">
      {image && (
        <Img
          fluid={image}
          // style={{ maxwidth: '180px' }}
          alt={title}
          className="h50 m-auto"
        />
      )}
    </div>
    <footer className="flex w100">
      <div>
        <a
          className="block"
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </div>
      <div>
        <a className="block" href={`tel:${tel}`}>
          {tel}
        </a>
        <a className="block" href={`mailto:${email}`}>
          {email}
        </a>
        {street}, {city}
      </div>
      <div>
        <a
          className="block"
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
    </footer>
  </header>
);
export default Header;
