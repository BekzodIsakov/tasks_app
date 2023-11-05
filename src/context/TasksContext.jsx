import { createContext, useEffect, useReducer } from "react";
import { TasksReducer } from "../store/tasks/reducer";

export const TasksContext = createContext(null);

export default function TasksProvider({ children }) {
  const [state, dispatch] = useReducer(TasksReducer, [
    { id: "123", text: "Do homework", done: false },
  ]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
}
