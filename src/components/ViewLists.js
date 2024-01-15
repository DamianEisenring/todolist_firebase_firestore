import React from 'react';
import { useFirestore } from '../context/firestoreContext';
import "./ViewLists.css"

const ViewLists = () => {
  const { todos } = useFirestore();

  const todosByDay = todos.reduce((acc, todo) => {
    const day = todo.day || 'Other';
    acc[day] = [...(acc[day] || []), todo];
    return acc;
  }, {});

  const daysOfWeek = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  return (
    <div>
      <header>
        <h1>Todos</h1>
      </header>
      <div className="days">
        {daysOfWeek.map((day) => (
          <div className="day" key={day}>
            <h3>{day}</h3>
            <ul>
              {todosByDay[day]?.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewLists;
