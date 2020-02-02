import React from 'react';
// import { Link } from 'gatsby';

const Price = ({
  price,
  shippingWorldPaypal,
  shippingWorldPrice,
  shippingEuPaypal,
  shippingEuPrice,
}) => (
  <div>
    <div>{price} €</div>
    <div>
      <a href={shippingEuPaypal} target="_blank" rel="noopener noreferrer">
        Add to cart
      </a>{' '}
      Shipping to Europe +{shippingEuPrice}€
    </div>
    <div>
      <a href={shippingWorldPaypal} target="_blank" rel="noopener noreferrer">
        Add to cart
      </a>{' '}
      Shipping Elsewhere +{shippingWorldPrice}€
    </div>
    <br />
  </div>
);
export default Price;
