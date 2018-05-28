import React from "react";
import { StackNavigator } from "react-navigation";

import TodoList from "./src/containers/TodoList";
import AddTodo from "./src/components/AddTodo";
import { createStore } from "redux";
import todolistReducer from "./src/reducers";
import { Provider } from "react-redux";

const store = createStore(todolistReducer);

const MainNav = StackNavigator(
  {
    TodoList: {
      screen: TodoList
    },
    AddTodo: {
      screen: AddTodo
    }
  },
  {
    initialRouteName: "TodoList",
    mode: "modal"
  }
);

const App = () => (
  <Provider store={store}>
    <MainNav />
  </Provider>
);

export default App;
