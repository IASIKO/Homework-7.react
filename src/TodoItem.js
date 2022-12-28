import React from "react";
import { useTodoContext } from "./TodoListContext";

const TodoItem = ({ name, id, someProp }) => {
  const { deleteTodo, editTodo } = useTodoContext();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: 300,
      }}
    >
      <h1>{name}</h1>
      <h1>{someProp}</h1>
      <button
        onClick={() => {
          deleteTodo(id);
        }}
      >
        delete
      </button>
      <button onClick={editTodo}>edit</button>
    </div>
  );
};

export default TodoItem;
