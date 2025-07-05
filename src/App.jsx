import { useState } from "react";
import "./App.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [term, setTerm] = useState("");
  const [navOpen, setNavOpen] = useState(false);    // ← NEW
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const q = term.trim();
    if (q) navigate(`/product?q=${encodeURIComponent(q)}`);
    setTerm("");
    setNavOpen(false);                              // mobile पर सर्च के बाद menu बन्द
  };

  return (
    <div className="app-shell">
      <nav className="custom-navbar">
        <div className="brand-and-toggle">
          <div className="navbar-brand">UniverseMart</div>

          {/* Hamburger */}
          <button
            className={`hamburger ${navOpen ? "active" : ""}`}
            onClick={() => setNavOpen(p => !p)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <ul className={`navbar-links ${navOpen ? "show" : ""}`}>
          <li><Link to="/"      onClick={() => setNavOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setNavOpen(false)}>About</Link></li>
          <li><Link to="/product" onClick={() => setNavOpen(false)}>Products</Link></li>
          <li><Link to="/contact" onClick={() => setNavOpen(false)}>Contact</Link></li>
        </ul>

        <form className={`navbar-search ${navOpen ? "show" : ""}`} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </nav>

      <main className="container">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
