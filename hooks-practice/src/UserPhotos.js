import React, { useState, useEffect } from 'react';
import AlbumImage from './AlbumImage.js';
import { useHistory } from 'react-router-dom';

const UserPhotos = () => {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const history = useHistory();
  const userId = history.location.state.user.id;
  const userName = history.location.state.user.name;


  useEffect(() => {
    async function fetchData() {
      try {
        const allAlbums = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
        const resAlbums = await allAlbums.json();
        setAlbums(resAlbums);
        // grabbing the userId for each album to grab photos for each album
        const albumUserId = resAlbums[0].userId;
        const allPhotos = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumUserId}/photos`);
        const resPhotos = await allPhotos.json();
        setPhotos(resPhotos);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [userId]);

  return (
    <div className="User-photos">
      <div className="User-header">
        <h1>{userName + "'s Photos"}</h1>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
          <div className="User-albums">
            {albums.map((album, idx) =>
              <AlbumImage album={album} photo={photos[idx]} key={idx} />
            )}
          </div>
        )}
    </div>
  )
}

export default UserPhotos;
