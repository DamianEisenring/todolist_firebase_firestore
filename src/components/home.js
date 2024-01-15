import React from 'react';
import { useAuth } from '../context/firebaseContext'; 

const Home = () => {
  const { currentUser, signOut } = useAuth();

  return (
    <div>
      <h1>Willkommen zu Hause!</h1>
      {currentUser && (
        <div>
          <p>Angemeldet als: {currentUser.email}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
