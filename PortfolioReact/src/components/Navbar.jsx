import React from 'react';

function Navbar() {
  return (
    <div className="h-20 border flex justify-between items-center bg-white px-16 sticky top-0 z-50 p-4">
      <div className="">
        <img src="./src/assets/logo.png" className="h-16" />
      </div>
      <div className="space-x-9">
        <a href="/about" className="hover:text-orange-600">
          about
        </a>
        <a href="/experience" className="hover:text-orange-600">
          experience
        </a>
        <a href="/project" className="hover:text-orange-600">
          project
        </a>
        <a href="/contact" className="hover:text-orange-600">
          contact
        </a>
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
