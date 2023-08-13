import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/work' />
        <Route path='/pricing' />
        <Route path='/contact' />
      </Routes>
    </>
  );
}

export default App;
