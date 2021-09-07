import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "store";
import { GlobalStyles } from "styles/globalStyles";
import App from "./App";

const queryClient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <Provider store={store}>
				<QueryClientProvider client={queryClient}>
        <App />
				</QueryClientProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
