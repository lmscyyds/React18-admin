// import React from "react";
import ReactDOM from "react-dom/client";
import "reset-css";
import "@/assets/styles/global.scss";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
// import Router from "./router";

// 状态管理
import { Provider } from "react-redux"
import store from "@/store"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    // <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

    // </React.StrictMode>
);
