import { actionTypes } from "./actionTypes";

export function TasksReducer(state, action) {
  switch (action.type) {
    case actionTypes.add:
      return [...state, { id: action.id, text: action.text, done: false }];
    case actionTypes.edit: {
      const newState = state.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            text: action.text,
          };
        } else {
          return task;
        }
      });

      return newState;
    }
    case actionTypes.delete: {
      const newState = state.filter((task) => task.id !== action.id);
      return newState;
    }
  }
}
