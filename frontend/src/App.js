import React from 'react';
import './App.scss';
import Tasks from './Tasks';
import AddTask from './AddTask';
import { getMaxId } from './utils';
import {
  getAllTasks,
  addTask as addTaskToDB,
  deleteTask as deleteTaskFromDB,
  updateTask as updateTaskInDB
} from './services';

const App = props => {
  const [tasks, updateTasks] = React.useState([]);
  const [showAdd, updateShowAdd] = React.useState(false);

  React.useEffect(() => {
    getAllTasks()
      .then(res => updateTasks(res))
      .catch(e => console.error(e.message));
  }, []);

  const deleteTask = id => {    
    deleteTaskFromDB(id)
      .then(
        updateTasks(tasks.filter(t => t.id !== id))
      )
      .catch(e => console.error(e));    
  }

  const addTask = task => {    
    addTaskToDB(task)
      .then(res => updateTasks(tasks.concat(res)))
      .catch(e => console.error(e.message));    
  }

  const toggleImportant = (id) => {
    
    const task = tasks.find(t => t.id === id);
    const updTask = {
      body: task.body,
      day: task.day,
      imp: !task.imp
    };
    updateTaskInDB(id, updTask)
      .then(
        res => updateTasks( tasks.map(t => t.id === id ? res : t) )
      )
      .catch(e => console.error(e));        
  }

  return (
    <div className='App'>
      <div className='container'>
        <div className='Header'>
          <h1 className="head">To do List</h1> 
          <button 
            onClick={e => updateShowAdd(!showAdd)}
            className={`action-btn ${showAdd ? 'negative' : 'positive'}`}
            >
            {showAdd ? 'close' : 'add'}  
          </button>
        </div>
        <AddTask visible={showAdd} addTask={addTask}/> 
        <Tasks 
          tasks={tasks}
          deleteTask={deleteTask}
          toggleImportant={toggleImportant}
          />
        <div className='Footer'>

        </div>
      </div>
    </div>
  );
}

export default App;