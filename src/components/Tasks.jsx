import Task from "./Task";

const initialTasks = [{ id: 123, text: "Eat lunch", done: false }];

const Tasks = () => {
  return (
    <div className='flex flex-col gap-3'>
      {initialTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
