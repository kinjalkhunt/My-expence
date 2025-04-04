// this is dynamic route set with lazy packeage for scalibility and flexibility 

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
import DefaultLayOut from "./Component/layout/DefaultLayOut";
import Login from "./Component/page/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        /> */}
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="*" element={<DefaultLayOut/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
