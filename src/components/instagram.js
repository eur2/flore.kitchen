import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
const Instagram = () => {
  // Client-side Runtime Data Fetching
  const [index, setIndex] = useState(0);
  useEffect(() => {
    // get data from GitHub api
    fetch(
      `https://www.instagram.com/graphql/query/?query_hash=e769aa130647d2354c40ea6a439bfc08&variables=%7B%22id%22%3A%224536541103%22%2C%22first%22%3A12%2C%22after%22%3A%22QVFCVHltbFR6LTI4ZVJ3cmVfaEFyQUdBU3JSSG9xS05PcTlWdlFMRmFvV0lCdGZBaThPWUQ2dlMzUjlYcllrWGwxU3BPdkpQbEhEN1VOeUZoZncwLUx0Yw%3D%3D%22%7D`
    )
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setIndex(
          resultData.data.user.edge_owner_to_timeline_media.edges[1].node
        );
      }); // set data for the number of stars
  }, []);
  return (
    <section>
      <figure className="flex w100">
        <img className="h50 m-auto" src={index.display_url} />
        <figcaption></figcaption>
      </figure>
    </section>
  );
};
export default Instagram;
