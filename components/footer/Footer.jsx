export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
        <p>© {currentYear} Todos los derechos reservados</p>
        <p>
          Sitio creado con <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"> NextJS</a> y <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"
          >TailwindCSS</a>
        </p>
    </footer>
  );
}
