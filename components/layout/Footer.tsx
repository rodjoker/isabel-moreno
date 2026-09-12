export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-bottom">
          <div>
            <strong>MÉTODO NÓSTOS · ISABEL MORENO</strong>
            <span className="footer-role"> Kinesiologa - Numerología - Terapeuta Holistica.</span>
          </div>
          <a
            href="https://www.instagram.com/metodonostos?utm_source=qr&stkn=MWF1dG10YXJ5dDFrbQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label="Instagram de Método Nóstos"
          >
            <i className="fa-brands fa-instagram" />
          </a>
          <div>&copy; {new Date().getFullYear()} Todos los derechos reservados.</div>
        </div>
      </div>
    </footer>
  );
}
