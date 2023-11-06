import { actionTypes } from "./actionTypes";

export function createTask({ id, text }) {
  return {
    type: actionTypes.add,
    id,
    text,
  };
}

export function editTask({ id, text }) {
  return {
    type: actionTypes.edit,
    id,
    text,
  };
}

export function completeTask({ id, done }) {
  return {
    type: actionTypes.done,
    id,
    done,
  };
}

export function deleteTask({ id }) {
  return {
    type: actionTypes.delete,
    id,
  };
}
