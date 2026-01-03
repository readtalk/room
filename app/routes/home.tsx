import { useEffect, useState } from "react";
import logoDark from "../welcome/logo-dark.svg";
import logoLight from "../welcome/logo-light.svg";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center gap-12">
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

      {/* Konten home */}
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-semibold">Home Page</h2>
        <div className="grid grid-cols-2 gap-4">
          <button className="rounded-md bg-blue-600 px-4 py-2 text-white">Chat</button>
          <button className="rounded-md bg-green-600 px-4 py-2 text-white">Stories</button>
          <button className="rounded-md bg-yellow-500 px-4 py-2 text-white">Community</button>
          <button className="rounded-md bg-purple-600 px-4 py-2 text-white">Call</button>
        </div>
      </div>
    </main>
  );
}
