import { createStore, applyMiddleware } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from "./rootReducer";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";

export const configureStore = () => {
  const persistedState = loadState();

  const store = createStore(rootReducer, persistedState, devToolsEnhancer());

  store.subscribe(
    throttle(() => {
      saveState({ todos: store.getState().todos });
    }),
    1000
  );

  return store;
};
