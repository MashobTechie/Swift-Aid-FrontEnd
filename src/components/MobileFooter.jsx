/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBell, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const MobileFooter = () => {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <footer className="fixed bottom-0 w-full bg-white shadow-lg md:hidden">
      <div className="flex justify-around items-center py-2">
        <FooterLink
          to="/"
          label="Home"
          icon={faHome}
          isActive={activeLink === 'Home'}
          onClick={() => setActiveLink('Home')}
        />
        <FooterLink
          to="/notifications"
          label="Notifications"
          icon={faBell}
          isActive={activeLink === 'Notifications'}
          onClick={() => setActiveLink('Notifications')}
        />
        <FooterLink
          to="/map"
          label="Map"
          icon={faMapMarkerAlt}
          isActive={activeLink === 'Map'}
          onClick={() => setActiveLink('Map')}
        />
        <FooterLink
          to="/profile"
          label="Profile"
          icon={faUser}
          isActive={activeLink === 'Profile'}
          onClick={() => setActiveLink('Profile')}
        />
      </div>
    </footer>
  );
};

const FooterLink = ({ to, label, icon, isActive, onClick }) => {
  return (
    <Link
      to={to}
      className={`flex items-center text-sm transition duration-300 ${
        isActive ? 'text-red-600' : 'text-gray-500 hover:text-red-600'
      }`}
      onClick={onClick}
    >
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-full mr-2 ${
          isActive ? 'bg-red-200' : 'bg-transparent'
        }`}
      >
        <FontAwesomeIcon icon={icon} className="text-xl" />
      </div>
      {isActive && <span>{label}</span>}
    </Link>
  );
};

export default MobileFooter;
