import NewTask from "./components/NewTask";
import Tasks from "./components/Tasks";
import TasksContextProvider, { TasksContext } from "./context/TasksContext";

function App() {
  return (
    <TasksContextProvider>
      <main>
        <NewTask />
        <Tasks />
      </main>
    </TasksContextProvider>
  );
}

export default App;
