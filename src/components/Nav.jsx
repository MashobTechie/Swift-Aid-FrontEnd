/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBell, faMapMarkerAlt, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ userName, profileImageUrl }) => {
  return (
    <nav className="bg-red-600 shadow-md">
      <div className="max-w-full mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Branding */}
          <div>
            <Link to="/" className="flex items-center text-white text-xl font-bold">
              {/* <img
                src="/path_to_your_logo.png"
                alt="SwiftAid Logo"
                className="h-8 mr-2"
              /> */}
              SwiftAid
            </Link>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" label="Home" icon={faHome} />
            <NavLink to="/notifications" label="Notifications" icon={faBell} />
            <NavLink to="/map" label="Map" icon={faMapMarkerAlt} />
            <NavLink to="/profile" label="Profile" icon={faUser} />
          </div>
          {/* User Profile or Signup/Login */}
          <div className="flex items-center space-x-4">
            {userName ? (
              <>
                <img
                  src={profileImageUrl || "/default-profile.png"} // Placeholder or default profile image
                  alt="Profile"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="text-white text-sm">Welcome, {userName}</span>
              </>
            ) : (
              <>
                <Link
                  to="/signup"
                  className="text-white text-xl px-5 py-2 rounded-md border border-white hover:bg-white hover:text-red-600 transition duration-300  "
                >
                  Signup
                </Link>
                <Link
                  to="/login"
                  className="text-white text-xl px-5 py-2 rounded-md border border-white hover:bg-white hover:text-red-600 transition duration-300 "
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

const NavLink = ({ to, label, icon }) => {
  return (
    <Link
      to={to}
      className="text-white hover:text-gray-200 flex items-center px-3 py-2 rounded-md transition duration-300"
      activeClassName="bg-white text-red-600"
    >
      <FontAwesomeIcon icon={icon} className="mr-2" />
      {label}
    </Link>
  );
};

export default Navbar;
