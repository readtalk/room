import { Link } from "react-router";

import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {/* HANYA ubah alignment container logo */}
      <header className="flex w-full flex-col items-start gap-6 px-4">
        <div className="flex flex-col items-start gap-4">
          <img
            src={logoLight}
            alt="React Router"
            className="block w-full max-w-[160px] dark:hidden"
          />
          <img
            src={logoDark}
            alt="React Router"
            className="hidden w-full max-w-[160px] dark:block"
          />
        </div>
      </header>

      {/* BAGIAN INI TIDAK DIUBAH */}
      <div className="max-w-[300px] w-full space-y-6 px-4">
        <h1 className="text-center text-3xl font-bold">ROOM</h1>

        <nav>
          <ul className="space-y-2">
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
      </div>
    </main>
  );
}
