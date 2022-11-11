import './Tasks.scss';
import Task from './Task';

const Tasks = (props) => {
	const {tasks, deleteTask, toggleImportant} = props;

	return (
		<div className='Tasks'>
			{
        tasks.length > 0
        ? tasks.map(
					task => (
						<Task 
							task={task} 
							deleteTask={deleteTask}
							toggleImportant={toggleImportant}
							key={task.id}
						/>
					)
				)
        : <p className='empty-msg'>No tasks to show</p>

			}
		</div>
	)
}

export default Tasks;