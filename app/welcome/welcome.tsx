import React from "react";
import Splash from "../assets/splash.svg"; // nanti diganti path splash.svg
import Logo from "../assets/logo-light.svg"; // logo SVG

const Welcome: React.FC = () => {
  return (
    <div className="app-container">
      {/* Splash screen */}
      <div className="splash-screen">
        <img src={Splash} alt="Splash" className="splash-img" />
      </div>

      {/* Header / UP */}
      <header className="header">
        <img src={Logo} alt="Logo" className="logo" />
        <div className="header-actions">
          <span className="icon-camera">&#128247;</span> {/* placeholder */}
          <span className="menu">&#x22EE;</span>
        </div>
      </header>

      {/* Search area */}
      <div className="search-area">
        <input type="text" placeholder="Search..." />
      </div>

      {/* Center placeholder */}
      <div className="center-placeholder">
        Chat content will appear here.
      </div>

      {/* FAB / + button */}
      <div className="fab">+</div>

      {/* Bottom nav / DOWN */}
      <nav className="bottom-nav">
        <div className="nav-item">Chats</div>
        <div className="nav-item">Status</div>
        <div className="nav-item">Calls</div>
        <div className="nav-item">Settings</div>
      </nav>
    </div>
  );
};

export default Welcome;
