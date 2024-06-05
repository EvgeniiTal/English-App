import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header bg-primary text-white text-center p-4 mb-3 d-flex justify-content-between">
      <h1>English Web</h1>
      <nav className="nav d-flex justify-content-around w-25" >
        <Link to="/game-insert-letter" className="text-white">Game insert letter</Link>
        <Link to="/tenses" className="text-white">Tenses</Link>
      </nav>
    </header>
  );
}
