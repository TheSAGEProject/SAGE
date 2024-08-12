import React from 'react';
import './RoundedBackgroundChat.css';

const RoundedBackChat = () => { // Receive sidebarOpen prop
  return (
    <div className="box">
      <h1></h1>
      <label>
        <input className="sidebar"type="checkbox"></input>
        <div className="toggle">
          <span className="top_line common"></span>
          <span className="middle_line common"></span>
          <span className="bottom_line common"></span>
        </div>
        <div className="slide">
          <h1>Chats</h1>
        </div>
      </label>
      
    </div>
    
  );
}

export default RoundedBackChat;