import React from "react";

const MonthSidebar = React.lazy(() => import("./Component/MonthSidebar"));
const Login = React.lazy(() => import("./Component/page/Login"));
const MonthPage = React.lazy(() => import("./Component/MonthPage"));
const Home = React.lazy(() => import("./Component/Home"));
const Expence = React.lazy(() => import("./Component/expence"));
const Month = React.lazy(() => import("./Component/Month"));

export const router = [
    {
        path: "/login",
        name: "login",
        element: Login,
    },
    {
        path: "/month/:monthName",
        name: "month-detail",
        element: MonthPage,
    },
    {
        path: "/home",
        name: "home",
        element: Home,
    },
    {
        path: "/Expence",
        name: "Expence",
        element: Expence,
    },
    {
        path: "/month",
        name: "Month",
        element: Month
    }
];