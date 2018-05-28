import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO
} from "../actions/types";

const samples = [
  { text: "Buy the milk", done: false },
  { text: "Submit the app", done: false },
  { text: "Write an article", done: true },
  { text: "Walk the dog", done: false },
  { text: "Go shopping on Amazon", done: false },
  { text: "Wash the dish", done: false },
  { text: "Call Steve", done: false },
  { text: "Call Ray", done: false },
  { text: "Buy a present to Antonio", done: false }
];

const initialState = {
  todolist: samples
};

const todolistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todolist: [...state.todolist, action.item]
      };
    case TOGGLE_TODO:
      return {
        todolist: state.todolist.map(
          todo => (todo.id == action.id ? { ...todo, done: !todo.done } : todo)
        )
      };
    case UPDATE_TODO:
      return {
        todolist: state.todolist.map(
          todo => (todo.id == action.item.id ? action.item : todo)
        )
      };
    case DELETE_TODO:
      return {
        todolist: this.state.todolist.filter(todo => todo.id != action.id)
      };
    default:
      return state;
  }
};

export default todolistReducer;
