import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-[#111] py-3 px-6 flex justify-between items-center shadow-md">
    <h1 className="text-2xl font-bold text-[#E53935]">CareConnect</h1>
    <div className="space-x-6">
      <Link to="/login" className="hover:text-[#E53935]">Login</Link>
      <Link to="/register" className="hover:text-[#E53935]">Register</Link>
    </div>
  </nav>
);

export default Navbar;
