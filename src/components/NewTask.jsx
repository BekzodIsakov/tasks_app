import { useContext, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import { addTask } from "../store/tasks/actions";

const NewTask = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TasksContext);

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(addTask(text));
    setText("");
  }

  return (
    <div className='mb-4'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={(e) => setText(e.target.value)}
          value={text}
          className='mr-2'
        />
        <button type='submit' disabled={!text}>
          Add
        </button>
      </form>
    </div>
  );
};

export default NewTask;
