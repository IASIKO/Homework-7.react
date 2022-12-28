import React, { useEffect, useState } from "react";
import { useTodoContext } from "./TodoListContext";

const AddTodo = () => {
  const [formValues, setFormValues] = useState({ name: "", someProp: "" });
  const { addTodo , selectedTodo} = useTodoContext();
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo({ ...formValues, id: new Date().toString() });
    setFormValues({name:"", someProp:""})
  };

    useEffect(() => {
      if(selectedTodo.name || selectedTodo.someProp){
        setFormValues(selectedTodo)
      }
    }, [selectedTodo])


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
