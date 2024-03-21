import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="h-20 border flex justify-between items-center bg-white px-16 sticky top-0 z-50 p-4">
      <div className="">
        <Link to="/">
          <img src="./src/assets/logo.png" className="h-16 cursor-pointer" />
        </Link>
      </div>
      <div className="space-x-9">
        <Link to="/about" className="hover:text-orange-600">
          about
        </Link>
        <Link to="/experience" className="hover:text-orange-600">
          experience
        </Link>
        <Link to="/project" className="hover:text-orange-600">
          project
        </Link>
        <Link to="/contact" className="hover:text-orange-600">
          contact
        </Link>
      </div>
      <div className="space-x-3">
        <button className="px-3 py-2 border rounded-md hover:text-orange-600 shadow">
          Resume
        </button>
        <button className="px-3 py-2 border rounded-md hover:text-orange-600 shadow">
          Hire Me
        </button>
      </div>
    </div>
  );
}

export default Navbar;
