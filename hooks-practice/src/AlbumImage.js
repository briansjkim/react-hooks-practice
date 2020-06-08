import React from 'react';
import Albums from './Albums.js';

const AlbumImage = ({ album, photo }) => {
  return (
    <div>
      <div>
        <img src={photo.thumbnailUrl} alt=""></img>
        <p>{photo.title}</p>
        <p>{album.title}</p>
      </div>
    </div>
  )
}

export default AlbumImage;
