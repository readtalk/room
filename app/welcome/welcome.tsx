import { Link } from "react-router-dom";
import logoLight from "./logo-light.svg";
import logoDark from "./logo-dark.svg";

export function Welcome() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* UP */}
      <header
        style={{
          height: "56px",
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          fontWeight: 700,
          fontSize: "20px",
        }}
      >
        <picture>
          <source srcSet={logoDark} media="(prefers-color-scheme: dark)" />
          <img src={logoLight} alt="READTalk" height={28} />
        </picture>
      </header>

      {/* CENTER */}
      <main
        style={{
          flex: 1,
        }}
      />

      {/* DOWN */}
      <footer
        style={{
          height: "56px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          borderTop: "1px solid rgba(0,0,0,0.1)",
          fontSize: "12px",
        }}
      >
        <Link to="#">Chat</Link>
        <Link to="#">Stories</Link>
        <Link to="#">Community</Link>
        <Link to="#">Call</Link>
      </footer>
    </div>
  );
}
