import React from "react";
import "../app.css";
import logoLight from "../welcome/logo-light.svg";

export default function Home() {
  return (
    <div className="app-container">
      {/* UP */}
      <header className="header">
        <img src={logoLight} alt="READTalk Logo" className="logo" />
        <div className="menu">⋮</div>
      </header>

      {/* Search area */}
      <div className="search-area">Search...</div>

      {/* CENTER */}
      <div className="center-placeholder">Center content placeholder</div>

      {/* DOWN / Bottom Nav */}
      <nav className="bottom-nav">
        <div className="nav-item">Chat</div>
        <div className="nav-item">Stories</div>
        <div className="nav-item">Community</div>
        <div className="nav-item">Call</div>
      </nav>

      {/* FAB */}
      <div className="fab">+</div>
    </div>
  );
}
