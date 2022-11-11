import './Task.scss';

const Task = ({task, deleteTask, toggleImportant}) => {
  const {id, body, day, imp} = task;

  const deleteThisTask = (e) => {    
    deleteTask(id);
  }

  const toggleThisImportant = e => {
    toggleImportant(id);
  }

  return (    
    <div className={`Task ${imp ? 'imp' : ''}`} onDoubleClick={toggleThisImportant}>
      <h3>{body}</h3>
      <p>{day}</p>
      <span className='delete' onClick={deleteThisTask}>&times;</span>      
    </div>    
  )
}

export default Task;