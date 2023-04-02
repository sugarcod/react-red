import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { configureStore } from "./store";
import Root from "./Root";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Root />);
