import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return <>{todos.map((todo) => {})}</>;
}

export default Todo;
