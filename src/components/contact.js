import * as React from 'react';

const Contact = ({ tel, email, address, cgv }) => (
  <section id="contact">
    <header>
      <h3>Contact</h3>
      <h2>
        <a href={`tel:${tel}`}>{tel}</a>
      </h2>
      <h2>
        <a href={`mailto:${email}`}>{email}</a>
      </h2>
    </header>
    <p>{address}</p>
    <p><a href={`${cgv}`}>Conditions générales de vente</a></p>
  </section>
);
export default Contact;
