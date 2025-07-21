import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import headerbg from "./todo-bg.jpg"

// import headerbg from "./images/todo-header.png"; // Make sure to save the image in this path

function App() {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [st, setst] = useState(0);
  const [arr, setArr] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = () => {
    if (!text || !time) return;
    const newTasks = [...arr, { task: text, time, st }];
    setArr(newTasks);
    localStorage.setItem("key", JSON.stringify(newTasks));
    setText("");
    setTime("");
  };

  const toggleStatus = (item) => {
    const isCompleted = completedTasks.some((t) => t.task === item.task);
    if (isCompleted) {
      setCompletedTasks(completedTasks.filter((t) => t.task !== item.task));
    } else {
      setCompletedTasks([...completedTasks, item]);
    }
  };

  const deleteTask = (item) => {
    const updatedTasks = arr.filter((t) => t.task !== item.task);
    setArr(updatedTasks);
    setCompletedTasks(completedTasks.filter((t) => t.task !== item.task));
    localStorage.setItem("key", JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("key"));
    if (saved) setArr(saved);
  }, []);

  return (
    <div className='todo-container'>
      <div className="todo-wrapper">
        <img src={headerbg} alt="Header" className="header-img" />
        <h1 className='title'>To-Do List</h1>

        <div className="input-section">
          <input type="text" placeholder='What would you like to do?' value={text} onChange={(e) => setText(e.target.value)} />
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          <button onClick={addTask}>Add</button>
        </div>

        <div className="list-section">
          <h2>Tasks</h2>
          <ul className="task-list">
            <li className="task-header">
              <span>Task</span>
              <span>Time</span>
              <span>Status</span>
              <span>Delete</span>
            </li>
            {arr.map((item, idx) => (
              <li
                key={idx}
                className={`task-item ${completedTasks.some((t) => t.task === item.task) ? "completed" : "pending"}`}
              >
                <span>{item.task}</span>
                <span>{item.time}</span>
                <button onClick={() => toggleStatus(item)}>
                  {completedTasks.some((t) => t.task === item.task) ? "Pending" : "Complete"}
                </button>
                <button onClick={() => deleteTask(item)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
