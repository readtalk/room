import React from "react";
import { Link } from "react-router-dom";
import "../app.css";
import logoLight from "./logo-light.svg";
import logoDark from "./logo-dark.svg";

export default function Welcome() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* UP */}
      <header className="header">
        <img src={logoLight} alt="READTalk Logo" className="logo" />
        <div className="menu">⋮</div>
      </header>
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
