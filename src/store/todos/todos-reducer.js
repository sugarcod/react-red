import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./todos-const";

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: new Date().valueOf(),
          text: action.payload,
          completed: false
        }
      ];
    case REMOVE_TODO:
      return state.filter((elem) => elem.id !== action.payload);
    case TOGGLE_TODO:
      return state.map((elem) =>
        elem.id === action.payload
          ? { ...elem, completed: !elem.completed }
          : elem
      );
    default:
      return state;
  }
};
