import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import { router } from "../routing.jsx";
import PrivateRoute from "./page/PrivateRoute.jsx";
import { router } from "../routing.jsx";

function Content() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center h-screen bg-[#1a2c38]">
            {/* Loader */}
          </div>
        }
      >
        <Routes>
          {router?.map((route, ind) => {
            const Element = route.element;
            return (
              <Route
                key={ind}
                path={route.path}
                element={
                    route.path.startsWith("/") ? (
                    <PrivateRoute>
                      <Element />
                    </PrivateRoute>
                  ) : (
                    <Element />
                  )
                }
              />
            );
          })}
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default Content;
