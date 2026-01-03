import { Link } from "react-router";
import { useEffect, useState } from "react";

import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen flex items-center justify-center">
      {/* Logo – pojok kiri atas */}
      <div className="absolute top-4 left-4">
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

      {/* Konten asli template (tetap di tengah, TIDAK dihapus) */}
      <div className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-bold">React Router</h1>

        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
          This is a starter template using React Router with Cloudflare Workers.
        </p>

        <div className="flex gap-4">
          <Link
            to="/home"
            className="rounded-md bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
