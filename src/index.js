import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "../src/Component/App/App.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
