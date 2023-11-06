import { actionTypes } from "../store/actionTypes";

export function TasksReducer(state, action) {
  switch (action.type) {
    case actionTypes.add: {
      const newTasks = [
        ...state,
        { id: action.id, text: action.text, done: false },
      ];
      return newTasks;
    }
    case actionTypes.edit: {
      const newTasks = state.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            text: action.text,
          };
        } else {
          return task;
        }
      });

      return newTasks;
    }
    case actionTypes.delete: {
      const newTasks = state.filter((task) => task.id !== action.id);
      return newTasks;
    }
    case actionTypes.done: {
      const newTasks = state.map((task) => {
        if (task.id === action.id) {
          console.log({ task });
          return {
            ...task,
            done: action.done,
          };
        } else {
          return task;
        }
      });

      console.log({ newTasks });
      return newTasks;
    }

    default:
      return state;
  }
}
