import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Upload from "./components/pages/Upload";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
      <Routes>
       <Route path="/Homepage" element={<Home/>} />
        <Route path="/upload" element={<Upload/>} />
        <Route path="/dashboard" element={<Dashboard/>} />

      </Routes>
  );
}

export default App;