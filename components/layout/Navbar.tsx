import Button from "@/components/ui/Button";
import { navLinks } from "@/data/navigation";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#" className="brand-logo">
          NÓSTOS <span>ISABEL MORENO</span>
        </a>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <Button variant="gold" href="#contacto" className="nav-cta">
          Agendar Consulta
        </Button>
      </div>
    </nav>
  );
}
