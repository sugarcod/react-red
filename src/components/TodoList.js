import { useSelector, useDispatch } from "react-redux";
import { selectVisibleTodos } from "../store/todos/todos-selector";
import { toggleStatus, removeTodo } from "../store/todos/todos-action";
import { selectActiveFilter } from "../store/filters/filters-selectors";

const TodoList = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);
  const list = useSelector((state) => selectVisibleTodos(state, activeFilter));
  return (
    <div>
      <ul>
        {list.map((elem) => (
          <div key={elem.id}>
            <input
              type="checkbox"
              checked={elem.completed}
              onChange={() => dispatch(toggleStatus(elem.id))}
            />
            {elem.text}
            <button onClick={() => dispatch(removeTodo(elem.id))}>
              delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
