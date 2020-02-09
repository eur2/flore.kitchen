import React from 'react';
import Img from 'gatsby-image';

const Header = ({ title, description, image, tel, email, street, city }) => (
  <header id="contact" className="flex w100 wrap mh100 ai-center jc-center">
    <div className="w100">
      {/* <h1>
        <a href="">{title}</a>
      </h1> */}
      <h2>{description}</h2>
      <h2>
        <a href={`tel:${tel}`}>{tel}</a>
      </h2>
    </div>
    <div className="w100">
      {image && (
        <a href="#instagram">
          <Img
            fluid={image}
            // style={{ maxwidth: '180px' }}
            alt={title}
            className="h50 m-auto"
          />
        </a>
      )}
    </div>
    <div className="w100">
      <h2>
        {street}, {city}
        <br />
        <a href={`mailto:${email}`}>{email}</a>
        <br />
        <br />
      </h2>
    </div>
  </header>
);
export default Header;

{
  /* <nav className="nav">
      <a href="#contact">Contact</a>
      <a href="#prestations">Prestations</a>
      <a href="#biographie">Biographie</a>
      <a href="#references">Références</a>
    </nav> */
}
