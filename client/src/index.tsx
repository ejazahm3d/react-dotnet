import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "rsuite/dist/styles/rsuite-default.css";
import "./app/layout/styles.css";
import App from "./app/layout/App";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
