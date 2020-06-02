import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const UserPhotos = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const history = useHistory();
  const userId = history.location.state.user.id;
  const userName = history.location.state.user.name;

  // userId can change over time, so pass it into the array of variables
  useEffect(() => {
    async function fetchData() {
      try {
        const allAlbums = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
        const resAlbums = await allAlbums.json();
        setAlbums(resAlbums);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [userId]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
          <p>Hello from UserPhotos</p>
        )}
    </div>
  )
}

export default UserPhotos;
