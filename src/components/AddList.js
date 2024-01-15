import React, { useState } from 'react';
import { useFirestore } from '../context/firestoreContext';
import { useAuth } from '../context/firebaseContext';
import './AddList.css';

const AddList = () => {
  const { addTodo } = useFirestore();  

  const [newListTitle, setNewListTitle] = useState('');
  const [newDay,  setNewDay] = useState('');

  const {currentUser} = useAuth();

  const handleAddList = async () => {

    console.log("handleAddList is called")
    if (newListTitle.trim() !== '') {
      const newTodo = {
        day: newDay,
        title: newListTitle,
        userId: currentUser.uid, 
      };

        console.log("New Todo:", newTodo);
  
      await addTodo(newTodo);
  
      setNewListTitle('');
      setNewDay('');
    } else {
      alert('Please enter a title and day for the new list.');
    }
    console.log("handleAddList completed");
  };
  
  const daysOfWeek = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  return (
    <div className='wrapper-addList'>
      <form>
        <h1>Add New Todo List</h1>
        <input
          type="text"
          className='input-box-addList'
          placeholder="Enter list title"
          value={newListTitle}
          onChange={(e) => setNewListTitle(e.target.value)}
        />
       
         <select
          className='input-box-addDay'
          value={newDay}
          onChange={(e) => setNewDay(e.target.value)}
        >
          <option value="" disabled>Select a day</option>
          {daysOfWeek.map((day) => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
        <button className='btn-addList' onClick={handleAddList}>Add List</button>
      </form>
    </div>
  );
};

export default AddList;
