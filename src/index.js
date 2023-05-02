import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store-hook/product-store";
import "./index.css";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));

configureStore();
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
