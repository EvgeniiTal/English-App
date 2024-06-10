import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header bg-primary text-white text-center p-4 mb-3 d-flex justify-content-between">
      <Link to="/" className="text-white text-decoration-none fs-3">English Web</Link>
      <nav className="nav d-flex justify-content-around w-25" >
        <Link to="/game-insert-letter" className="text-white text-decoration-none fs-5">Game insert letter</Link>
        <Link to="/tenses" className="text-white text-decoration-none fs-5">Tenses</Link>
      </nav>
    </header>
  );
}
