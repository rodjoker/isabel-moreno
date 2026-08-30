import Image from "next/image";
import Button from "@/components/ui/Button";
import { navLinks } from "@/data/navigation";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#" className="brand-logo">
          <Image
            src="/images/mn_logo.png"
            alt="Método Nóstos"
            width={120}
            height={120}
            className="brand-logo-img"
          />
          <span>ISABEL MORENO</span>
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
