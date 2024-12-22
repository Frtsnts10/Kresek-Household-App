import {
  Home,
  ScanLine,
  UserRound,
  ChartColumnBig,
  UsersRound,
} from "lucide-react";

export default function BottomBar() {
  return (
    <footer className="sticky bottom-0 z-10 shadow-md border-t h-16 bg-[var(--bottombar-bg)] text-[var(--foreground)]">
      <nav className="flex justify-evenly items-center h-full relative">
        {/* Left icons */}
        <a href="/" className="flex flex-col items-center mx-4 text-blue-500">
          <Home size={28} />
        </a>
        <a href="#" className="flex flex-col items-center mx-4 text-gray-500">
          <ChartColumnBig size={28} />
        </a>

        {/* Center elevated icon */}
        <a
          href="#"
          className="transform -translate-y-1/2 bg-black text-white rounded-full p-3 shadow-lg flex items-center justify-center">
          <ScanLine size={32} />
        </a>

        {/* Right icons */}
        <a href="#" className="flex flex-col items-center mx-4 text-gray-500">
          <UsersRound size={28} />
        </a>
        <a href="/profile" className="flex flex-col items-center mx-4 text-gray-500">
          <UserRound size={28} />
        </a>
      </nav>
    </footer>
  );
}
