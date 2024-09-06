export default function MenuButton({ toggleMenu }) {
  return (
    <button
      onClick={toggleMenu}
      className="md:hidden p-2 text-green-400 hover:text-green-300 transition"
      aria-label="Toggle menu"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  );
}
