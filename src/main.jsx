import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "~bootstrap/scss/bootstrap";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "./UseContext/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider timeout={600000}>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
// Default timeout to 10 minutes (600,000 milliseconds)
