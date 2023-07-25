import React from "react";
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "./icon/css/all.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Mylogin from "./components/login/login";

const root = ReactDOM.createRoot(document.getElementById("root"));
if (localStorage.getItem("fullname") === null) {
  root.render(
    <React.StrictMode>
      <Mylogin />
    </React.StrictMode>
  );
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
