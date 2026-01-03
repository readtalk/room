import { Link } from "react-router";
import { useEffect, useState } from "react";

import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  return (
    <div className="welcome">
      {/* HEADER: hanya menggeser logo ke kiri */}
      <header
        style={{
          width: "100%",
          padding: "16px",
          boxSizing: "border-box",
        }}
      >
        <img
          src={isDark ? logoDark : logoLight}
          alt="Logo"
          style={{
            height: "32px",
          }}
        />
      </header>

      {/* BODY: struktur template TIDAK DIUBAH */}
      <main className="welcome-content">
        <h1>ROOM</h1>

        <nav>
          <ul>
            <li>
              <Link to="https://reactrouter.com/docs">
                React Router Docs
              </Link>
            </li>
            <li>
              <Link to="https://discord.gg/reactrouter">
                Join Discord
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
}
