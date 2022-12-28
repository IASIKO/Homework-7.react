import React, { useContext } from "react";
import AddTodo from "./AddTodo";
import "./App.css";
import TodoListComponent from "./TodoList";
import { TodoListProvider } from "./TodoListContext";
import Nav from "./Nav";

function App() {
  return (
    <>
      <TodoListProvider>
        <Nav />
        <AddTodo />
        <TodoListComponent/>
      </TodoListProvider>
    </>
  );
}

export default App;
