import { useContext, useEffect, useRef, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import { actionTypes } from "../store/actionTypes";
import {
  completeTask,
  createTask,
  deleteTask,
  editTask,
} from "../store/actions";

const Task = ({ task }) => {
  const { id, text: initialText, done: initialDone } = task ? task : {};

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);
  const [isDone, setIsDone] = useState(initialDone);

  const inputRef = useRef();
  const { dispatch } = useContext(TasksContext);

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
    dispatch(editTask({ id, text }));
  }

  function handleDone(e) {
    setIsDone(e.target.checked);
  }

  function handleDelete() {
    dispatch(deleteTask({ id }));
  }

  useEffect(() => {
    dispatch(completeTask({ id, done: isDone }));
  }, [isDone]);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  if (isEditing) {
    return (
      <div>
        <form onSubmit={handleSubmit} className='flex gap-2'>
          <input
            ref={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div>
            <button type='submit' className='mr-1' disabled={!text}>
              Done
            </button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className='flex gap-4'>
      <input type='checkbox' onChange={handleDone} />
      {text}
      <div>
        <button onClick={() => setIsEditing(true)} className='mr-1'>
          Edit
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
