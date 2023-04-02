import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./todos-const";

export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
export const removeTodo = (id) => ({ type: REMOVE_TODO, payload: id });
export const toggleStatus = (id) => ({ type: TOGGLE_TODO, payload: id });
