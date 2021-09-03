import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "styles/globalStyles";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
		<Router>
    <GlobalStyles />
    <App />
		</Router>
  </React.StrictMode>,
  document.getElementById("root")
);
