import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import firebase from "./util/Firebase";
import "./styles/tailwind.css";
import "./styles/styles.css";

console.log(firebase);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
