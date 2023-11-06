import { actionTypes } from "./actionTypes";

export function createTask({ id, done }) {
  return {
    type: actionTypes.done,
    id,
    done,
  };
}
