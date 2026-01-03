import { useState, useEffect } from "react";
import logoDark from "../welcome/logo-dark.svg";
import logoLight from "../welcome/logo-light.svg";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <main className="relative min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-between">
      {/* UP: logo + teks */}
      <header className="flex items-center gap-4 p-4">
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
        <h1 className="text-2xl font-bold">WhatsApp</h1>
      </header>

      {/* CENTER: kosong */}
      <div className="flex-1"></div>

      {/* DOWN: 4 blok */}
      <footer className="grid grid-cols-2 gap-4 p-4">
        <div className="rounded-md bg-blue-600 text-white p-4 text-center">Chat</div>
        <div className="rounded-md bg-green-600 text-white p-4 text-center">Stories</div>
        <div className="rounded-md bg-yellow-500 text-white p-4 text-center">Community</div>
        <div className="rounded-md bg-purple-600 text-white p-4 text-center">Call</div>
      </footer>

      {/* Tombol + di pojok kanan bawah */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-pink-500 rounded-full text-white text-2xl">
        +
      </button>
    </main>
  );
}
