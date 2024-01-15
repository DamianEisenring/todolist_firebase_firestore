import React from 'react';
import { useAuth } from '../context/firebaseContext'; 
import '../components/sidebar.css';
import { FaHome } from "react-icons/fa";
import { IoLogOutOutline, IoAddCircleOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
import Home from '../components/home';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
    const navigate = useNavigate();
    const { currentUser, signOut } = useAuth();

    const handleSignOut = async () => {
      try {
        await signOut();
      } catch (error) {
        console.error('Fehler beim Ausloggen:', error.message);
      }
    };
    const navigateToHome = () => {
        navigate('/');
    }
    const navigateToAddLists = () => {
        navigate('/add-list');
    }
    const navigateToViewLists = () => {
        navigate('/view-lists');
    }
    return(
        <div className='sidebar'>
            <FaHome className='FaHome' onClick={navigateToHome} /> 
            <CiViewList className='List_ToDoLists' onClick={navigateToViewLists}/>
            <IoAddCircleOutline className="NewList_btn" onClick={navigateToAddLists}/>
            <IoLogOutOutline className='IoLogOutOutline' onClick={handleSignOut}/>
        </div>
    )
}
export default Sidebar

