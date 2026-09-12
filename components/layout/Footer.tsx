export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-bottom">
          <div>
            <strong>MÉTODO NÓSTOS · ISABEL MORENO</strong>
            <span className="footer-role"> Kinesiologa - Numerología - Terapeuta Holistica.</span>
          </div>
          <div className="footer-social-group">
            <a
              href="https://www.instagram.com/metodonostos?utm_source=qr&stkn=MWF1dG10YXJ5dDFrbQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="Instagram de Método Nóstos"
            >
              <i className="fa-brands fa-instagram" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61593920447819"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="Facebook de Método Nóstos"
            >
              <i className="fa-brands fa-facebook" />
            </a>
          </div>
          <div>&copy; {new Date().getFullYear()} Todos los derechos reservados.</div>
        </div>
      </div>
    </footer>
  );
}
