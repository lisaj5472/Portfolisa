import { Link } from "react-router-dom";

export default function NavTabs() {
  return (
    <nav className="bg-[color:var(--color-primary)] shadow-sm sticky top-0 z-50 w-full">
      <div className="container-default flex items-center justify-between py-4">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-2">
            <img
              src="/gold_logo_nobg.png"
              alt="LAJ Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-lg font-semibold text-white hidden sm:inline josefin-sans">
              Lisa Jorgensen
            </span>
          </a>
        </div>

        {/* Right: Nav Links */}
        <ul className="flex gap-6 text-sm sm:text-base font-medium text-[color:var(--color-accent)]">
          <li>
            <Link
              to="/"
              className="hover:underline hover:opacity-90 transition-opacity"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:underline hover:opacity-90 transition-opacity"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="hover:underline hover:opacity-90 transition-opacity"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:underline hover:opacity-90 transition-opacity"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
