import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";

import "./reset.css";
import "./index.css";
import ScrollToTop from "components/Scroll-to-top";
import { OrderContextProvider } from "Context/OrderContext";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <OrderContextProvider>
          <App />
        </OrderContextProvider>
      </ScrollToTop>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
