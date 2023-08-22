import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Footer from "./components/Footer";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact' />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
