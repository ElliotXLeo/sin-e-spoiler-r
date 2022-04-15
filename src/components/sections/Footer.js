import '../../styles/css/Footer.css';

const Footer = () => {

  const credits = {
    author: 'Elliot Garamendi',
    currentYear: new Date().getFullYear()
  };

  const { author, currentYear } = credits;

  return (
    <footer class="footer">
      <nav class="footer-nav">
        <div class="footer-nav-container">
          <ul class="footer-nav__link-list">
            <li class="footer-nav__link-item">
              <a href="https://www.linkedin.com/in/elliotgaramendi/" class="footer-nav__link">
                <img src="https://i.postimg.cc/J7BLFtdc/linkedin.png" alt="LinkedIn" class="footer-nav__link-image" />
              </a>
            </li>
            <li class="footer-nav__link-item">
              <a href="https://www.instagram.com/elliotgaramendi/" class="footer-nav__link">
                <img src="https://i.postimg.cc/sfJtqS4W/instagram.png" alt="Instagram" class="footer-nav__link-image" />
              </a>
            </li>
            <li class="footer-nav__link-item">
              <a href="https://www.facebook.com/elliotgaramendi" class="footer-nav__link">
                <img src="https://i.postimg.cc/7YHyZXZX/facebook.png" alt="Facebook" class="footer-nav__link-image" />
              </a>
            </li>
            <li class="footer-nav__link-item">
              <a href="https://github.com/ElliotXLeo" class="footer-nav__link">
                <img src="https://i.postimg.cc/5NBMxTJX/github.png" alt="GitHub" class="footer-nav__link-image" />
              </a>
            </li>
            <li class="footer-nav__link-item">
              <a href="https://www.youtube.com/channel/UCE9whBrtYnLWrpzwk6z_JUA" class="footer-nav__link">
                <img src="https://i.postimg.cc/dtPYcvbM/youtube.png" alt="YouTube" class="footer-nav__link-image" />
              </a>
            </li>
            <li class="footer-nav__link-item">
              <a href="https://nextjs-react-portafolio-fc.vercel.app" class="footer-nav__link">
                <img src="https://i.postimg.cc/65TVxg9t/world-globe.png" alt="Página Personal"
                  class="footer-nav__link-image" />
              </a>
            </li>
          </ul>
          <h2 class="footer-nav__credits">
            🦄Copyright &copy; {currentYear} <a href="https://www.linkedin.com/in/elliotgaramendi/"
              class="footer-nav__credits-author" target="_blank" rel="noreferrer">{author}</a> Todos los derechos
            reservados.🦄
          </h2>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;