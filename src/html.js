import React from 'react';

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="fr" {...this.props.htmlAttributes}>
        <head>
          <link
            rel="preload"
            href="/static/subset-Junicode-c12f32e7cf5bd65abb7c250684a892de.woff2"
            as="font"
            crossOrigin="anonymous"
          />
          {this.props.headComponents}
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </head>
        <body {...this.props.bodyAttributes}>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
