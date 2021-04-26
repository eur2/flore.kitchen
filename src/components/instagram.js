import React, { Component } from 'react';

export default class extends Component {
  state = { photos: [] };

  async componentDidMount() {
    try {
      //https://www.instagram.com/graphql/query?query_id=17888483320059182&variables=%7B%22id%22:%224536541103%22,%22first%22:100,%22after%22:null%7D
      // Hack from https://stackoverflow.com/a/47243409/2217533
      const response = await fetch(
        `https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":"${this.props.userId}","first":${this.props.photoCount},"after":null}`
      );
      const { data } = await response.json();
      const photos = data.user.edge_owner_to_timeline_media.edges.map(
        ({ node }) => {
          const { id } = node;
          const caption = node.edge_media_to_caption.edges[0].node.text;
          const thumbnail = node.thumbnail_resources.find(
            (thumbnail) => thumbnail.config_width === this.props.thumbnailWidth
          );
          const { src, config_width: width, config_height: height } = thumbnail;
          const url = `https://www.instagram.com/p/${node.shortcode}`;
          return {
            id,
            caption,
            src,
            width,
            height,
            url,
          };
        }
      );
      this.setState({ photos });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <section id="instagram" className="flex row wrap">
        {this.state.photos &&
          this.state.photos.map(({ src, url, caption }) => (
            <div key={src} className="insta">
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src={src} alt={caption} />
                {/* <p className="none">{caption}</p> */}
              </a>
            </div>
          ))}
      </section>
    );
  }
}
