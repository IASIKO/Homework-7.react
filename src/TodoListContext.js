import { createContext, useContext, useState } from "react";

export const TodoListContext = createContext();

export const useTodoContext = () => useContext(TodoListContext);

export const TodoListProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    setTodoList((prevTodolist) => [...prevTodolist, todo]);
  };

  const deleteTodo = (itemId) => {
    setTodoList((prevTodolist) =>
      prevTodolist.filter(({ id }) => id !== itemId)
    );
  };

  const editTodo = () => {}

  return (
    <TodoListContext.Provider value={{ todoList, setTodoList, addTodo, deleteTodo, editTodo }}>
      {children}
    </TodoListContext.Provider>
  );
};
