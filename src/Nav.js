import React, { useContext } from "react";
import { TodoListContext } from "./TodoListContext";

const Nav = () => {
  const { user, list } = useContext(TodoListContext);
  if (user.isLoggedIn) {
    return (
      <div>
        <h1>
          {user.user} has {list.length} tasks
        </h1>
      </div>
    );
  } else {
    return <h1>user is not logged in</h1>
  }
};

export default Nav;
