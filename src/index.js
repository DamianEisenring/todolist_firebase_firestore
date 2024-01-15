import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client';


//Auth Firebase
import { UserAuthContextProvider } from "./context/firebaseContext";

//Routing
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link } from 'react-router-dom'

import { FirestoreProvider } from './context/firestoreContext';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <FirestoreProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FirestoreProvider>
    </UserAuthContextProvider>
  </React.StrictMode>
);

