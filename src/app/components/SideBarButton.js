import React from 'react';
import './RoundedBackground.css';

const SideBarButton = ({ toggleSidebar }) => {
  return (
    <div className="hamburger-button" onClick={toggleSidebar}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default SideBarButton;