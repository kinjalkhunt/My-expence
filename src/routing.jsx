import React from "react";

const MonthSidebar = React.lazy(() => import("./Component/MonthSidebar"))
const Login = React.lazy(() => import("./Component/page/Login"))
const MonthPage =React.lazy(() => import("./Component/MonthPage"))
export const router = [
    // {
    //     path: "/month",
    //     name: "month",
    //     element: MonthSidebar
    // },
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

];
