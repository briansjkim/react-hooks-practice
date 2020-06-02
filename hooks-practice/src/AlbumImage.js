import React from 'react';
import Albums from './Albums.js';

const AlbumImage = ({ albums }) => {
  return (
    <div>
      <div>
        {albums.map((album, idx) =>
          <Albums album={album} key={idx} />
        )}
      </div>
    </div>
  )
}

export default AlbumImage;
