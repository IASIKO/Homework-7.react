import React from "react";
import AddTodo from "./AddTodo";
import "./App.css";
import TodoListComponent from "./TodoList";
import { TodoListProvider } from "./TodoListContext";

function App() {
  return (
    <>
      <TodoListProvider>
        <AddTodo />
        <TodoListComponent/>
      </TodoListProvider>
    </>
  );
}

export default App;
