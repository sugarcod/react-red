import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path=":filter" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default Root;
