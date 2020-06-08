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

  // userId can change over time, so pass it into the array of variables
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const allAlbums = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
  //       const resAlbums = await allAlbums.json();
  //       setAlbums(resAlbums);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   fetchData();
  // }, [userId]);

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
    <div>
      <div>
        <h1>{userName + "'s Photos"}</h1>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
          // map here?
          // but then I wouldn't be able to make api calls in the next child component
          <div>
            {/* <AlbumImage albums={albums} /> */}
            {albums.map((album, idx) =>
              <AlbumImage album={album} photo={photos[idx]} key={idx} />
            )}
          </div>
        )}
    </div>
  )
}

export default UserPhotos;
