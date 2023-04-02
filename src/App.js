import "./styles.css";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import { Filters } from "./components/Filter";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Redux Todo</h1>

      <Todo />
      <Filters />
      <h2>List</h2>
      <TodoList />
    </div>
  );
}
