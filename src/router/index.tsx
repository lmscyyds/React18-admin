import React, { lazy } from "react";
import Home from "../views/Home";
// import About from "../views/About";
import Login from "../views/Login";
const Page301 = lazy(() => import("../views/Page301"));
const Page1 = lazy(() => import("../views/Page1"));
const Page2 = lazy(() => import("../views/Page2"));
import { Navigate } from "react-router-dom";

const withLoading = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>loading...</div>}>{comp}</React.Suspense>
);

const routes = [
    {
        path: "/",
        element: <Navigate to="/page1" />,
    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/page1",
                element: withLoading(<Page1 />),
            },
            {
                path: "/page2",
                element: withLoading(<Page2 />),
            },
            {
                path: "/page3/page301",
                element: withLoading(<Page301 />),
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "*",
        element: <Navigate to="/page1" />,
    },
];

export default routes;
