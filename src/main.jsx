if (import.meta.env.DEV) {
  import("eruda").then(({ default: eruda }) => eruda.init());
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
