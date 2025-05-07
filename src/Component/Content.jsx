import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { router } from "../routing";
import PrivateRoute from "./page/PrivateRoute";

const Content = () => {
  return (
    <Suspense fallback={<div className="flex justify-center h-screen bg-[#1a2c38]">Loading...</div>}>
      <Routes>
        {router.map((route, index) => {
          // const Element = route.element;
          return (
            route.element && (
              <Route
               key={index}
               path={route.path}
               exact={route.exact}
               name={route.name}
               element={<route.element />}
               />
            )
            // <Route
            //   key={index}
            //   path={route.path}
            //   element={
            //     route.path.startsWith("/") ||
            //     route.path === "/expence" ||
            //     route.path === "/month" ||
            //     route.path === "/customers" ||
            //     route.path === "/settings" ? (
            //       <PrivateRoute>
            //         <Element />
            //       </PrivateRoute>
            //     ) : (
            //       <Element />
            //     )
            //   }
            // />
          );
        })}
        <Route path="/" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default Content;
