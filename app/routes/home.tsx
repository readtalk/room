import { useState, useEffect } from "react";
import logoDark from "../welcome/logo-dark.svg";
import logoLight from "../welcome/logo-light.svg";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <main className="relative min-h-screen flex flex-col justify-between">
      {/* UP: logo kiri atas, 3 titik kanan atas, search bar */}
      <header className="flex justify-between items-start p-4">
        <div className="flex items-center gap-2">
          <img
            src={mounted ? logoDark : logoLight}
            alt="Logo"
            className="w-28 h-auto dark:hidden"
          />
          <img
            src={mounted ? logoLight : logoDark}
            alt="Logo"
            className="w-28 h-auto hidden dark:block"
          />
        </div>
        <div className="text-2xl cursor-pointer">⋮</div>
      </header>

      {/* Search text area */}
      <div className="px-4 py-2">
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-md p-2"
        />
      </div>

      {/* CENTER: kosong */}
      <div className="flex-1"></div>

      {/* DOWN: 4 blok layout bawah */}
      <footer className="grid grid-cols-2 gap-4 p-4">
        <div className="p-4 text-center">Chat</div>
        <div className="p-4 text-center">Stories</div>
        <div className="p-4 text-center">Community</div>
        <div className="p-4 text-center">Call</div>
      </footer>

      {/* Tombol + di pojok kanan bawah */}
      <button className="fixed bottom-6 right-6 w-14 h-14 rounded-full">
        +
      </button>
    </main>
  );
}
