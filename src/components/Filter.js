import { useSelector, useDispatch } from "react-redux";
import { selectActiveFilter } from "../store/filters/filters-selectors";
import { setFilter } from "../store/filters/filters-action";
import { Link } from "react-router-dom";

const Filters = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);
  return (
    <div>
      <Link
        onClick={() => dispatch(setFilter("all"))}
        style={{ color: activeFilter === "all" ? "red" : "black" }}
      >
        All
      </Link>

      <Link
        onClick={() => dispatch(setFilter("active"))}
        style={{ color: activeFilter === "active" ? "red" : "black" }}
      >
        Active
      </Link>

      <Link
        onClick={() => dispatch(setFilter("completed"))}
        style={{ color: activeFilter === "completed" ? "red" : "black" }}
      >
        Completed
      </Link>
    </div>
  );
};

export { Filters };
