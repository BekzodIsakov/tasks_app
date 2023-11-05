import { actionTypes } from "./actionTypes";

export function addTask(text) {
  const id = Date.now();

  return {
    type: actionTypes.add,
    id,
    text,
  };
}

export function editTask(id, text) {
  return {
    type: actionTypes.edit,
    id,
    text,
  };
}

export function deleteTask(id) {
  return {
    type: actionTypes.delete,
    id,
  };
}
