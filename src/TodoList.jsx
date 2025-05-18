import React, { useState } from "react";
import './Todolist.css'

const TodoList = () => {
  const [activity, setActivity] = useState(""); // Tracks current input
  const [listData, setListData] = useState([]); // Tracks list of activities

  // Add new activity to the list
  const addActivity = () => {
    if (activity.trim() !== "") {
      setListData((prevList) => [...prevList, activity.trim()]);
      setActivity(""); // Clear input after adding
    }
  };


  // Remove a specific activity
  const removeActivity = (index) => {
    setListData((prevList) => prevList.filter((_, i) => i !== index));
  };

  // Remove all activities
  const removeAll = () => {
    setListData([]);
  };

  return (
    <div className="container">
      <div className="header">Todo List</div>

      {/* Input Section */}
      <div className="addactivity">
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
      </div>

      {/* List Section */}
      <p className="list-heading">Here is your list</p>
      <div>
        {listData.length > 0 ? (
          listData.map((data, i) => (
            <div key={i} className="list-item">
              <span className="listData">{data}</span>
              <button
                className="remove-btn"
                onClick={() => removeActivity(i)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>No activities added yet. Start by adding one!</p>
        )}
      </div>

      {/* Remove All Button */}
      {listData.length > 0 && (
        <button className="remove-all-btn" onClick={removeAll}>
          Remove All
        </button>
      )}
    </div>
  );
};

export default TodoList;
