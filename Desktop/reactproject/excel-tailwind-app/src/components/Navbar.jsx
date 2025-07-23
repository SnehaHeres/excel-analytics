import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Excel Analytics</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-green-400">Home</Link>
        <Link to="/upload" className="hover:text-green-400">Upload</Link>
        <Link to="/dashboard" className="hover:text-green-400">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;