import React from 'react';
import { useAuth } from './context/firebaseContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';  
import Home from './components/home';
import LoginPopup from './components/LoginPopUp';
import AddList from "./components/AddList"
import ViewLists from "./components/ViewLists"

function App() {
  const { currentUser } = useAuth();

  return (
    <div className="app">
      {/* Include the Sidebar component, if you are signed in.*/}
        {currentUser && <Sidebar />}  
        <Routes>
          <Route path="" element={currentUser ? <Home /> : <LoginPopup />} />
          <Route path="/add-list" element={currentUser ? <AddList /> : <LoginPopup />}/>
          <Route path="/view-lists" element={currentUser ? <ViewLists /> : <LoginPopup />} />
        </Routes>
    </div>
  );
}

export default App;
