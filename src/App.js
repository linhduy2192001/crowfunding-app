import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const SignUpPage = lazy(() => import("./pages/SignUpPage"));

function App() {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
    </Routes>
  );
}

export default App;
