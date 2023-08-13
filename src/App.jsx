import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Work from "./pages/Work";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/pricing' />
        <Route path='/contact' />
      </Routes>
    </>
  );
}

export default App;
