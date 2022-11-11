import './AddTask.scss';

const AddTask = props => {
  const {visible, addTask} = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { body, day, imp } = e.target;
    const task = {
      body: body.value,
      day: day.value,
      imp: imp.checked
    };
    addTask(task);
    body.value = ''
    day.value = '';
    imp.checked = false;
  }

  if (!visible) {
    return null;
  }

  return (
    <div className='AddTask'>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label>Task</label>
            <input
              class="boxx"
              type='text'
              name='body'
              placeholder="Ex:Attend Class"
              required
              />
          </div>
          <div className='form-control'>
            <label>Date and Time</label>
            <input
              class="boxx"
              type='text'
              name='day'
              placeholder="Ex:Today 7:00 PM"
              required
              />
          </div>
          <div className='form-control checkbox'>
            <label>Mark as important</label>
            <input
              class="check"
              type='checkbox'
              name='imp'              
              />
          </div>
          <button class="save" type='submit'>
            Save Task
          </button>
        </form>
      </div>
  )
}

export default AddTask;