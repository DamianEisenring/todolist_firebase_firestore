import React, { createContext, useContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, query, collection, onSnapshot, where, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore';
import { useAuth } from './firebaseContext';

import { app } from '../config/firebaseConfig';

const FirestoreContext = createContext();

export const useFirestore = () => {
  return useContext(FirestoreContext);
};

export const FirestoreProvider = ({ children }) => {
  const { currentUser, signOut } = useAuth();
  const db = getFirestore(app);
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    if (currentUser) {
      const q = query(collection(db, 'todo'), where('userId', '==', currentUser.uid));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let todosArr = [];
        querySnapshot.forEach((doc) => {
          todosArr.push({ ...doc.data(), id: doc.id });
        });
        setTodos(todosArr);
        console.log("fetched todos: ", todosArr)
      });
  
      return () => unsubscribe();
    }
  }, [currentUser, db]);  

  const updateTodo = async (id, newData) => {
    const todoRef = doc(db, 'todo', id);
    await updateDoc(todoRef, newData);
  };

  const deleteTodo = async (id) => {
    const todoRef = doc(db, 'todo', id);
    await deleteDoc(todoRef);
  };

  const addTodo = async (newTodo) => {
    console.log("Current User: ", currentUser)
    if (currentUser) {
      const userId = currentUser.uid;
      newTodo.userId = userId;
      await addDoc(collection(db, 'todo'), newTodo);
    } else {
      console.error("User not authenticated. Cannot add todo.");
    }
  };
  
  
    

  return (
    <FirestoreContext.Provider value={{ todos, updateTodo, deleteTodo, addTodo }}>
      {children}
    </FirestoreContext.Provider>
  );
};

export default FirestoreContext;
