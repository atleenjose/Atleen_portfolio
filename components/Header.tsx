import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-xl border-b border-white/10 backdrop-blur text-white z-50 p-4 flex justify-between items-center">
      {/* LOGO / NAME */}
      <Link href="/" className="font-bold text-xl">
        Atleen Jose Portfolio
      </Link>

      {/* NAV */}
      <nav className="space-x-4 md:space-x-6">
        <Link
          href="/"
          className="px-4 py-2 border border-gray-700 rounded-xl text-gray-300 hover:border-gray-500 transition"
        >
          Home
        </Link>

        <Link
          href="/#work"
          className="px-4 py-2 border border-gray-700 rounded-xl text-gray-300 hover:border-gray-500 transition"
        >
          What I Build
        </Link>

        <Link
          href="/#contact"
          className="px-4 py-2 border border-gray-700 rounded-xl text-gray-300 hover:border-gray-500 transition"
        >
          Contact
        </Link>

        <a
          href="/Atleen_Jose_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-gray-700 rounded-xl text-gray-300 hover:border-gray-500 transition"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
