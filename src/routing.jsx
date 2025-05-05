import React from "react";

const MonthSidebar = React.lazy(() => import("./Component/MonthSidebar"));
const Login = React.lazy(() => import("./Component/page/Login"));
const Home = React.lazy(() => import("./Component/Home"));
const Expence = React.lazy(() => import("./Component/Expence"));
const Register = React.lazy(() => import("./Component/page/Register"));
const Customers = React.lazy(() => import("./Component/Costomer"));
const Settings = React.lazy(() => import("./Component/Setting"));
const Logout = React.lazy(() => import('./Component/page/Logout'))

export const router = [
  { path: "/home", name: "home", element: Home },
  { path: "/expence", name: "expence", element: Expence },
  { path: "/register", name: "register", element: Register },
  { path: "/login", name: "login", element: Login },
  { path: "/customers", name: "customers", element: Customers },
  { path: "/settings", name: "settings", element: Settings },
  { path: "/logout", name: "logout", element: Logout}
];
