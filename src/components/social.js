import React from 'react';

const Social = ({ facebook, instagram }) => (
  <aside>
    <div className="fixed t0 l0 p">
      <a href={facebook} target="_blank" rel="noopener noreferrer">
        Facebook
      </a>
    </div>
    <div className="fixed t0 r0 p">
      <a href={instagram} target="_blank" rel="noopener noreferrer">
        Instagram
      </a>
    </div>
  </aside>
);
export default Social;
