import React from 'react';

const AlbumImage = ({ album, photo }) => {
  return (
    <div className="Album-image">
      <div className="Photo-details">
        <img src={photo.thumbnailUrl} alt=""></img>
        <h2>{photo.title}</h2>
        <p>{album.title}</p>
      </div>
      <div>

      </div>
    </div>
  )
}

export default AlbumImage;
