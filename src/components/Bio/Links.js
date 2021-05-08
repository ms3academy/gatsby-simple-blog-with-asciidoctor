import React from 'react';

import { linksInBio } from 'config';

const Links = ()  => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          margin: 'auto',
        }}
      >
        {Object.entries(linksInBio).map(([displayText, url]) => {
          return (
            <a key={displayText}
              href={url}
              target="_blank"
              rel="author external noopener noreferrer"
            >
              {displayText}
            </a>
          );
        })}
      </div>
      <div style={{ float: 'right' }}>
        <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
          rss
        </a>
      </div>
    </>
  );
}

export default Links;
