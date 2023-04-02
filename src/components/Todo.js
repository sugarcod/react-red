import { useDispatch } from "react-redux";
import { addTodo } from "../store/todos/todos-action";
import React from "react";

const Todo = () => {
  const [td, setTd] = React.useState("");

  const dispatchNewTodo = () => {
    dispatch(addTodo(td));
    setTd("");
  };

  const dispatch = useDispatch();
  return (
    <div>
      <input
        value={td}
        onKeyDown={(e) => (e.key === "Enter" ? dispatchNewTodo() : null)}
        onChange={(e) => setTd(e.target.value)}
      />
      <button onClick={() => dispatchNewTodo()}>add</button>
    </div>
  );
};

export default Todo;
