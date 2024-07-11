/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const Navbar = ({ userName, profileImageUrl }) => {
  return (
    <nav className="bg-red-600 shadow-md">
      <div className="max-w-full mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Branding */}
          <div>
            <Link to="/" className="flex items-center text-white text-xl font-bold">
              SwiftAid
            </Link>
          </div>
          {/* Navigation Links */}
           
          {/* User Profile or Signup/Login */}
          <div className="flex items-center space-x-4">
            {userName ? (
              <>
                <img
                  src={profileImageUrl} // Profile image URL, or a default profile icon
                  alt="Profile"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="text-white text-sm">Welcome, {userName}</span>
              </>
            ) : (
              <>
                <Link
                  to="/client/auth/signup"
                  className="text-white text-sm px-3 py-2 rounded-md border border-white hover:bg-white hover:text-red-600 transition duration-300"
                >
                  Signup
                </Link>
                <Link
                  to="/client/auth/login"
                  className="text-white text-sm px-3 py-2 rounded-md border border-white hover:bg-white hover:text-red-600 transition duration-300"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, label }) => {
  return (
    <Link
      to={to}
      className="text-white hover:text-gray-200 flex items-center px-3 py-2 rounded-md transition duration-300"
      activeClassName="bg-white text-red-600"
    >
      {label}
    </Link>
  );
};

export default Navbar;
