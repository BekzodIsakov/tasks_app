import { createContext, useReducer } from "react";
import { TasksReducer } from "../store/TasksReducer";

export const TasksContext = createContext(null);

const initialTasks = [
  { id: 123, text: "Eat lunch", done: false },
  { id: 456, text: "Do homework", done: false },
];

// context provider
function TasksContextProvider({ children }) {
  const [state, dispatch] = useReducer(TasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
}

export default TasksContextProvider;
