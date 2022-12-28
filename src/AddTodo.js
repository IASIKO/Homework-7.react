import React, { useContext, useState } from "react";
import { useTodoContext } from "./TodoListContext";

const AddTodo = () => {
  const [formValues, setFormValues] = useState({ name: "", someProp: "" });
  const { AddTodo } = useTodoContext();
  const onSubmit = (event) => {
    event.preventDefault();
    AddTodo({ ...formValues, id: new Date().toString() });
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <label>name</label>
      <input name="name" onChange={onInputChange} value={formValues.name} />
      <br />
      <label>someProp</label>
      <input
        name="someProp"
        onChange={onInputChange}
        value={formValues.someProp}
      />
      <button></button>
    </form>
  );
};

export default AddTodo;
