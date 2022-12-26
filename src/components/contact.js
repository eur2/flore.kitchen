import * as React from 'react';

const Contact = ({ tel, email, address }) => (
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
  </section>
);
export default Contact;
