import { useContext } from "react";
import Task from "./Task";
import { TasksContext } from "../context/TasksContext";

const Tasks = () => {
  const { state } = useContext(TasksContext);
  console.log(state);

  return (
    <div className='flex flex-col gap-3'>
      {state.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
