import { useEffect, useState } from 'react';
import SplashLogo from './splash.svg'; // pastikan file ada di folder yang sama

export default function Welcome() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1800); // 1.8 detik splash
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && (
        <div className="splash-screen">
          <SplashLogo className="splash-logo" />
        </div>
      )}

      {!showSplash && (
        <div className="welcome-container">
          {/* HEADER UP */}
          <header className="header">
            <div className="logo">
              {/* Logo SVG READTalk */}
              <img src="/assets/logo-light.svg" alt="READTalk Logo" />
            </div>
            <div className="header-actions">
              <span className="camera">📷</span>
              <span className="menu">⋮</span>
            </div>
          </header>

          {/* SEARCH AREA */}
          <div className="search-area">
            <input type="text" placeholder="Cari chat..." />
          </div>

          {/* CENTER PLACEHOLDER */}
          <div className="center-placeholder">
            Pilih chat atau mulai percakapan baru
          </div>

          {/* BOTTOM NAV */}
          <nav className="bottom-nav">
            <div className="nav-item">Chat</div>
            <div className="nav-item">Kontak</div>
            <div className="nav-item">Status</div>
            <div className="nav-item">Pengaturan</div>
          </nav>

          {/* FAB + */}
          <div className="fab">+</div>
        </div>
      )}
    </>
  );
}
