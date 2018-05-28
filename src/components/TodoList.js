import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
  AsyncStorage
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import Todo from "./Todo";

const TINT_COLOR = "rgb(4, 159, 239)";

StatusBar.setBarStyle("light-content");

export default class TodoList extends React.Component {
  renderRow = ({ item }) => (
    <Todo
      data={item}
      onToggle={() => this._toggle(item)}
      onInfoPress={() => this._edit(item)}
    />
  );

  _keyExtractor = (item, index) => {
    // aggiungere un id ad ogni elemento pari alla sua posizione
    item.id = index;
    return String(index);
  };

  componentDidMount() {
    // carichiamo la todolist da AsyncStorage
    this.props.navigation.setParams({ add: this._add });
    // AsyncStorage.getItem("todolist").then(response =>
    //   this.setState({ todolist: JSON.parse(response) || todolist })
    // );
  }

  _update = todolist => {
    //this.setState({ todolist });
    //AsyncStorage.setItem("todolist", JSON.stringify(todolist));
    //
  };

  _edit = item => {
    this.props.navigation.navigate("AddTodo", {
      currentTodo: item,
      onSaveEdit: this._saveEdit
    });
  };

  // _saveEdit = updatedTodo => {
  //   //console.log(updatedTodo);
  //   //alert("salvataggio di ", item.text);
  //   // aggiornare la todolist
  //   // costruiamo una nuova todolist a partire dalla vecchia, sostituendo  l'item appena modificato
  //   // const newTodolist = this.state.todolist.map(
  //   //   todo => (todo.id === updatedTodo.id ? updatedTodo : todo)
  //   // );
  //   // // aggiornare lo stato con la nuova todolist
  //   // //this.setState({ todolist: newTodolist });
  //   // this._update(newTodolist);
  //   this.props.update(updatedTodo);
  // };

  _toggle = item => {
    /* let newTodolist = [];
    for (let i = 0; i < this.state.todolist.length; i++) {
      let currentTodo = this.state.todolist[i];
      if ( currentTodo == item) {
        currentTodo.done = !currentTodo.done;
      }
      newTodolist.push(currentTodo)
    } */

    // let newTodolist = this.state.todolist.map(
    //   currentTodo =>
    //     currentTodo == item
    //       ? { ...currentTodo, done: !currentTodo.done }
    //       : currentTodo
    // );

    // //this.setState({ todolist: newTodolist});
    // this._update(newTodolist);
    this.props.toggle(item.id);
  };

  // _add = todo => {
  //   //this.setState({ todolist: [...this.state.todolist, todo] }, this._update );
  //   //let newTodolist = [...this.state.todolist, todo];
  //   //this._update(newTodolist);
  //   this.props.add(todo);
  //   // salvataggio della todolist sul AsyncStorage
  // };
  //console.log("ci siamo");
  //const newTodolist = this.state.todolist.concat([todo]);
  //console.log(newTodolist);

  render() {
    //console.log(this.state.todolist);
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.todolist}
          renderItem={this.renderRow}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

TodoList.navigationOptions = ({ navigation }) => {
  return {
    title: "Checklist",
    headerStyle: {
      backgroundColor: TINT_COLOR
    },
    headerTintColor: "white",
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("AddTodo")}>
        <Ionicons
          style={{ paddingHorizontal: 15 }}
          name="ios-add-outline"
          size={34}
          color="white"
        />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: "center",
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: "white"
  }
});
