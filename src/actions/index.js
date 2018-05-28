import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO } from "./types";

export const addTodo = item => ({
  type: ADD_TODO,
  item
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});

export const updateTodo = item => ({
  type: UPDATE_TODO,
  item
});
