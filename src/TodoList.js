import React from "react";
import TodoItem from "./TodoItem";
import { useTodoContext } from "./TodoListContext";

const TodoListComponent = () => {
  const { todoList } = useTodoContext();
  console.log(todoList);
  return (
    <div>
     {todoList.map((item) => {
      return <TodoItem key={item.id} {...item}/>
     })}
      
    </div>
  );
};

export default TodoListComponent;
