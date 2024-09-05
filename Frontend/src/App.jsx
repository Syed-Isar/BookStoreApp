import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";

import Course from "./Course/Course";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Course />} />
      </Routes>
    </>
  );
}

export default App;
