import React from 'react';
import Img from 'gatsby-image';

const Header = ({
  title,
  subtitle,
  image,
  logo,
  tel,
  facebook,
  instagram,
  email,
}) => (
  <header id="contact" className="w100 jc-center">
    <div className="fixed t0 l0 r0 p pb0 flex jc-sb bgwhite">
      <div>
        <a href={facebook} target="_blank" rel="noopener noreferrer">
          <svg
            width="30"
            height="30"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Facebook</title>
            <path d="M1376 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-188v-595h199l30-232h-229v-148q0-56 23.5-84t91.5-28l122-1v-207q-63-9-178-9-136 0-217.5 80t-81.5 226v171h-200v232h200v595h-532q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960z" />
          </svg>
        </a>
      </div>
      <div>
        <h1>
          <a href="#contact">{title}</a>
        </h1>
      </div>
      <div>
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <svg width="30" height="30" viewBox="0 0 24 24">
            <title>Instagram</title>
            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
          </svg>
        </a>
      </div>
    </div>
    <div className="header w100">
      {/* <h1>
        <a href="">{title}</a>
      </h1> */}

      <h2>{subtitle}</h2>

      <h2>
        <a href={`tel:${tel}`}>{tel}</a>
      </h2>
      <h2>
        <a href={`mailto:${email}`}>{email}</a>
      </h2>
      {logo && (
        <a href="#instagram">
          <Img
            fluid={logo}
            // style={{ maxwidth: '180px' }}
            alt={title}
            className="h50 m-auto p"
          />
        </a>
      )}
    </div>
    {image && <Img fluid={image} style={{ maxwidth: '100%' }} alt={title} />}
  </header>
);
export default Header;
